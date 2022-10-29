import styled from 'styled-components';
import config from '../../../config';
import { space } from 'styled-system';

export const Component = styled.h4`
  color: ${config.palette.darkBlue};
  font-family: ${config.fonts.monoFont};
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${config.resolutions.tablet}) {
    font-size: 2.8rem;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    font-size: 2.3rem;
  }
  ${space}
`;
