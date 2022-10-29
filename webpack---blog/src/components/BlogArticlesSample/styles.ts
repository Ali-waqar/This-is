import styled from 'styled-components';
import Layout from '../atoms/layout';
import config from '../config';

export default styled(Layout)`
  margin-bottom: 6.4rem;
  margin-top: 4.8rem;
  text-align: center;

  h2 {
    text-align: left;
  }

  .related-posts {
    display: flex;
    margin-bottom: 4.2rem;
    margin-top: 3.2rem;
    text-align: left;

    a {
      cursor: pointer;
      width: calc((100% - 3.2rem) / 3);
    }
  }

  .view-more {
    border: 0.2rem solid ${config.palette.darkBlue};
    border-radius: ${config.borderRadius};
    color: ${config.palette.darkBlue};
    display: inline-block;
    font-size: 1.6rem;
    line-height: 125%;
    padding: 1.2rem 6.4rem;
    text-decoration: none;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    .related-posts {
      flex-wrap: wrap;

      a {
        margin-bottom: 2.4rem;
        width: 100%;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .view-more {
      width: 100%;
    }
  }
`;
