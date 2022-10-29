import styled from 'styled-components';
import config from '../config';

export default styled.section`
  align-items: center;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  line-height: 157%;
  padding-bottom: 3.2rem;
  padding-top: 3.2rem;
  position: relative;

  &:before {
    background: rgba(255, 255, 255, 0.05);
    content: '';
    display: block;
    height: 0.1rem;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .footer-content {
    align-items: center;
    display: flex;

    svg {
      margin-right: 1.6rem;

      &:last-child {
        margin-left: 0.8rem;
        margin-right: 0;
      }
    }

    .licensed-by {
      align-items: center;
      display: flex;
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    flex-wrap: wrap;
    line-height: 150%;
    flex-direction: column-reverse;
    padding-bottom: 4rem;
    padding-top: 2.4rem;

    .footer-content {
      flex-wrap: wrap;
      text-align: center;
      width: 100%;

      &:first-child {
        flex-direction: column-reverse;
      }

      &:last-child {
        justify-content: space-between;

        svg {
          margin: 0;
        }
      }

      .copy {
        margin-bottom: 1.6rem;
        margin-top: 3.2rem;
      }

      .licensed-by {
        width: 12rem;
        flex-wrap: wrap;
      }
    }
  }
`;
