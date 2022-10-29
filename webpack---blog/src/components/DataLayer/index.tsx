import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import {
  GetBrowsingHistoryPages,
  GetBrowsingHistorySubmits,
} from '../../storage/provider';
import { windowDefined } from '../../lib/utils';

interface TData {
  locale?: string;
  pageName?: string;
  gtmPageType?: string;
  courseCode?: string;
  campusCode?: string;
  courseType?: string;
  courseDuration?: string;
  coursePrice?: string;
}

const courses: { [courseCode: string]: string } = {
  web: 'web development',
  uxui: 'uxui design',
  data: 'data analytics',
  cysec: 'cybersecurity',
};

export default ({
  data,
  extended = false,
}: {
  data: TData;
  extended?: boolean;
}): null => {
  const {
    gtmPageType: pageType,
    locale: language,
    courseCode,
    campusCode: campus,
    courseType,
    courseDuration,
    coursePrice,
  } = data;

  const [dataLayer, updateDataLayer] = useState({});

  const environment = process.env.GATSBY_GTM_ENV;
  const studentType = 'regular';

  const getUserType = (): string => {
    const pages = GetBrowsingHistoryPages() || {};
    const submits = GetBrowsingHistorySubmits() || {};
    const totalHits: number = Object.values(pages).reduce(
      (acc, { hits }) => acc + hits,
      0
    );

    if (submits['applicationThanks']) return 'applicant';
    if (submits['contactThanks']) return 'contact';
    if (submits['financing'] || submits['newsletter'] || submits['syllabus'])
      return 'lead';
    if (totalHits > 3 && pages['apply']) return 'prospect';
    return 'visitor';
  };

  const initializeDataLayer = (): void => {
    updateDataLayer({
      environment,
      pageType,
      language,
      ...(courseCode &&
        courses[courseCode] && {
          courseName: courses[courseCode],
        }),
      ...(campus && { campus }),
      userType: getUserType(),
      studentType,
    });
  };

  useEffect(() => {
    if (_.isEmpty(dataLayer)) initializeDataLayer();
  }, []);

  useEffect(() => {
    if (extended) {
      updateDataLayer({
        ...(courseType && { courseType }),
        ...(courseDuration && { courseDuration }),
        ...(coursePrice && { coursePrice }),
        ...(campus && { campus }),
        ...(courseCode &&
          courses[courseCode] && {
            courseName: courses[courseCode],
          }),
      });
    }
  }, [courseType, campus, courseCode]);

  useEffect(() => {
    if (
      windowDefined() &&
      !_.isEmpty(dataLayer) &&
      typeof _.get(window, 'dataLayer.push', {}) === 'function'
    ) {
      const payload = dataLayer.pageType
        ? { ...dataLayer, clientID: getClientId() }
        : dataLayer;
      window.dataLayer.push(payload);
    }
  }, [dataLayer]);

  return null;
};

function getClientId() {
  const cookies = window.document.cookie.split(';');
  const gaCookie = cookies.find((cookie) => cookie.includes('_ga'));
  return gaCookie && gaCookie.split('=')[1];
}
