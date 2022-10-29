import React from 'react';
import { LinkButtons } from '../../../interfaces/Buttons';
import { Component } from './Component';

function Buttons(props: LinkButtons): JSX.Element {
  const { children, ...others } = props;
  return <Component {...others}>{children}</Component>;
}

export default Buttons;
