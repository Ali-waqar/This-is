import React, { forwardRef } from 'react';

import Props from '../../interfaces/Layout';
import { Component } from './Component';

function Layout(props, ref): JSX.Element {
  const { children, ...others } = props;
  return (
    <Component {...others} ref={ref}>
      {children}
    </Component>
  );
}

export default forwardRef<HTMLDivElement, Props>(Layout);
