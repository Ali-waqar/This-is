import styled from 'styled-components';

import config from '../config';
import Layout from '../atoms/layout';

const Wrapper = styled(Layout)`
  align-items: center;
  display: flex;
  justify-content: space-between;

  nav {
    padding: 1.6rem 0;
  }

  .desktop {
    display: inherit;
  }

  .mobile {
    display: none;
  }

  @media (min-width: ${config.resolutions.desktopS}) {
    &.isDarkBackground {
      -webkit-transition: background 0.3s ease-in-out;

      &:hover {
        background: ${config.palette.white};
        -webkit-transition: background 0.3s ease-in-out;

        nav {
          a,
          div,
          svg > path {
            color: ${config.palette.darkBlue} !important;
            transition: color 1s ease-in-out;
            border-color: ${config.palette.darkBlue} !important;
            transition: border-color 0.5s ease-in-out;
            fill: ${config.palette.darkBlue} !important;
            transition: fill 1s ease-in-out;
          }
        }
      }
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    padding-top: 1.6rem;
    padding-bottom: 3.2rem;

    .desktop {
      display: none;
    }

    .mobile {
      display: inherit;
    }

    a.menuMobile {
      position: fixed;
      top: 2rem;
      z-index: 11;
    }

    a.hide {
      display: none;
    }

    img {
      width: 3.2rem;
    }
  }
`;

const Navbar = styled.nav`
  align-items: center;
  color: ${config.palette.white};
  display: flex;

  > div {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 160%;
    margin-right: 1.6rem;
    cursor: pointer;
    padding-left: 0.8rem;
    padding-right: 0.8rem;

    &:hover {
      background: ${config.palette.blackTransparent('0.1')};
      border-radius: 0.2rem;
    }
  }

  .companies {
    border-color: ${config.palette.darkBlue};
    color: ${config.palette.white};
    cursor: pointer;
    opacity: 1;
    width: auto;

    &.for-companies {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 160%;
      text-decoration: none;
    }
  }
`;

const Select = styled.div`
  position: relative;
  color: ${(props): void =>
    props.dark ? config.palette.white : config.palette.darkBlue};

  & > svg {
    display: inline-block;
    vertical-align: middle;
  }

  & > ul {
    background: ${config.palette.white};
    border-radius: ${config.borderRadius};
    box-shadow: 0 1.6rem 3.2rem ${config.palette.softGrayTransparent('0.1')};
    display: none;
    position: absolute;
    left: 0;
    min-width: 32rem;
    z-index: 2;

    li {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-decoration: none;
      list-style: none;

      &.highlight {
        background-color: ${config.palette.yellowTransparent(0.2)};
      }

      &:hover {
        background: ${config.palette.electricBlue};
        border-radius: 4px;
      }

      &:first-child {
        padding-top: 1.6rem;
      }

      &:last-child {
        padding-bottom: 1.6rem;
      }

      a {
        text-decoration: none;
        color: ${config.palette.darkBlue};
        display: block;
        padding: 0.8rem 2.4rem;

        div {
          margin-top: 2px;
          font-weight: normal;
          font-size: 12px;
          line-height: 130%;
          color: ${config.palette.fourthGray};
        }
      }

      &.all-option {
        font-weight: normal;
        font-size: 12px;
        line-height: 130%;
        margin-top: 1.6rem;
        position: relative;
        margin-bottom: 0;

        &:before {
          content: '';
          display: block;
          border-top: 0.1rem solid ${config.palette.darkBlueTransparent('0.05')};
          position: absolute;
          top: -0.8rem;
          left: 1.2rem;
          width: calc(100% - 2.4rem);
        }

        a {
          color: ${config.palette.fourthGray};
          div {
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: ${config.palette.darkBlue};

            svg {
              margin-left: 0.8rem;
            }
          }
        }
      }
    }
  }

  &:hover {
    & > ul {
      display: revert;
    }
  }
`;

const Campuses = styled.div`
  position: relative;
  color: ${(props): void =>
    props.dark ? config.palette.white : config.palette.darkBlue};

  & > svg {
    display: inline-block;
    vertical-align: middle;
  }

  & > ul {
    background: ${config.palette.white};
    border-radius: ${config.borderRadius};
    box-shadow: 0 1.6rem 3.2rem ${config.palette.softGrayTransparent('0.1')};
    display: none;
    padding: 0.8rem;
    position: absolute;
    width: 36rem;
    position: absolute;
    left: 0;
    z-index: 2;

    > li {
      font-weight: 500;
      font-size: 12px;
      line-height: 100%;
      color: ${config.palette.orange};
      padding: 0.8rem;
      list-style: none;

      > span {
        margin-left: 0.8rem;
        margin-bottom: 0.4rem;
        display: block;
      }

      & > ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        > li {
          font-weight: bold;
          font-size: 16px;
          line-height: 24px;
          text-decoration: none;
          list-style: none;
          width: 50%;

          a {
            text-decoration: none;
            color: ${config.palette.darkBlue};
            display: block;
            padding: 0.8rem;
            position: relative;

            &:hover {
              background: ${config.palette.electricBlue};
              border-radius: 4px;
            }

            div {
              font-weight: normal;
              font-size: 12px;
              line-height: 130%;
              color: ${config.palette.fourthGray};
            }
          }
        }
      }

      &.all-option {
        font-weight: normal;
        font-size: 12px;
        line-height: 130%;
        margin-top: 1.6rem;
        position: relative;
        margin-bottom: 0;

        a {
          text-decoration: none;
          color: ${config.palette.fourthGray};
          display: block;
          padding: 0.8rem 1.2rem;

          &:hover {
            background: ${config.palette.electricBlue};
            border-radius: 4px;
          }

          div {
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            color: ${config.palette.darkBlue};

            svg {
              margin-left: 0.8rem;
            }
          }
        }
        &:before {
          content: '';
          display: block;
          border-top: 0.1rem solid ${config.palette.darkBlueTransparent('0.05')};
          position: absolute;
          top: -0.8rem;
          left: 1.2rem;
          width: calc(100% - 2.4rem);
        }
      }
    }
  }

  &:hover {
    & > ul {
      display: block;
    }
  }
`;

