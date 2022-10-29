import styled from 'styled-components';
import config from '../../../config';

export const Component = styled.b`
  color: ${config.palette.darkBlue};
  font-family: ${config.fonts.normal};
  font-size: 2rem;
  font-weight: 700;
  line-height: 160%;
  margin: 0;
  & em {
    font-style: initial;
  }
  @media (max-width: ${config.resolutions.tablet}) {
    font-size: 1.8rem;
    line-height: 140%;
  }
  @media (max-width: ${config.resolutions.mobileL}) {
    font-size: 1.8rem;
    font-weight: 600;
  }
  @media (max-width: ${config.resolutions.mobileS}) {
    font-size: 1.6rem;
  }
`;
