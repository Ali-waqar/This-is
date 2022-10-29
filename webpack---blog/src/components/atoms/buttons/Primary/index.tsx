import React from 'react';
import Props from '../../../interfaces/Buttons';
import { Component } from './Component';

function Buttons(props: Props): JSX.Element {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Buttons;
