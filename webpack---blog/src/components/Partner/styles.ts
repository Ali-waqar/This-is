import styled, { css } from 'styled-components';
import config from '../config';
import { Link } from 'gatsby';

const Images = styled.section`
  margin: 3.2rem 1.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${config.resolutions.mobileL}) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 1.6rem;
  }
`;

const Image = styled.div`
  display: inline-block;
  flex-basis: 20%;
  margin: 0 2.5%;
  filter: grayscale(100%);
  transform: scale(0.85);
  transition: 0.3s ease-in-out filter, 0.3s ease-in-out transform;
  width: 100%;
  height: 13rem;

  &:hover {
    filter: grayscale(0);
    transform: scale(1);
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    flex-basis: 45%;
    margin: 0;
    filter: grayscale(0);
    transform: scale(1);
  }
`;

const ListChecksBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.6rem;

  &:firts-child {
    margin-right: 4.8rem;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    flex-direction: column;
    padding: 0;
  }
`;

const CheckBox = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    width: 45%;
    display: flex;
    align-items: center;
    margin-top: 3.2rem;

    p {
      color: ${config.palette.darkBlueTransparent('0.8')};
    }

    b {
      color: ${config.palette.darkBlue};
    }

    img {
      margin-right: 1.6rem;
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    & > div {
      width: 100%;
      margin-right: 0;
    }
  }
`;

const LinkPartner = styled.a`
  display: table;
  margin: 0 auto;
  text-decoration: none;
  color: ${config.palette.lightBlue};
  font-size: 2rem;
  position: relative;
  padding-bottom: 0.8rem;

  &:hover::after {
    transform: scaleX(1);
  }

  &::after {
    content: '';
    width: 100%;
    background-color: ${config.palette.lightBlue};
    height: 0.2rem;
    bottom: 0;
    content: '';
    position: absolute;
    transition: transform 0.5s;
    transform: scaleX(0.4);
    right: 0;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    display: block;
    padding: 1.5rem;
    font-size: 1.5rem;
    line-height: 130%;
    border-radius: 0.6rem;
    transition: 0.3s;
    border: 0.2rem solid ${config.palette.lightBlue};
    text-align: center;

    &:active {
      border-color: ${config.palette.lightBlueHover};
    }

    &::after {
      display: none;
    }
  }
`;

const LayoutPartner = css`
  padding-bottom: 6.4rem;
  padding-top: 6.4rem;

  > p {
    color: ${config.palette.darkBlueTransparent('0.6')};
    margin-top: 1.6rem;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    padding-bottom: 4.8rem;
    padding-top: 4.8rem;
  }
`;

export { Images, Image, ListChecksBox, CheckBox, LinkPartner, LayoutPartner };
