import styled from 'styled-components';
import config from '../config';

export default styled.section`
  align-items: baseline;
  background: ${config.palette.darkBlueTransparent('0.05')};
  border-radius: ${config.borderRadius};
  display: flex;
  padding: 1.6rem;

  svg {
    margin-right: 1.8rem;
  }
`;
