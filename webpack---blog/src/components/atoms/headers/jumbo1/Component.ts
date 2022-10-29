import styled from 'styled-components';
import config from '../../../config';

export const Component = styled.h1`
  color: ${config.palette.darkBlue};
  font-family: ${config.fonts.monoFont};
  font-size: 7.2rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
  line-height: 110%;
  margin: 0;

  @media (max-width: ${config.resolutions.tablet}) {
    font-size: 5.6rem;
    line-height: 130%;
  }
  @media (max-width: ${config.resolutions.mobileL}) {
    font-size: 3.8rem;
  }
`;
