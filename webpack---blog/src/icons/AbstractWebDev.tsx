import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const AbstractWebDev = (props: IconProps): JSX.Element => (
  <Icon viewBox="0 0 48 48" {...props}>
    <rect fill="#6565EE" fillOpacity="0.06" height="48" rx="6" width="48" />
    <path
      clipRule="evenodd"
      d="M24.8896 32.1847C30.9179 32.1847 35.8047 27.2978 35.8047 21.2696C35.8047 15.2414 30.9179 10.3546 24.8896 10.3546C18.8614 10.3546 13.9746 15.2414 13.9746 21.2696C13.9746 27.2978 18.8614 32.1847 24.8896 32.1847Z"
      fill="url(#paint0_linear)"
      fillRule="evenodd"
    />
    <rect
      height="5.03771"
      stroke="url(#paint1_linear)"
      strokeWidth="5.03771"
      width="5.03771"
      x="12.1185"
      y="30.0889"
    />
    <rect
      fill="url(#paint2_linear)"
      height="3.66379"
      rx="1.83189"
      width="13.4339"
      x="24.9658"
      y="33.7112"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear"
        x1="24.914"
        x2="37.965"
        y1="33.921"
        y2="18.6349"
      >
        <stop stopColor="#B8BCFF" />
        <stop offset="1" stopColor="#28CAF7" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear"
        x1="14.8124"
        x2="7.71501"
        y1="28.1548"
        y2="34.0967"
      >
        <stop stopColor="#FFA479" />
        <stop offset="1" stopColor="#FC6FA9" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint2_linear"
        x1="32.4507"
        x2="29.4045"
        y1="29.2803"
        y2="41.5869"
      >
        <stop stopColor="#564CFF" />
        <stop offset="1" stopColor="#2DC5FA" />
      </linearGradient>
    </defs>
  </Icon>
);
