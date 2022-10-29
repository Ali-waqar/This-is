import styled from 'styled-components';
import config from '../../../config';

export const Component = styled.b`
  color: ${config.palette.darkBlue};
  font-family: ${config.fonts.normal};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 133%;
  margin: 0;
  @media (max-width: ${config.resolutions.tablet}) {
    font-size: 2.2rem;
    line-height: 130%;
  }
  @media (max-width: ${config.resolutions.mobileL}) {
    font-size: 2rem;
    line-height: 130%;
  }
  @media (max-width: ${config.resolutions.mobileS}) {
    font-size: 1.8rem;
    line-height: 130%;
  }
`;
