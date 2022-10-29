import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FieldValidations } from '../interfaces';
import { Wrapper, Label, Dropdown } from './styles';
import { isValidField } from './_helpers';

interface Props {
  id: string;
  hide?: boolean;
  label: string;
  value: string;
  setValue: (id: string, value: string) => void;
  shouldValidate: boolean;
  options: {
    [key: string]: string;
  };
  validations: FieldValidations;
  referrsValue?: string;
}

function InputDropdown(props: Props): JSX.Element {
  const {
    id,
    hide,
    label,
    options,
    value,
    shouldValidate,
    setValue,
    validations,
    referrsValue = ''
  } = props;
  const [isValid, setIsValid] = useState(true);
  const wrapperClass = classNames({
    hide,
    invalid: !isValid,
    'col-2': referrsValue !== '' && value === referrsValue
  });
  const dropdownClass = classNames({ selected: value !== '' });
  useEffect(() => {
    if (shouldValidate) {
      setIsValid(isValidField(value, validations));
    }
  }, [shouldValidate]); // eslint-disable-line

  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(id, e.target.value);
    setIsValid(isValidField(e.target.value, validations));
  }

  return (
    <Wrapper className={wrapperClass}>
      <Label htmlFor={id}>{label}</Label>
      <Dropdown
        id={id}
        onChange={handleOnChange}
        value={value}
        className={dropdownClass}
      >
        {Object.keys(options).map(optionId => (
          <option key={optionId} value={optionId}>
            {options[optionId]}
          </option>
        ))}
      </Dropdown>
    </Wrapper>
  );
}

export default InputDropdown;
