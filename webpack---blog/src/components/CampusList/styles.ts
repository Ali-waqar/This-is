import styled from 'styled-components';
import config from '../config';
import { Component as Text1 } from '../atoms/body/text1/Component';

const CampusListCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-bottom: 4rem;

  a:nth-child(3n + 2) {
    margin-left: calc((2.1333rem * 3) / 2);
    margin-right: calc((2.1333rem * 3) / 2);
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    a:nth-child(3n + 2) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const SectionTitle = styled(Text1)`
  margin-bottom: -1.6rem;
  margin-top: 3.2rem;

  &.margin-big {
    margin-top: 4.8rem;
  }
`;

export { CampusListCards, SectionTitle };
