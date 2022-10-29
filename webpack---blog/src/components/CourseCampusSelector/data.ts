import { TFunction } from 'react-i18next';

import { campusSelectorOptions } from '../../lib/campus';

const courseCodes = ['courseWeb', 'courseUxui', 'courseData', 'courseCysec'];

function getTranslatedCourses(t: TFunction<string>) {
  return courseCodes.map((code) => ({
    value: code,
    label: t(`menu:menu.courses.options.${code}.title`),
    info: {
      title: t(`menu:menu.courses.options.${code}.title`),
      description: t(`menu:menu.courses.options.${code}.description`),
    },
  }));
}

function getTranslatedCampuses(t: TFunction<string>) {
  return campusSelectorOptions.map(({ code, type, badge }) => ({
    value: code,
    label: t(`menu:menu.campuses.options.${code}.title`),
    info: {
      name: t(`menu:menu.campuses.options.${code}.title`),
      type,
      badge,
    },
  }));
}

export { getTranslatedCampuses, getTranslatedCourses };
