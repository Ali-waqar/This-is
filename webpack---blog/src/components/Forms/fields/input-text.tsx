import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FieldValidations } from '../interfaces';
import { Wrapper, Label, TextField } from './styles';
import { isValidField } from './_helpers';

interface Props {
  disabled?: boolean;
  id: string;
  hide?: boolean;
  label: string;
  placeholder: string;
  value: string;
  setValue: (id: string, value: string) => void;
  shouldValidate: boolean;
  columns?: number;
  validations: FieldValidations;
  className?: string;
  errorMessage?: string;
}

function InputText(props: Props): JSX.Element {
  const {
    disabled,
    id,
    hide,
    label,
    placeholder,
    value,
    setValue,
    validations,
    shouldValidate,
    className = '',
    columns = 1,
    errorMessage
  } = props;
  const [isValid, setIsValid] = useState(true);
  const wrapperClass = classNames(className, {
    hide,
    'col-2': columns === 2,
    invalid: !isValid
  });

  useEffect(() => {
    if (shouldValidate) {
      setIsValid(isValidField(value, validations));
    }
  }, [shouldValidate]); // eslint-disable-line

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(id, e.target.value);
    setIsValid(isValidField(e.target.value, validations));
  }

  return (
    <Wrapper className={wrapperClass}>
      <Label htmlFor={id}>{label}</Label>
      <TextField
        disabled={disabled}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      {errorMessage && <small>{errorMessage}</small>}
    </Wrapper>
  );
}

export default InputText;
