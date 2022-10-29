import styled from 'styled-components';
import config from '../../../config';

export const Component = styled.b`
  color: ${config.palette.darkBlue};
  font-family: ${config.fonts.normal};
  font-size: 2rem;
  line-height: 160%;
  margin: 0;
  @media (max-width: ${config.resolutions.tablet}) {
    font-size: 1.8rem;
    line-height: 140%;
  }
  @media (max-width: ${config.resolutions.mobileS}) {
    font-size: 1.6rem;
  }
`;
