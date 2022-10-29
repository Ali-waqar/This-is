import React from 'react';
import Props from '../../../interfaces/Body';
import { Component } from './Component';

function Text5(props: Props) {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Text5;
