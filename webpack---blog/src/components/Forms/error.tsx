import React from 'react';
import classNames from 'classnames';
import Wrapper from './error-styles';

interface Props {
  children: React.ReactFragment;
  showError: boolean;
}

function Error(props: Props) {
  const { children, showError } = props;
  const wrapperClass = classNames({ show: showError });
  return <Wrapper className={wrapperClass}>{children}</Wrapper>;
}

export default Error;
