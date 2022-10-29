import styled from 'styled-components';
import config from '../config';
import { Text3 } from '../atoms/body';

const Footer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 3.2rem;
  padding-top: 4.8rem;
  width: 100%;
`;

const Nav = styled.nav`
  margin-right: calc(9.6rem / 3);
  width: calc(25% - (9.6rem / 4));

  &:last-child {
    margin-right: 0;
  }

  & > a {
    color: ${config.palette.white};
    display: block;
    font-size: 2rem;
    font-weight: 700;
    line-height: 160%;
    margin-top: 0.8rem;
    text-decoration: none;
    transition: 0.3s ease-in-out color;

    &:hover {
      color: ${config.palette.lightBlue};
      cursor: pointer;
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 4.8rem;
    margin-right: 0;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    & > a {
      width: calc(50% - 0.8rem);
    }
  }
`;

const FooterSection = styled(Text3)`
  color: #b5c1e5;
  display: block;
  margin-bottom: 1.6rem;
  text-transform: uppercase;
  width: 100%;
`;

export { Footer, Nav, FooterSection };
