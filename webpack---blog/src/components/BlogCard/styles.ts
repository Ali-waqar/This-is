import styled from 'styled-components';

import config from '../config';
import { Component } from '../atoms/body/text5/Component';

const BlogCard = styled.a`
  background: ${config.palette.white};
  border-radius: 0.4rem;
  border: 0.1rem solid ${config.palette.darkBlueTransparent('0.05')};
  box-shadow: 0rem 0.4rem 0.8rem ${config.palette.blackTransparent('0.06')};
  height: 100%;
  text-decoration: none;
  transition: 0.3s ease-in-out box-shadow;

  & > article {
    border-radius: 0.4rem 0.4rem 0 0;
    overflow: hidden;
    position: relative;

    & > div {
      border-radius: 0.4rem 0.4rem 0 0;
      max-height: 18.5rem;
      width: 100%;
      object-fit: cover;
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
    }
  }

  &:hover {
    box-shadow: 0rem 0.4rem 0.8rem ${config.palette.boxShadow};

    & > article > div {
      border-radius: 0.6rem;
      transform: scale(1.15);
    }
  }

  &:active {
    box-shadow: 0rem 0.4rem 1rem ${config.palette.boxShadow};
  }

  & > div {
    padding: 1.6rem;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    min-height: 28.4rem;
    width: 100%;
  }
`;

const Text5 = styled(Component)`
  color: ${config.palette.darkBlue};
  font-size: 2rem;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 1.2rem;

  @media (max-width: ${config.resolutions.mobileL}) {
    margin-bottom: 0.9rem;
  }
`;

const Url = styled.span`
  color: ${config.palette.lightBlue};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 130%;
  text-decoration: none;

  @media (max-width: ${config.resolutions.mobileL}) {
    font-size: 1.4rem;
  }
`;
export { BlogCard, Url, Text5 };
