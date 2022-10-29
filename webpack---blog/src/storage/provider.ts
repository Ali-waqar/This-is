import _ from 'lodash';

import { windowDefined } from '../lib/utils';

interface StorageFormData {
  name: string;
  email: string;
  campus: string;
  course: string;
  timezone?: string;
}

interface UserLocation {
  location: { campus: string; remoteTimezone: string };
  priority: { campus: number; remoteTimezone: number };
}

const APPLICATION_DATA = 'applicationData';
const CONTACT_DATA = 'contactData';
const CAMPUS_VISITED = 'campusVisited';
const COURSE_VISITED = 'courseVisited';
const USER_TIMEZONE = 'timezone';
const USER_LOCATION = 'defaultLocation';
const BROWSING_HISTORY_PAGES = 'browsingHistoryPages';
const BROWSING_HISTORY_SUBMITS = 'browsingHistorySubmits';

function SaveApplicationData(data: StorageFormData): void {
  if (windowDefined()) {
    window.localStorage.setItem(
      APPLICATION_DATA,
      JSON.stringify({
        ...data,
      })
    );
  }
}

function SaveContactData(data: StorageFormData): void {
  if (windowDefined()) {
    window.localStorage.setItem(
      CONTACT_DATA,
      JSON.stringify({
        ...data,
      })
    );
  }
}

function SaveCampusVisited(campusCode: string): void {
  if (windowDefined()) {
    window.localStorage.setItem(CAMPUS_VISITED, campusCode);
  }
}

function SaveCourseVisited(courseCode: string): void {
  if (windowDefined()) {
    window.localStorage.setItem(COURSE_VISITED, courseCode);
  }
}

function GetApplicationData(): StorageFormData {
  if (windowDefined()) {
    const data = window.localStorage.getItem(APPLICATION_DATA);
    if (data) {
      return JSON.parse(data);
    }
  }
  return {
    name: '',
    email: '',
    campus: '',
    course: '',
  };
}

function GetContactData(): StorageFormData {
  if (windowDefined()) {
    const data = window.localStorage.getItem(CONTACT_DATA);
    if (data) {
      return JSON.parse(data);
    }
  }
  return {
    name: '',
    email: '',
    campus: '',
    course: '',
  };
}

function GetCampusVisited(): string {
  if (windowDefined()) {
    const data = window.localStorage.getItem(CAMPUS_VISITED);
    if (data) {
      return data;
    }
  }
  return '';
}

function GetCourseVisited(): string {
  if (windowDefined()) {
    const data = window.localStorage.getItem(COURSE_VISITED);
    if (data) {
      return data;
    }
  }
  return '';
}

function GetUserTimezone(): string | null {
  if (windowDefined()) {
    return window.localStorage.getItem(USER_TIMEZONE);
  }
  return null;
}

function SaveUserTimezone(value: string): void {
  if (windowDefined()) {
    window.localStorage.setItem(USER_TIMEZONE, value);
  }
}

function GetUserLocation(): UserLocation | null {
  if (windowDefined()) {
    const data = window.localStorage.getItem(USER_LOCATION);
    if (data) {
      return JSON.parse(data);
    }
  }
  return null;
}

function SaveUserLocation(value: UserLocation): void {
  if (windowDefined()) {
    window.localStorage.setItem(USER_LOCATION, JSON.stringify(value));
  }
}

type TBrowsingHistoryPages = Record<
  string,
  {
    hits: number;
  }
>;

function GetBrowsingHistoryPages(): TBrowsingHistoryPages {
  if (windowDefined()) {
    const pages = window.localStorage.getItem(BROWSING_HISTORY_PAGES);
    return pages && JSON.parse(pages);
  }
}

function updateBrowsingHistoryPages(type: string): void {
  if (windowDefined()) {
    const pages = GetBrowsingHistoryPages() || {};

    if (pages[type]) {
      pages[type] = {
        hits: pages[type].hits + 1,
      };
    } else {
      pages[type] = { hits: 1 };
    }

    window.localStorage.setItem(BROWSING_HISTORY_PAGES, JSON.stringify(pages));
  }
}

type TBrowsingHistorySubmits = Record<string, boolean>;

function GetBrowsingHistorySubmits(): TBrowsingHistorySubmits {
  if (windowDefined()) {
    const sunmits = window.localStorage.getItem(BROWSING_HISTORY_SUBMITS);
    return sunmits && JSON.parse(sunmits);
  }
}

function updateBrowsingHistorySubmits(name: string): void {
  if (windowDefined()) {
    const submits = GetBrowsingHistorySubmits() || {};

    if (!submits[name]) {
      submits[name] = true;
    }

    window.localStorage.setItem(
      BROWSING_HISTORY_SUBMITS,
      JSON.stringify(submits)
    );
  }
}

function writeInStorage(data: Record<string, string>): void {
  _.forEach(data, (value, key) => localStorage.setItem(key, value));
}

function getFromStorage(keys: string[], allOrNone = false): void {
  if (windowDefined()) {
    const data = _.reduce(
      keys,
      (acc, key) => _.set(acc, key, localStorage.getItem(key)),
      {}
    );
    return allOrNone && _.some(data, _.isNull) ? null : data;
  }
  return null;
}

export {
  SaveApplicationData,
  GetApplicationData,
  SaveContactData,
  GetContactData,
  SaveCampusVisited,
  GetCampusVisited,
  SaveCourseVisited,
  GetCourseVisited,
  GetUserTimezone,
  SaveUserTimezone,
  GetUserLocation,
  SaveUserLocation,
  GetBrowsingHistoryPages,
  updateBrowsingHistoryPages,
  GetBrowsingHistorySubmits,
  updateBrowsingHistorySubmits,
  getFromStorage,
  writeInStorage,
};
