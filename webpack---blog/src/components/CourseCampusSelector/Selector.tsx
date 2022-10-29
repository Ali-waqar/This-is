import React from 'react';
import Select, {
  components,
  OptionTypeBase,
  GroupTypeBase,
} from 'react-select';
import { Text, Flex } from '@chakra-ui/react';

type Option = OptionTypeBase | GroupTypeBase<any>;

interface SelectorProps {
  options: Option[];
  labels: {
    title: string;
    placeholder: string;
  };
  customComponents?: Partial<typeof components>;
  onSelected: (code: string) => void;
}

const defaultComponents: Partial<typeof components> = {
  Control: function Control(props): JSX.Element {
    return (
      <Flex
        cursor="pointer"
        flexDirection="column"
        ref={props.innerRef}
        {...props.innerProps}
      >
        <Text fontWeight={'500'} ml={2} textStyle="body6">
          {props.selectProps.labels.title}
        </Text>
        {props.children}
      </Flex>
    );
  },
  IndicatorsContainer: function IndicatorsContainer(): JSX.Element {
    return <></>;
  },
  Menu: function Menu(props): JSX.Element {
    return (
      <Flex
        bgColor="white"
        borderBottomRadius="button"
        minWidth={[312, null, null, 357]}
        mt={1.5}
        pt={2}
        ref={props.innerRef}
        shadow="active3"
        {...props.innerProps}
      >
        {props.children}
      </Flex>
    );
  },
  Placeholder: function Placeholder(props): JSX.Element {
    return (
      <Text
        color="darkBlue.40"
        ml={2}
        mt={0.5}
        textStyle="body4"
        {...props.innerProps}
      >
        {props.selectProps.labels.placeholder}
      </Text>
    );
  },
  SingleValue: function SingleValue(props): JSX.Element {
    return (
      <Text
        ml={2}
        mt={0.5}
        textStyle="body4"
        wordBreak="break-word"
        {...props.innerProps}
      >
        {props.data.label}
      </Text>
    );
  },
  ValueContainer: function ValueContainer(props): JSX.Element {
    return <Flex>{props.children}</Flex>;
  },
};

function Selector(props: SelectorProps): JSX.Element {
  const { options, onSelected, customComponents = {}, labels } = props;

  const selectComponents = {
    ...defaultComponents,
    ...customComponents,
  };

  return (
    <Select
      components={selectComponents}
      isSearchable={false}
      labels={labels}
      onChange={(selection): void => {
        onSelected(selection?.value);
      }}
      menuPortalTarget={typeof document !== 'undefined' && document.body}
      options={options}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
      }}
    />
  );
}

export default Selector;
