import styled from 'styled-components';
import config from '../../../config';

export const Component = styled.b`
  color: ${config.palette.darkBlue};
  font-family: ${config.fonts.normal};
  font-size: 1.4rem;
  line-height: 171%;
  margin: 0;
  @media (max-width: ${config.resolutions.tablet}) {
    line-height: 150%;
  }
`;
