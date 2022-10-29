import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Box, Button } from '@chakra-ui/react';

import { getTranslatedCampuses, getTranslatedCourses } from './data';
import CourseSelector from './CourseSelector';
import CampusSelector from './CampusSelector';

interface CampusCourSelectorProps {
  onSubmit: (course: string, campus: string) => void;
}

function CourseCampusSelector(props: CampusCourSelectorProps): JSX.Element {
  const { onSubmit } = props;

  const { t } = useTranslation();
  const campuses = useMemo(() => getTranslatedCampuses(t), [t]);
  const courses = useMemo(() => getTranslatedCourses(t), [t]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCampus, setSelectedCampus] = useState('');

  return (
    <Flex
      bgColor="white"
      borderRadius="base"
      direction={['column', null, null, 'row']}
      display={['flex', null, null, 'inline-flex']}
      minWidth={[312, null, null, 640]}
      shadow="active3"
      width={['100%', null, null, 'auto']}
    >
      <Box mr={2} mt={1.5}>
        <CourseSelector
          courses={courses}
          onCourseSelected={setSelectedCourse}
        />
      </Box>
      <Box
        borderBottom={['1px', null, null, null]}
        borderRight={[null, null, null, '1px']}
        color="darkBlue.8"
        height={['0rem', null, null, '4rem']}
        mt={1.5}
      />
      <Box flexGrow={1} mr={1.5} mt={1.5}>
        <CampusSelector
          campuses={campuses}
          onCampusSelected={setSelectedCampus}
        />
      </Box>
      <Box
        borderBottom={['1px', null]}
        mt={1.5}
        sx={{ borderColor: 'darkBlue.8' }}
      />

      <Button
        height={[42, null, null, 53]}
        m={[1.5, null, null, 1]}
        onClick={(): void => onSubmit(selectedCourse, selectedCampus)}
        variant="solid"
        w={['auto', null, null, 135]}
      >
        {t('menu:menu.findButton')}
      </Button>
    </Flex>
  );
}

export default CourseCampusSelector;
