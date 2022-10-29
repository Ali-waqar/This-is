import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash/fp';

import DatoContactInfo from '../../services/datoCampusContactInformation';
import { getLinkByPageName, getCourseCampusLink } from '../../lib/links';
import { capitalize } from '../../lib/utils';
import Layout from '../atoms/layout';
import { Title1 } from '../atoms/headers';
import { CampusListCards, SectionTitle } from './styles';
import { CampusListProps } from './interface';
import CampusCard from './CampusCard';
import ListInfoBox from '../ListInfoBox';
import { isVirtualCampus } from '../../lib/campus';

const reduce = _.reduce.convert({ cap: false });

const CampusList = (props, ref): JSX.Element => {
  const {
    courseCode = '',
    cohorts,
    locale = 'en',
    showLinks,
    ...others
  } = props;
  const { t } = useTranslation();
  const campusContactInfo = new DatoContactInfo(
    locale
  ).contactInformationByLanguage();

  const getLink = (campus: string): string => {
    const urlCourseCode = `course${capitalize(courseCode)}`;
    return courseCode.length > 0
      ? getCourseCampusLink(urlCourseCode, campus)
      : getLinkByPageName(campus);
  };
  const courseCampuses = _.flow(
    _.reduce((acc, cohort) => {
      acc = _.update(
        `${cohort.campus_code}.languages`,
        (languages) => _.concat(cohort.language, _.defaultTo([], languages)),
        acc
      );
      acc = _.update(
        `${cohort.campus_code}.courses`,
        (courses) =>
          _.concat(cohort.course_code.slice(0, -2), _.defaultTo([], courses)),
        acc
      );
      return acc;
    }, {}),
    reduce((campuses, { languages, courses }, campusCode) => {
      const campusInfo = _.find(
        (campusInfo) => campusInfo.campus.code.toLowerCase() === campusCode,
        campusContactInfo
      );

      if (
        _.isObject(campusInfo) &&
        !_.isArray(campusInfo) &&
        cohorts.some(
          (cohort) =>
            cohort.campus_code === campusInfo.campus.code.toLowerCase() &&
            cohort.course_code.slice(0, -2) === courseCode &&
            !['dus', 'bod', 'tpa', 'nyc'].includes(cohort.campus_code)
        )
      ) {
        campuses[campusCode] = {
          country: campusInfo.country,
          name: campusInfo.campus.description,
          code: campusInfo.campus.code,
          url: getLink(`campus${capitalize(campusCode)}`),
          languages: _.uniq(languages).map((language) =>
            t(`languages:languages.${language}`)
          ),
          courses: _.uniq(courses).map((course) =>
            t(`course-list:courseList.${course}.title`)
          ),
          isNew: campusInfo.campus.isNew,
          image: campusInfo.sliderImages[0].fluid,
        };
      }

      return campuses;
    }, {})
  )(cohorts);

  const campusGroups = _.groupBy((campus) => {
    if (campus.code.toLowerCase() === 'rmt') return 'online';
    if (isVirtualCampus(campus.code)) return 'virtual';

    return 'inPerson';
  }, courseCampuses);

  return (
    <Layout {...others} ref={ref}>
      <Title1 as="h2">{t('campus-list:campusList.title')}</Title1>
      {['online', 'virtual', 'inPerson'].map((format) => {
        if (campusGroups[format]) {
          return (
            <>
              <SectionTitle as="h3">
                {t(`campus-list:campusList.format.${format}`)}
              </SectionTitle>
              <CampusListCards>
                {campusGroups[format].map((campus) => (
                  <CampusCard
                    campus={campus}
                    key={campus.code}
                    showCourse={courseCode === ''}
                    showLinks={showLinks}
                  />
                ))}
              </CampusListCards>
            </>
          );
        }

        return null;
      })}

      {courseCode && (
        <ListInfoBox>
          {t('campus-list:campusList.selectCampusInfo', {
            course: t(`course-list:courseList.${courseCode}.title`),
          })}
        </ListInfoBox>
      )}
    </Layout>
  );
};

export default forwardRef<HTMLDivElement, CampusListProps>(CampusList);
