import React from 'react';
import Props from '../../../interfaces/Body';
import { Component } from './Component';

function Text4(props: Props): JSX.Element {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Text4;
