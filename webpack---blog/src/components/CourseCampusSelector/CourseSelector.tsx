import React from 'react';
import { useTranslation } from 'react-i18next';
import { components } from 'react-select';
import { Text, Flex } from '@chakra-ui/react';

import Selector from './Selector';

type CourseOption = {
  value: string;
  label: string;
  info: {
    title: string;
    description: string;
  };
};

const customComponents: Partial<typeof components> = {
  Option: function Option(props): JSX.Element {
    const info = props.data.info;
    return (
      <Flex
        cursor="pointer"
        direction="column"
        ref={props.innerRef}
        width="100%"
        {...props.innerProps}
      >
        <Text fontWeight="700" ml={2} mr={3} textStyle="body4">
          {info.title}
        </Text>
        <Text color="darkBlue.64" mb={2} ml={2} mr={3} mt={1} textStyle="body5">
          {info.description}
        </Text>
      </Flex>
    );
  },
};

interface CourseSelectorProps {
  courses: CourseOption[];
  onCourseSelected: (code: string) => void;
}

function CourseSelector(props: CourseSelectorProps): JSX.Element {
  const { t } = useTranslation();
  const { courses, onCourseSelected } = props;

  return (
    <Selector
      customComponents={customComponents}
      labels={{
        title: t('menu:menu.courses.title'),
        placeholder: t('menu:menu.courses.placeholder'),
      }}
      onSelected={onCourseSelected}
      options={courses}
    />
  );
}

export default CourseSelector;
