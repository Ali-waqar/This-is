import React from 'react';
import Props from '../../../interfaces/Body';
import { Component } from './Component';

function Text1(props: Props) {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Text1;
