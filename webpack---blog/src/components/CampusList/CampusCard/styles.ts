import styled from 'styled-components';

import config from '../../config';
import { Component } from '../../atoms/body/text5/Component';

const Text5 = styled(Component)`
  margin-top: 0.4rem;
  color: ${config.palette.darkBlueTransparent('0.8')};

  & > b {
    color: ${config.palette.darkBlue};
  }
`;

const StyledCampusCard = styled.a`
  background: ${config.palette.white};
  border-radius: 0.6rem;
  box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.1);
  margin-top: 3.2rem;
  text-decoration: none;
  width: calc(33% - (3.2rem * 2 / 3));

  & > article {
    border-radius: 0.6rem 0.6rem 0 0;
    overflow: hidden;
    position: relative;

    & > img {
      border-radius: 0.6rem 0.6rem 0 0;
      height: 20rem;
      object-fit: cover;
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
      width: 100%;
    }
  }

  .new {
    background: ${config.palette.lightBlue};
    color: ${config.palette.white};
    border-radius: ${config.borderRadius};
    display: none;
    font-size: 1.4rem;
    font-weight: 700;
    left: 0.8rem;
    letter-spacing: 0.02rem;
    line-height: 140%;
    padding: 0.6rem;
    position: absolute;
    text-transform: uppercase;
    top: 0.8rem;
    z-index: 100;
  }

  &.isNew {
    .new {
      display: block;
    }
  }

  &:hover > article > img {
    border-radius: 0.6rem;
    transform: scale(1.15);
  }

  & > div {
    padding: 1.6rem 2.4rem;

    & > p {
      margin-top: 0.4rem;
      color: ${config.palette.darkBlueTransparent('0.8')};
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    margin-top: 2.4rem;
    width: 100%;

    .new {
      font-size: 1.2rem;
    }
  }
`;

const ImageCss = styled.div`
  &:hover {
    border-radius: 0.6rem;
    transform: scale(1.15);
    transition: transform 0.3s ease-in-out;
  }
`;

export { StyledCampusCard, Text5, ImageCss };
