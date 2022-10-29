import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const Skills = (props: IconProps): JSX.Element => (
  <Icon fill="none" viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="skills_paint0_linear"
        x1="33.0812"
        x2="33.0812"
        y1="8"
        y2="45.7361"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="skills_paint1_linear"
        x1="9.03938"
        x2="26.8339"
        y1="54.6339"
        y2="50.4666"
      >
        <stop stopColor="#827FFF" />
        <stop offset="1" stopColor="#ADB0FF" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="skills_paint2_linear"
        x1="39.1988"
        x2="39.1143"
        y1="49.826"
        y2="54.7907"
      >
        <stop stopColor="#FFA478" />
        <stop offset="1" stopColor="#FB67AE" />
      </linearGradient>
    </defs>
    <path
      clipRule="evenodd"
      d="M33.0812 45.7361C43.7537 45.7361 52.4055 37.2886 52.4055 26.8681C52.4055 16.4475 43.7537 8 33.0812 8C22.4086 8 13.7568 16.4475 13.7568 26.8681C13.7568 37.2886 22.4086 45.7361 33.0812 45.7361Z"
      fill="url(#skills_paint0_linear)"
      fillRule="evenodd"
    />
    <rect
      fill="white"
      height="13.4761"
      stroke="url(#skills_paint1_linear)"
      strokeWidth="3.94054"
      width="13.8973"
      x="8.97027"
      y="40.0523"
    />
    <path
      clipRule="evenodd"
      d="M33.2163 51.5417C33.2163 49.7928 34.6341 48.375 36.383 48.375H53.8334C55.5823 48.375 57.0001 49.7928 57.0001 51.5417C57.0001 53.2906 55.5823 54.7083 53.8334 54.7083H36.383C34.6341 54.7083 33.2163 53.2906 33.2163 51.5417Z"
      fill="url(#skills_paint2_linear)"
      fillRule="evenodd"
    />
  </Icon>
);
