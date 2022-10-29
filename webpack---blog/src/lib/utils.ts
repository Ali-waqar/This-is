import _ from 'lodash/fp';

import courses from '../courses.json';
import campuses from '../campus.json';

const documentDefined = (): boolean => typeof document !== 'undefined';

const windowDefined = (): boolean => typeof window !== 'undefined';

const isMobile = (): boolean =>
  documentDefined() ? document.body.offsetWidth <= 414 : false;

const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);

const replaceSpecialCharacters = (text: string): string =>
  text.normalize('NFD').replace(/[ \u0300-\u036F\u2019]/g, '');

const scrollFromTop = (topOffset: number): void => {
  if (windowDefined()) {
    window.scroll({
      left: 0,
      top: topOffset,
      behavior: 'smooth',
    });
  }
};

const keyLookup =
  <T>(obj: T) =>
  <K extends keyof T>(key: K): T[K] | undefined =>
    obj[key];

const codeNameObjectFactory = (
  array: Array<Record<string, string>>
): Record<string, string> =>
  array.reduce(
    (result: Record<string, string>, data: Record<string, string>) => ({
      ...result,
      [data.code]: data.name,
    }),
    {}
  );

const courseLookup = keyLookup({
  uxui: 'ux-ui-design',
  data: 'data-analytics',
  cysec: 'cybersecurity',
  web: 'web-dev',
});

const courseAndFormatLookup = keyLookup(codeNameObjectFactory(courses));

const campusLookup = keyLookup(codeNameObjectFactory(campuses));

const formatLookup = keyLookup({
  pt: 'partTime',
  ft: 'fullTime',
});

const countriesLookup = keyLookup({
  br: 'br',
  de: 'de',
  en: 'us',
  es: 'es',
  fr: 'fr',
  nl: 'nl',
  pt: 'pt',
});

const allPass = (predicates) => (item) => {
  for (const fn of predicates) {
    if (!fn(item)) return false;
  }

  return true;
};

const replaceValues = <T>(target: T, ...source: Array<Partial<T>>): T =>
  _.mapValues.convert({ cap: false })(
    (val, key) =>
      _.reduce(
        (returnVal, src) => (_.has(key, src) ? src[key] : returnVal),
        val,
        source
      ),
    target
  );

const dynamicAlignment = (index: number): string => {
  const positions = ['flex-start', 'flex-end', 'center'];
  return positions[index % positions.length];
};

export {
  allPass,
  isMobile,
  campusLookup,
  countriesLookup,
  courseLookup,
  courseAndFormatLookup,
  formatLookup,
  documentDefined,
  dynamicAlignment,
  windowDefined,
  capitalize,
  replaceSpecialCharacters,
  replaceValues,
  scrollFromTop,
};
