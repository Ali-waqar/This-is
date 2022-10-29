import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const Space = (props: IconProps): JSX.Element => (
  <Icon fill="none" viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="space_paint0_linear"
        x1="46.7384"
        x2="46.7384"
        y1="4.62109"
        y2="14.6211"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="space_paint1_linear"
        x1="12.3416"
        x2="11.8431"
        y1="51.5059"
        y2="59.3153"
      >
        <stop stopColor="#FFA478" />
        <stop offset="1" stopColor="#FB67AE" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="space_paint2_linear"
        x1="21.5815"
        x2="21.5815"
        y1="9.48047"
        y2="44.8859"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="space_paint3_linear"
        x1="33.6024"
        x2="31.8375"
        y1="29.2131"
        y2="56.8625"
      >
        <stop stopColor="#FFA478" />
        <stop offset="1" stopColor="#FB67AE" />
      </linearGradient>
    </defs>
    <mask
      height="64"
      id="space_mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      width="64"
      x="0"
      y="0"
    >
      <rect fill="white" height="64" width="64" />
    </mask>
    <g mask="url(#space_mask0)">
      <path
        clipRule="evenodd"
        d="M46.7384 14.6211C49.5014 14.6211 51.7414 12.3825 51.7414 9.62109C51.7414 6.85967 49.5014 4.62109 46.7384 4.62109C43.9753 4.62109 41.7354 6.85967 41.7354 9.62109C41.7354 12.3825 43.9753 14.6211 46.7384 14.6211Z"
        fill="url(#space_paint0_linear)"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M14.8277 59.2148C17.5908 59.2148 19.8307 56.9763 19.8307 54.2148C19.8307 51.4534 17.5908 49.2148 14.8277 49.2148C12.0646 49.2148 9.82471 51.4534 9.82471 54.2148C9.82471 56.9763 12.0646 59.2148 14.8277 59.2148Z"
        fill="url(#space_paint1_linear)"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M21.5815 44.8859C31.3643 44.8859 39.2948 36.9601 39.2948 27.1832C39.2948 17.4062 31.3643 9.48047 21.5815 9.48047C11.7987 9.48047 3.86816 17.4062 3.86816 27.1832C3.86816 36.9601 11.7987 44.8859 21.5815 44.8859Z"
        fill="url(#space_paint2_linear)"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M42.4047 56.507C52.1876 56.507 60.1181 48.5812 60.1181 38.8043C60.1181 29.0273 52.1876 21.1016 42.4047 21.1016C32.6219 21.1016 24.6914 29.0273 24.6914 38.8043C24.6914 48.5812 32.6219 56.507 42.4047 56.507Z"
        fill="url(#space_paint3_linear)"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M38.3978 21.5628C38.3443 21.5731 38.2909 21.5836 38.2375 21.5944C33.3122 22.5871 28.8719 25.4907 26.5563 29.9976C24.2059 34.5721 24.0874 39.6851 25.5765 44.2744C25.5925 44.3235 25.6086 44.3726 25.6251 44.4216C25.6389 44.4186 25.6528 44.4155 25.6667 44.4124C30.3299 43.3795 34.5879 40.2826 37.1638 35.8212C39.7726 31.3025 39.9116 26.193 38.4082 21.5944C38.4047 21.5839 38.4013 21.5733 38.3978 21.5628Z"
        fill="white"
        fillRule="evenodd"
      />
    </g>
  </Icon>
);
