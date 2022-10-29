import React from 'react';
import _ from 'lodash/fp';
import { useTranslation } from 'react-i18next';
import { components } from 'react-select';
import { Text, Flex } from '@chakra-ui/react';

import Selector from './Selector';

type CampusOption = {
  value: string;
  label: string;
  info: {
    name: string;
    type: string;
    badge?: string;
  };
};

interface CampusSelectorProps {
  campuses: CampusOption[];
  onCampusSelected: (code: string) => void;
}

const customComponents: Partial<typeof components> = {
  Option: function Option(props): JSX.Element {
    const info = props.data.info;
    return (
      <Flex mb={2} ref={props.innerRef} width="50%" {...props.innerProps}>
        <Text
          cursor="pointer"
          fontWeight="700"
          ml={2}
          textStyle="body4"
          wordBreak="break-word"
        >
          {info.name}
        </Text>
      </Flex>
    );
  },
  MenuList: function MenuList(props): JSX.Element {
    return (
      <Flex direction="column" ref={props.innerRef}>
        {props.children}
      </Flex>
    );
  },
  Group: function Group(props): JSX.Element {
    return (
      <Flex direction="column">
        <props.Heading {...props.headingProps} />
        <Flex flexWrap="wrap">{props.children}</Flex>
      </Flex>
    );
  },
  GroupHeading: function GroupHeading(props): JSX.Element {
    return (
      <Text
        color="orange.100"
        fontWeight="700"
        mb={2}
        ml={2}
        mt={0.5}
        textStyle="body6"
      >
        {props.data.label}
      </Text>
    );
  },
};

function CampusSelector(props: CampusSelectorProps): JSX.Element {
  const { campuses, onCampusSelected } = props;
  const { t } = useTranslation();
  const { online, inPerson, virtual } = _.groupBy('info.type', campuses);

  const campusOptions = [
    {
      label: t('menu:menu.campuses.onlineLabel'),
      options: online,
    },
    {
      label: t('menu:menu.campuses.virtualLabel'),
      options: virtual,
    },
    {
      label: t('menu:menu.campuses.inPersonLabel'),
      options: inPerson,
    },
  ];

  return (
    <Selector
      customComponents={customComponents}
      labels={{
        title: t('menu:menu.campuses.title'),
        placeholder: t('menu:menu.campuses.placeholder'),
      }}
      onSelected={onCampusSelected}
      options={campusOptions}
    />
  );
}

export default CampusSelector;
