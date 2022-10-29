import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import urls from '../../url.json';

const defaultLanguage = 'en';

const isHomePageUrl = (page: string, lng: string): boolean => page === lng;
const pageExists = (page: string): boolean => urls[page];

const currentLanguage = (): string => {
  const i18n = useTranslation().i18n;
  if ('language' in i18n) {
    return i18n.language;
  }
  return defaultLanguage;
};

const getLinkByPageName = (
  page: string,
  lng: string = currentLanguage()
): string => {
  let url = '';
  const urlParts = page.split('/');

  let unresolvedPath = false;
  let hasEnglishVersion = false;
  urlParts.forEach((urlPart) => {
    if (!pageExists(urlPart)) {
      return (url = `/not-found-${page}`);
    }
    if (!isHomePageUrl(urls[urlPart][lng], lng)) {
      let part = urls[urlPart][lng];
      if (!part) {
        part = urls[urlPart].en; // Check if there's an English page to default to
        if (part) {
          hasEnglishVersion = true;
        } else {
          unresolvedPath = true;
        }
      }
      url += `/${part}`;
    }
  });

  return unresolvedPath
    ? ''
    : hasEnglishVersion
    ? `/en${url}`
    : `/${lng}${url}`;
};

const getLinkWithoutDomain = (page: string): string =>
  getLinkByPageName(page, currentLanguage());

const getCourseCampusLink = (
  course: string,
  campus: string,
  lng: string = currentLanguage()
): string => {
  const courseSlug = _.get(urls, `${course}.${lng}`);
  const campusSlug = _.get(urls, `${campus}.${lng}`);
  if (!courseSlug || !campusSlug) {
    const enCourseSlug = _.get(urls, `${course}.en`);
    const enCampusSlug = _.get(urls, `${campus}.en`);
    if (!enCourseSlug || !enCampusSlug) {
      return `/${lng}`;
    }
    return `/en/${enCourseSlug}/${enCampusSlug}`;
  }
  return `/${lng}/${courseSlug}/${campusSlug}`;
};

export {
  getLinkByPageName,
  getCourseCampusLink,
  currentLanguage,
  getLinkWithoutDomain,
};
