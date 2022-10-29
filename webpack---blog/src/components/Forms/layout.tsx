import React from 'react';
import Layout from './layout-styles';

interface Props {
  children: JSX.Element | React.ReactFragment;
  id?: string;
  className?: string;
}

function FormLayout(props: Props): JSX.Element {
  const { children, ...rest } = props;
  return <Layout {...rest}>{children}</Layout>;
}

export default FormLayout;
