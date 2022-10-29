import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const Illuminati = (props: IconProps): JSX.Element => (
  <Icon fill="none" viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="illuminati_paint0_linear"
        x1="19.4735"
        x2="54.839"
        y1="49.6496"
        y2="52.0994"
      >
        <stop stopColor="#FFA478" />
        <stop offset="1" stopColor="#FB67AE" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="illuminati_paint1_linear"
        x1="31.5714"
        x2="31.5714"
        y1="14.5625"
        y2="27.5106"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
    </defs>
    <path
      clipRule="evenodd"
      d="M31.7501 18.3744L54.4093 60.1602H9.09082L31.7501 18.3744Z"
      fill="url(#illuminati_paint0_linear)"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M31.9284 38.0741C41.7907 38.0741 49.7856 30.4463 49.7856 21.037C49.7856 11.6277 41.7907 4 31.9284 4C22.0662 4 14.0713 11.6277 14.0713 21.037C14.0713 30.4463 22.0662 38.0741 31.9284 38.0741Z"
      fillRule="evenodd"
      stroke="#2DC5FA"
      strokeWidth="4.08889"
    />
    <path
      clipRule="evenodd"
      d="M31.5714 27.5106C35.319 27.5106 38.3571 24.6121 38.3571 21.0366C38.3571 17.461 35.319 14.5625 31.5714 14.5625C27.8237 14.5625 24.7856 17.461 24.7856 21.0366C24.7856 24.6121 27.8237 27.5106 31.5714 27.5106Z"
      fill="white"
      fillRule="evenodd"
      stroke="url(#illuminati_paint1_linear)"
      strokeWidth="4.77037"
    />
  </Icon>
);
