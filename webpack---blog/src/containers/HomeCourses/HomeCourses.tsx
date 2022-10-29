import React from 'react';
import { Box, Flex, forwardRef, Text, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import _ from 'lodash/fp';

import {
  AbstractCyber,
  AbstractData,
  AbstractUxUi,
  AbstractWebDev,
} from '../../icons';
import { getLinkByPageName, getCourseCampusLink } from '../../lib/links';
import CourseCard, { TCourseCard } from './CourseCard';

const getPageLink = (course: string, campusCode?: string): string =>
  campusCode
    ? getCourseCampusLink(course, `campus${_.startCase(campusCode)}`)
    : getLinkByPageName(course);

const getCardsInfo = (
  t: TFunction,
  campusCode?: string,
  campusCourses?: string[]
): TCourseCard[] =>
  _.filter(
    (card) =>
      _.isEmpty(campusCourses) || campusCourses?.includes(card.courseCode)
  )([
    {
      description: t('course-list:courseList.web.description'),
      Icon: AbstractWebDev,
      link: getPageLink('courseWeb', campusCode),
      title: t('course-list:courseList.web.title'),
      courseCode: 'web',
    },
    {
      description: t('course-list:courseList.data.description'),
      Icon: AbstractData,
      link: getPageLink('courseData', campusCode),
      title: t('course-list:courseList.data.title'),
      courseCode: 'data',
    },
    {
      description: t('course-list:courseList.uxui.description'),
      Icon: AbstractUxUi,
      link: getPageLink('courseUxui', campusCode),
      title: t('course-list:courseList.uxui.title'),
      courseCode: 'uxui',
    },
    {
      description: t('course-list:courseList.cysec.description'),
      Icon: AbstractCyber,
      link: getPageLink('courseCysec', campusCode),
      title: t('course-list:courseList.cysec.title'),
      courseCode: 'cysec',
    },
  ]);

type HomeCoursesProps = {
  campusCode?: string;
  campusCourses?: string[];
  downloadSyllabus?: boolean;
};

export default forwardRef<HomeCoursesProps, 'div'>((props, ref) => {
  const { t } = useTranslation(['course-list']);
  const { campusCode, campusCourses, downloadSyllabus, ...boxProps } = props;
  const cardsInfo = getCardsInfo(t, campusCode, campusCourses);

  return (
    <Flex bg="ghostWhite" {...boxProps} ref={ref}>
      <Box
        maxWidth={[null, null, null, '1296px']}
        mx={[2, null, 4, 'auto']}
        my={[3, null, null, 6]}
      >
        <Text as="h2" ml={[1, null, null, 0]} textStyle="title1">
          {t('course-list:courseList.title')}
        </Text>
        <SimpleGrid
          columns={[1, null, 2]}
          mt={[3, null, null, 4]}
          spacingX={[3, null, null, 6]}
          spacingY={[3, null, null, 4]}
        >
          {cardsInfo.map((cardInfo) => (
            <CourseCard
              campusCode={campusCode}
              downloadSyllabus={downloadSyllabus}
              key={cardInfo.title}
              {...cardInfo}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
});