const Languages = styled.ul`
  margin-top: 1rem;
  margin-right: 2.4rem;

  li {
    cursor: pointer;
    list-style-type: none;
    padding-bottom: 1rem;
    position: relative;

    svg {
      height: auto;
      width: 2.4rem;
    }

    & > ul {
      background: ${config.palette.white};
      border-radius: ${config.borderRadius};
      box-shadow: 0 1.6rem 3.2rem ${config.palette.softGrayTransparent('0.1')};
      display: none;
      margin-top: 0.5rem;
      padding: 2.4rem 3.2rem;
      position: absolute;
      right: 0;
      z-index: 2;

      li {
        white-space: nowrap;

        &:last-child {
          padding-bottom: 0;
        }
      }

      .language-links {
        color: ${config.palette.darkBlue};
        font-size: 1.8rem;
        font-weight: 700;
        text-decoration: none;

        svg {
          display: inline-block;
          margin-right: 0.8rem;
        }
      }
    }

    &:hover {
      & > ul {
        display: block;
      }
    }
  }
`;

const MobileMenu = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: ${config.palette.white};
  display: flex;
  font-size: 1.6rem;
  line-height: 150%;
  text-transform: uppercase;
  position: relative;
  z-index: 10;

  & > span {
    margin-top: 0.4rem;
    position: relative;

    &::after {
      background: ${config.palette.whiteTransparent('0.2')};
      bottom: 0;
      content: '';
      height: 0.1rem;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  svg {
    margin-left: 1rem;

    rect {
      color: ${config.palette.white};
      fill: ${config.palette.white};
    }
  }

  &.isNotDarkBackground {
    color: ${config.palette.lightBlue};
    svg {
      margin-left: 1rem;

      rect {
        color: ${config.palette.lightBlue};
        fill: ${config.palette.lightBlue};
      }
    }
  }
`;

const MobileOptions = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;

  > div {
    align-items: center;
    color: ${config.palette.secondaryBlack};
    display: flex;
    font-size: 1.6rem;
    height: 3.2rem;
    justify-content: space-between;
    line-height: 150%;
    margin: 0 2.4rem 2.4rem;

    &.hideGoBack {
      justify-content: flex-end;
      > article {
        display: none;
      }
    }

    &.options-title {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 2.4rem;
      margin-bottom: 2.4rem;
    }

    &.hide {
      display: none;
    }

    article {
      display: flex;
      align-items: center;

      svg {
        margin-bottom: 0.2rem;
      }
    }
  }

  ul {
    list-style-type: none;

    &.hide {
      display: none;
    }

    li {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 100%;
      color: ${config.palette.darkBlue};
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 2.4rem;

      a {
        text-decoration: none;
        color: ${config.palette.darkBlue};
      }

      &.highlight {
        background-color: ${config.palette.yellowTransparent(0.2)};
      }

      &.course-item,
      &.why-ironhack-item,
      &.language-item {
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 140%;

        a {
          &.active {
            color: ${config.palette.lightBlue};
            text-decoration: underline;
          }

          svg {
            display: inline-block;
            margin-right: 1.6rem;
            height: auto;
            width: 4.8rem;
            vertical-align: middle;
          }

          div {
            font-weight: normal;
            font-size: 1.4rem;
            color: ${config.palette.fourthGray};
          }
        }
      }
    }

    li {
      &.campus-group {
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: ${config.palette.orange};
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        list-style: none;
        display: list-item;
        margin-bottom: 0.8rem;

        & > ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          > li {
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 140%;
            text-decoration: none;
            padding: 0.8rem 0;
            list-style: none;
            width: 50%;

            margin-bottom: 0;

            a {
              text-decoration: none;
              color: ${config.palette.darkBlue};
              position: relative;

              div {
                font-weight: normal;
                font-size: 12px;
                line-height: 130%;
                color: ${config.palette.fourthGray};
              }
            }
          }
        }
      }

      &.all-option {
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 140%;
        margin-top: 1.6rem;

        a {
          text-decoration: none;
          color: ${config.palette.fourthGray};
          margin-top: 1.6rem;
          div {
            font-weight: bold;
            font-size: 1.8rem;
            line-height: 140%;
            margin-top: 0.4rem;
            color: ${config.palette.darkBlue};

            svg {
              margin-left: 0.8rem;
            }
          }
        }
        &:before {
          content: '';
          display: block;
          border-top: 0.1rem solid ${config.palette.darkBlueTransparent('0.05')};
          position: absolute;
          width: 100%;
        }
      }
    }
  }
`;

const ButtonApplyNowMobile = styled.a`
  display: block;
  text-decoration: none;
  margin-top: 4rem;
  padding: 1.4rem 0;
  background-color: ${config.palette.lightBlue};
  border-radius: ${config.borderRadius};
  text-align: center;
  font-size: 1.6rem;
  line-height: 125%;
  color: ${config.palette.white};
`;

export {
  Wrapper,
  Navbar,
  Select,
  Campuses,
  Languages,
  MobileMenu,
  MobileOptions,
  ButtonApplyNowMobile,
};
