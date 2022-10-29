import React from 'react';
import Props from '../../../interfaces/Headers';
import { Component } from './Component';

function Jumbo1(props: Props) {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Jumbo1;
