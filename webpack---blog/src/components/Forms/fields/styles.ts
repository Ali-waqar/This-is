import styled from 'styled-components';

import config from '../../config';

const Wrapper = styled.div`
  margin-bottom: 3.8rem;
  width: 100%;
  position: relative;

  & > * {
    width: 100%;
  }

  &.hide {
    display: none;
  }

  &.invalid > input,
  &.invalid > select {
    border-bottom-color: ${config.palette.errorRed};
  }

  > small {
    display: none;
  }

  &.invalid > small {
    display: inline;
    font-size: 1.4rem;
    line-height: 130%;
    color: ${config.palette.errorRed};
    position: absolute;
    left: 0;
    bottom: -2rem;
  }

  &.phoneNumber {
    & > input {
      width: calc(100% - 4.8rem);
    }

    .prefix {
      margin-right: 0.8rem;
      width: 4rem;

      &.invalid {
        border-bottom-color: ${config.palette.errorRed};
      }
    }
  }
`;

const PhoneWrapper = styled(Wrapper)`
  .react-tel-input {
    .country-list .flag {
      position: static;
    }

    .form-control {
      width: 100%;
      background: transparent;
      border-radius: 0;
      border: 0;
      border-bottom: 0.2rem solid ${config.palette.darkBlue};
      color: ${config.palette.lightBlue};
      font-size: 1.6rem;
      line-height: 150%;
      padding-bottom: 0.2rem;
      outline: 0;

      &.invalid-number {
        background: transparent;
        border: 0;
        border-bottom: 0.2rem solid ${config.palette.errorRed};

        &:focus {
          background: transparent;
          border: 0;
          border-bottom: 0.2rem solid ${config.palette.errorRed};
        }
      }
    }
    .flag-dropdown {
      background: transparent;
      border: 0;
      border-bottom: 0.2rem solid ${config.palette.darkBlue};
      color: ${config.palette.lightBlue};
      font-size: 1.6rem;
      line-height: 150%;
      padding-bottom: 0.2rem;
      outline: 0;
      margin-right: 0.8rem;
      width: 5rem;

      &.open {
        background: transparent;
      }

      .selected-flag {
        background: transparent;
        &:hover,
        &.open {
          background: transparent;
        }
      }

      &.invalid-number {
        background: transparent;
        border: 0;
        border-bottom: 0.2rem solid ${config.palette.errorRed};
      }
    }
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 133%;
  margin-bottom: 0.6rem;
  min-height: 1.5rem;
`;

const TextField = styled.input`
  border: 0;
  border-radius: 0px;
  border-bottom: 0.2rem solid ${config.palette.darkBlue};
  color: ${config.palette.lightBlue};
  font-size: 1.6rem;
  line-height: 150%;
  padding-bottom: 0.2rem;
  outline: 0;

  &::placeholder {
    color: ${config.palette.darkBlueTransparent('0.2')};
  }
  &:disabled {
    opacity: 0.8;
  }
`;

const Dropdown = styled.select`
  appearance: none;
  background: url('/assets/icons/dropdown/dropdown-arrow.svg')
    calc(100% - 0.8rem) center no-repeat transparent;
  border: 0;
  border-bottom: 0.2rem solid ${config.palette.darkBlue};
  border-radius: 0;
  color: ${config.palette.darkBlueTransparent('0.2')};
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 150%;
  outline: 0;
  padding-bottom: 0.2rem;

  &.selected {
    color: ${config.palette.lightBlue};
  }
`;

const ButtonSelectorWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &.invalid {
    button {
      background: ${config.palette.errorRed};
      color: ${config.palette.white};
    }
  }
`;

const ButtonSelector = styled.button`
  background: ${config.palette.darkBlueTransparent('0.03')};
  border: 1px solid transparent;
  border-radius: ${config.borderRadius};
  color: ${config.palette.darkBlue};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 170%;
  margin-bottom: 1.6rem;
  outline: 0;
  padding: 1.2rem 0;
  transition: 0.3s ease-in-out background, 0.3s ease-in-out color;
  width: calc(50% - 1.6rem);

  &.active,
  &:hover {
    background: ${config.palette.lightBlueHover};
    color: ${config.palette.white};
  }

  &.active {
    background: ${config.palette.lightBlueActive};
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    font-size: 1.6rem;
    line-height: 130%;
    padding: 1.2rem 0;
    width: 100%;

    &:nth-last-child(-n + 2) {
      margin-bottom: 1.6rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Button = styled.button`
  background: ${config.palette.lightBlue};
  border-color: ${config.palette.lightBlue};
  border-radius: ${config.borderRadius};
  color: ${config.palette.white};
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
  line-height: 160%;
  padding: 2.4rem 0;
  text-align: center;
  transition: 0.3s ease-in-out background;
  width: 100%;

  &:hover {
    background: ${config.palette.lightBlueHover};
  }

  &.sending {
    background: ${config.palette.lightBlueActive};
    pointer-events: none;
  }

  &.disabled {
    background: ${'#abe7fd'};
    border-color: ${'#abe7fd'};
    pointer-events: none;
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    font-size: 1.6rem;
    line-height: 125%;
    padding: 1.4rem 0;
  }
`;

const Checkbox = styled.div`
  display: flex;
  margin: 1.6rem 0 3.2rem;
  user-select: none;
  width: 100%;

  &.no-margin {
    margin-top: -1.6rem;
  }

  &.invalid {
    & > * {
      color: ${config.palette.errorRed};
    }

    & > input[type='checkbox']:before {
      background: url('/assets/icons/checkbox/checkbox-error.svg') 0 0 no-repeat;
    }
  }

  & > * {
    cursor: pointer;
  }

  input[type='checkbox'] {
    border: none;
    appearance: none;
    margin-right: 2.4rem;
    outline: 0;

    &:before {
      background: url('/assets/icons/checkbox/checkbox-unchecked.svg') 0 0
        no-repeat;
      content: '';
      height: 2.4rem;
      display: block;
      transition: 0.3s ease-in-out background;
      width: 2.4rem;
    }

    &:checked {
      &:before {
        background-image: url('/assets/icons/checkbox/check-box-darkblue.svg');
      }
    }
  }

  a {
    color: ${config.palette.lightBlue};
    text-decoration: none;
    transition: 0.3s ease-in-out color;

    &:hover {
      color: ${config.palette.lightBlueHover};
    }
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    align-items: center;
  }
`;

export {
  Wrapper,
  Label,
  TextField,
  Dropdown,
  ButtonSelectorWrapper,
  ButtonSelector,
  Button,
  Checkbox,
  PhoneWrapper,
};
