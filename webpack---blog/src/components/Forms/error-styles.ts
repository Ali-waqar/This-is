import styled from 'styled-components';
import config from '../../components/config';

export default styled.section`
  background: ${config.palette.errorRedTransparent('0.15')};
  border-radius: ${config.borderRadius};
  color: ${config.palette.errorRed};
  display: none;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 140%;
  margin-top: 2.4rem;
  padding: 1.2rem 1.6rem;
  text-align: center;
  width: 100%;

  &.show {
    display: block;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    padding: 1.2rem;
  }
`;
