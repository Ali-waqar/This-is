import style, { css } from 'styled-components';
import config from '../../../config';
import {
  PropComponent,
  InterfacePrimaryButtons
} from '../../../interfaces/Buttons';

const secondaryButtons: InterfacePrimaryButtons = {
  s: css`
    border: 0.1rem solid ${config.palette.white};
    color: ${config.palette.white};
    font-size: 1.4rem;
    line-height: 140%;
    padding: 1rem 1.6rem;

    @media (max-width: ${config.resolutions.mobileL}) {
      font-size: 1.5rem;
      line-height: 130%;
      opacity: 1;
      padding: 1.1rem 0 1rem 0;
      width: 100%;
    }
  `,
  m: css`
    border: 0.2rem solid ${config.palette.lightBlue};
    color: ${config.palette.lightBlue};
    font-size: 1.6rem;
    line-height: 125%;
    padding: 1.4rem 6.4rem;

    &:hover {
      border-color: ${config.palette.lightBlueHover};
    }

    &:active {
      border-color: ${config.palette.lightBlueActive};
    }

    @media (max-width: ${config.resolutions.mobileL}) {
      font-size: 1.5rem;
      line-height: 130%;
      padding: 1rem 0;
      width: 28.8rem;

      &:active {
        border-color: ${config.palette.lightBlueHover};
      }
    }
  `,
  xl: css`
    border: 0.2rem solid ${config.palette.lightBlue};
    color: ${config.palette.lightBlue};
    font-size: 2rem;
    line-height: 160%;
    padding: 2.4rem 0;
    width: 23.2rem;

    &:hover {
      border-color: ${config.palette.lightBlueHover};
    }

    &:active {
      border-color: ${config.palette.lightBlueActive};
    }
    @media (max-width: ${config.resolutions.mobileL}) {
      font-size: 1.5rem;
      line-height: 130%;
      padding: 1rem 0;
      width: 28.8rem;

      &:active {
        border-color: ${config.palette.lightBlueHover};
      }
    }
  `
};

export const Component = style.a<PropComponent>`
  ${props => secondaryButtons[props.size || 's']}
  border-radius: 0.6rem;
  cursor: pointer;
  font-family:${config.fonts.normal};
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;

  ${props => props.extend};
`;
