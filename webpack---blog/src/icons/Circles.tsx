import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const Circles = (props: IconProps): JSX.Element => (
  <Icon fill="none" viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="circles_paint0_linear"
        x1="19.2991"
        x2="19.2991"
        y1="8.41797"
        y2="55.218"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="circles_paint1_linear"
        x1="29.5128"
        x2="16.0052"
        y1="43.7092"
        y2="42.1649"
      >
        <stop stopColor="#827FFF" />
        <stop offset="1" stopColor="#ADB0FF" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="circles_paint2_linear"
        x1="34.2705"
        x2="31.7072"
        y1="24.9508"
        y2="45.0172"
      >
        <stop stopColor="#FFA478" />
        <stop offset="1" stopColor="#FB67AE" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint3_linear"
        x1="30.9992"
        x2="30.9992"
        y1="29.4688"
        y2="34.1723"
      >
        <stop stopColor="#68E0D0" />
        <stop offset="1" stopColor="#30C7F9" />
      </linearGradient>
    </defs>
    <path
      d="M7.59912 31.818C7.59912 44.7414 18.0757 55.218 30.9991 55.218V8.41797C18.0757 8.41797 7.59912 18.8945 7.59912 31.818Z"
      fill="url(#circles_paint0_linear)"
    />
    <mask fill="white" id="circles_path-2-inside-1">
      <path
        clipRule="evenodd"
        d="M30.9995 45.0007C23.8175 45.0007 17.9953 39.1785 17.9953 31.9964C17.9953 24.8144 23.8175 18.9922 30.9995 18.9922"
        fillRule="evenodd"
      />
    </mask>
    <path
      d="M30.9995 60.0007C15.5332 60.0007 2.99528 47.4627 2.99528 31.9964H32.9953C32.9953 30.8942 32.1017 30.0007 30.9995 30.0007V60.0007ZM2.99528 31.9964C2.99528 16.5301 15.5332 3.99219 30.9995 3.99219V33.9922C32.1017 33.9922 32.9953 33.0987 32.9953 31.9964H2.99528Z"
      fill="url(#circles_paint1_linear)"
      mask="url(#circles_path-2-inside-1)"
    />
    <path
      clipRule="evenodd"
      d="M30.9995 45.0007C38.1816 45.0007 44.0037 39.1785 44.0037 31.9964C44.0037 24.8144 38.1816 18.9922 30.9995 18.9922"
      fill="url(#circles_paint2_linear)"
      fillRule="evenodd"
    />
    <path
      d="M33.351 31.8205C33.351 33.1193 32.2981 34.1723 30.9992 34.1723C29.7004 34.1723 28.6475 33.1193 28.6475 31.8205C28.6475 30.5217 29.7004 29.4688 30.9992 29.4688C32.2981 29.4688 33.351 30.5217 33.351 31.8205Z"
      fill="url(#paint3_linear)"
    />
  </Icon>
);
