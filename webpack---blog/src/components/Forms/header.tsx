import React from 'react';
import { Title2 } from '../atoms/headers';
import { Text3 } from '../atoms/body';
import Header from './header-styles';

interface Props {
  title: string;
  subtitle: string;
}

function FormHeader(props: Props): JSX.Element {
  const { title, subtitle } = props;
  return (
    <Header showBackground={false}>
      <Title2 as="h1">{title}</Title2>
      <Text3 as="h2">{subtitle}</Text3>
    </Header>
  );
}

export default FormHeader;
