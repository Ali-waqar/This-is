import styled from 'styled-components';
import config from '../../components/config';

export default styled.header`
  max-width: 75rem;
  margin: 2.4rem auto 3.2rem;
  text-align: center;

  & > h1 {
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  & > h2 {
    font-weight: 400;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    text-align: left;

    & > h1 {
      margin-bottom: 1.2rem;
    }
  }
`;
