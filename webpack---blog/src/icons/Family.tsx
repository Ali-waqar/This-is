import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const Family = (props: IconProps): JSX.Element => (
  <Icon fill="none" viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="family_paint0_linear"
        x1="47"
        x2="47"
        y1="53.1992"
        y2="23.8682"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="family_paint1_linear"
        x1="17"
        x2="17"
        y1="53.1992"
        y2="23.8682"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="family_paint2_linear"
        x1="28.655"
        x2="27.9543"
        y1="14.2914"
        y2="25.5124"
      >
        <stop stopColor="#FFA478" />
        <stop offset="1" stopColor="#FB67AE" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="family_paint3_linear"
        x1="29.6381"
        x2="36.006"
        y1="52.6561"
        y2="52.0014"
      >
        <stop stopColor="#827FFF" />
        <stop offset="1" stopColor="#ADB0FF" />
      </linearGradient>
    </defs>
    <path
      d="M62 23.8682C45.4315 23.8682 32 37.0002 32 53.1992"
      stroke="url(#family_paint0_linear)"
      strokeWidth="6.12245"
    />
    <path
      d="M2 23.8682C18.5685 23.8682 32 37.0002 32 53.1992"
      stroke="url(#family_paint1_linear)"
      strokeWidth="6.12245"
    />
    <path
      clipRule="evenodd"
      d="M32.3059 25.3662C36.3635 25.3662 39.6529 22.1502 39.6529 18.1831C39.6529 14.216 36.3635 11 32.3059 11C28.2483 11 24.959 14.216 24.959 18.1831C24.959 22.1502 28.2483 25.3662 32.3059 25.3662Z"
      fill="url(#family_paint2_linear)"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M31.9932 53.3315V39.7305C31.9932 39.7305 30.1544 43.7214 29.6558 45.9414C29.3989 47.0856 29.1475 48.8209 29.0022 51.1408C28.9595 51.8215 28.939 53.3315 28.939 53.3315H31.9932ZM32.0002 53.3315V39.7305C32.0002 39.7305 33.839 43.7214 34.3375 45.9414C34.5945 47.0856 34.8459 48.8209 34.9912 51.1408C35.0338 51.8215 35.0544 53.3315 35.0544 53.3315H32.0002Z"
      fill="url(#family_paint3_linear)"
      fillRule="evenodd"
    />
  </Icon>
);
