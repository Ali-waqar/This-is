import style, { css } from 'styled-components';
import config from '../../../config';
import {
  InterfacePrimaryButtons,
  PropComponent
} from '../../../interfaces/Buttons';
import { hexStringToRGB } from '../../../../utils/css';

// tslint:disable: object-literal-sort-keys
const primaryButtons: InterfacePrimaryButtons = {
  s: css`
    min-width: 17.1rem;
    font-size: 1.6rem;
    line-height: 150%;
    padding: 1.2rem 4.8rem;
    @media (max-width: ${config.resolutions.mobileL}) {
      width: 28.8rem;
      font-size: 1.5rem;
      line-height: 130%;
      padding: 1.1rem 0 1rem 0;
    }
  `,
  m: css`
    width: 18.9rem;
    font-size: 2rem;
    line-height: 160%;
    padding: 2.4rem 4.8rem;
    @media (max-width: ${config.resolutions.mobileL}) {
      width: 30.4rem;
      font-size: 1.5rem;
      line-height: 130%;
      padding: 1.1rem 0 1rem 0;
    }
  `,
  l: css`
    width: 35.7rem;
    font-size: 2rem;
    line-height: 160%;
    padding: 2.4rem 13.2rem;
  `,
  xl: css`
    width: 42.6rem;
    font-size: 2rem;
    line-height: 160%;
    padding: 2.4rem 0;
  `,
  fixed: css`
    width: 16rem;
    font-size: 1.6rem;
    line-height: 150%;
    padding: 2.8rem 4.1rem;
  `,
  lGrey: css`
    width: 18rem;
    background: ${config.palette.white};
    color: ${config.palette.lightBlue};
    font-size: 1.6rem;
    line-height: 150%;
    padding: 2.8rem 2.4rem;
    border: 1px solid rgba(${hexStringToRGB(config.palette.lightGray)}, 0.1);

    &:hover {
      background: ${config.palette.white};
      border: 1px solid rgba(${hexStringToRGB(config.palette.lightGray)}, 0.2);
    }

    &:active {
      background: ${config.palette.white};
      border: 1px solid rgba(${hexStringToRGB(config.palette.lightGray)}, 0.3);
    }
  `
};

export const Component = style('button')<PropComponent>`
  font-family:${config.fonts.normal};
  background: ${config.palette.lightBlue};
  color: ${config.palette.white};
  border-radius: 0.6rem;
  font-weight: 500;
  transition: 0.3s;
  border:0;
  cursor: pointer;
  outline:none;

  &:hover {
    background: ${config.palette.lightBlueHover};
  }

  &:active {
    background: ${config.palette.lightBlueActive};
  }

  @media (max-width: ${config.resolutions.mobileL}){
    &:active {
      background: ${config.palette.lightBlueHover}
    }
  }
  ${props => primaryButtons[props.size || 'm']}
  ${props => props.extend};
`;
