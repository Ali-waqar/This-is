import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const AbstractData = (props: IconProps): JSX.Element => (
  <Icon viewBox="0 0 48 48" {...props}>
    <rect fill="#6565EE" fillOpacity="0.06" height="48" rx="6" width="48" />
    <path
      clipRule="evenodd"
      d="M24.8459 36.8169C30.8704 36.8169 35.7542 31.9331 35.7542 25.9085C35.7542 19.884 30.8704 15.0002 24.8459 15.0002C18.8213 15.0002 13.9375 19.884 13.9375 25.9085C13.9375 31.9331 18.8213 36.8169 24.8459 36.8169Z"
      fill="url(#paint0_linear)"
      fillOpacity="0.8"
      fillRule="evenodd"
    />
    <path
      d="M25.4212 9.34315L38.4004 22.3223H25.4212V9.34315Z"
      fill="url(#paint1_linear)"
    />
    <path
      clipRule="evenodd"
      d="M12.3596 38.6569C13.8838 38.6569 15.1195 37.4212 15.1195 35.8969C15.1195 34.3727 13.8838 33.137 12.3596 33.137C10.8353 33.137 9.59961 34.3727 9.59961 35.8969C9.59961 37.4212 10.8353 38.6569 12.3596 38.6569Z"
      fill="url(#paint2_linear)"
      fillRule="evenodd"
    />
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear"
        x1="24.8703"
        x2="37.9133"
        y1="38.5521"
        y2="23.2754"
      >
        <stop stopColor="#B8BCFF" />
        <stop offset="1" stopColor="#28CAF7" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear"
        x1="29.1829"
        x2="36.6742"
        y1="7.11461"
        y2="28.7999"
      >
        <stop offset="0.272987" stopColor="#FFA478" />
        <stop offset="1" stopColor="#FB67AE" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint2_linear"
        x1="6.47612"
        x2="9.23607"
        y1="34.517"
        y2="40.7639"
      >
        <stop stopColor="#564CFF" />
        <stop offset="1" stopColor="#B8BCFF" />
      </linearGradient>
    </defs>
  </Icon>
);
