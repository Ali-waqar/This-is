import styled from 'styled-components';
import config from '../../../config';

export const Component = styled.b`
  color: ${config.palette.darkBlue};
  font-family: ${config.fonts.normal};
  font-size: 1.6rem;
  line-height: 150%;
  margin: 0;
  @media (max-width: ${config.resolutions.mobileS}) {
    font-size: 1.5rem;
  }
`;
export default Component;
