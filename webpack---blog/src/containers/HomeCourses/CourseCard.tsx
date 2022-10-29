import React, { useState, useCallback } from 'react';
import {
  Box,
  Button,
  Flex,
  IconProps,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import FormDownloadSyllabus from '../../components/FormDownloadSyllabus';

export type TCourseCard = {
  title: string;
  description: string;
  link: string;
  Icon: (props: IconProps) => JSX.Element;
  downloadSyllabus?: boolean;
  courseCode: string;
  campusCode?: string;
};

function CourseCard(props: TCourseCard): JSX.Element {
  const {
    title,
    description,
    Icon,
    link,
    downloadSyllabus,
    courseCode,
    campusCode,
  } = props;
  const { t } = useTranslation(['course-list']);

  const [showForm, setShowForm] = useState(false);
  const handleFormDisplay = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm, setShowForm]);

  return (
    <Flex direction="column" mb={showForm ? 6 : 0}>
      <Box
        background="white"
        borderRadius={['button', null, null, 'card']}
        boxShadow={['active2', null, null, 'active1']}
        height="fit-content"
        mb={showForm ? 2 : 0}
        p={[2, null, null, 3]}
      >
        <Flex direction={['column', null, null, 'row']}>
          <Icon boxSize="48px" />
          <Text
            as="h3"
            ml={[0, null, null, 2]}
            mt={[2, null, null, 0]}
            textStyle="title2"
          >
            {title}
          </Text>
        </Flex>
        <Text color="darkBlue.80" mt={[1, null, null, 2]} textStyle="body4">
          {description}
        </Text>
        <SimpleGrid
          columns={[1, null, null, downloadSyllabus ? 2 : 1]}
          spacing={2}
        >
          <Button
            colorScheme="electricblue"
            mt={[2, null, null, 3]}
            onClick={(): void => {
              window.location.href = link;
            }}
            variant={downloadSyllabus ? 'solid' : 'outline'}
          >
            {t(
              downloadSyllabus
                ? 'course-campus:courseCampus.formats.experiment.info.cta'
                : 'course-list:courseList.cta'
            )}
          </Button>
          {downloadSyllabus && (
            <Button
              colorScheme="electricblue"
              mt={[0, null, null, 3]}
              onClick={handleFormDisplay}
              variant="outline"
              whiteSpace="initial"
            >
              {t('course-campus:courseCampus.downloadSyllabus.cta')}
            </Button>
          )}
        </SimpleGrid>
      </Box>
      {downloadSyllabus && showForm && (
        <FormDownloadSyllabus campusCode={campusCode} courseCode={courseCode} />
      )}
    </Flex>
  );
}

export default CourseCard;
