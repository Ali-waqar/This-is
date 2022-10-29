import styled from 'styled-components';
import config from '../config';

export default styled.ol`
  padding: 2.4rem 0;

  li {
    display: inline-block;

    a, span{
      font-size: 1.4rem;
      line-height: 150%;
      color ${config.palette.white};
      margin-left: 0.8rem;
      text-decoration: none;
    }
  
    img {
      margin-left: 0.8rem;
    }
  }
`;
