import React from 'react';
import Props from '../../../interfaces/Headers';
import { Component } from './Component';

function Title2(props: Props) {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Title2;
