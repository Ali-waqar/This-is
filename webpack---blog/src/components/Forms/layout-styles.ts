import styled from 'styled-components';
import config from '../config';

export default styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 54.4rem;
  width: 100%;
  position: relative;

  &.request-syllabus {
    margin-top: 1.6rem;

    .okay-message {
      background: ${config.palette.white};
      border-radius: ${config.borderRadius};
      display: none;
      font-size: 1.6rem;
      line-height: 160%;
      padding: 1.6rem 3.2rem;
    }

    &.requestCorrect {
      & > * {
        display: none;
      }

      .okay-message {
        display: block;
      }
    }

    div {
      text-align: left;
      input {
        background: transparent;
      }
    }

    button {
      font-size: 1.6rem;
      padding: 1.4rem 0;
    }

    &.whiteSubmitButton {
      button {
        font-size: 1.6rem;
        padding: 1.4rem 0;
        background: white;
        border: 1.5px solid #2dc5fa;
        box-sizing: border-box;
        border-radius: 6px;
        color: #2dc5fa;
      }
    }
  }

  &.blog-get-updates {
    background: ${config.palette.secondaryBlack};
    padding-top: 3.2rem;
    max-width: unset;
    flex-wrap: nowrap;

    .okay-message {
      display: none;
    }

    &.requestCorrect {
      padding: 0;

      & > * {
        display: none;
      }

      .okay-message {
        display: block;
        margin: auto;
      }
    }

    button {
      height: 8rem;
      background: ${config.palette.secondaryBlack};
      border-style: solid;
      color: ${config.palette.lightBlue};
      line-height: 130%;
    }
  }

  &.financial-get-more-info-fin-page {
    max-width: 44.8rem;
    margin-top: 3.2rem;
    margin-left: 0;
    margin-right: auto;

    .okay-message {
      display: none;
    }

    &.requestCorrect {
      padding: 0;

      & > * {
        display: none;
      }

      .okay-message {
        display: block;
        margin: auto;
      }
    }

    button {
      background-color: transparent;
      border: 0.2rem solid ${config.palette.orange};
      color: ${config.palette.lightBlue};
      font-size: 2rem;
      line-height: 160%;
      padding: 1.6rem 0;
      transition: 0.3s ease-in-out border;

      &:hover {
        background-color: transparent;
        border: 0.2rem solid ${config.palette.orangeTransparent('0.3')};
      }
    }
  }

  &.financial-get-more-info-campus-page {
    margin-top: 4.8rem;

    .okay-message {
      display: none;
    }

    &.requestCorrect {
      padding: 0;

      & > * {
        display: none;
      }

      .okay-message {
        display: block;
        margin: auto;
      }
    }

    button {
      background-color: transparent;
      border: 0.2rem solid ${config.palette.lightBlue};
      color: ${config.palette.lightBlue};
      font-size: 1.6rem;
      line-height: 130%;
      padding: 1.2rem 0;
      transition: 0.3s ease-in-out border;

      &:hover {
        background-color: transparent;
        border: 0.2rem solid ${config.palette.lightBlueTransparent('0.3')};
      }
    }
  }

  &.financial-get-more-info-campus-course-page {
    margin-top: 3.2rem;

    .okay-message {
      display: none;
    }

    &.requestCorrect {
      padding: 0;

      & > * {
        display: none;
      }

      .okay-message {
        display: block;
        margin: auto;
      }
    }

    button {
      background-color: transparent;
      border: 0.2rem solid ${config.palette.darkBlue};
      color: ${config.palette.darkBlue};
      font-size: 1.6rem;
      line-height: 130%;
      padding: 1.2rem 0;
      transition: 0.3s ease-in-out border;

      &:hover {
        background-color: transparent;
        border: 0.2rem solid ${config.palette.darkBlueTransparent('0.3')};
      }
    }
  }

  @media (max-width: ${config.resolutions.tablet}) {
    &.blog-get-updates {
      flex-direction: column;

      button {
        height: unset;
        width: 100%;
        margin-bottom: 2.4rem;
        padding: 1.4rem 0;
        font-size: 1.6rem;
        line-height: 125%;
      }
    }

    &.financial-get-more-info-campus-page {
      margin-top: 3.2rem;
    }
  }
`;
