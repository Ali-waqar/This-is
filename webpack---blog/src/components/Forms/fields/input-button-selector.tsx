import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { ButtonSelectorWrapper, Label, ButtonSelector } from './styles';
import { FieldValidations } from '../interfaces';
import { isValidField } from './_helpers';

interface ListItem {
  covidFormat?: 'online' | 'hybrid' | 'in_person';
  description: string;
  language: 'br' | 'de' | 'en' | 'es' | 'fr' | 'nl' | 'pt';
  timezone?: string;
  value: string;
}

interface Props {
  id: string;
  label: string;
  items: ListItem[];
  value: string;
  setValue: (id: string, value: string) => void;
  shouldValidate: boolean;
  validations: FieldValidations;
}

function InputButtonSelector(props: Props): JSX.Element {
  const {
    id,
    label,
    items,
    value,
    setValue,
    validations,
    shouldValidate
  } = props;
  const [isValid, setIsValid] = useState(true);
  const { t } = useTranslation();
  const wrapperClass = classNames({ invalid: !isValid });

  useEffect(() => {
    if (shouldValidate) {
      setIsValid(isValidField(value, validations));
    }
  }, [shouldValidate]);

  function handleButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    setValue(id, e.currentTarget.value);
    setIsValid(isValidField(e.currentTarget.value, validations));
  }

  return (
    <ButtonSelectorWrapper className={wrapperClass}>
      <Label htmlFor={id}>{label}</Label>
      {items.map((item: ListItem) => {
        const btnClass = classNames({ active: item.value === value });
        return (
          <ButtonSelector
            key={`${id}-${item.value}`}
            onClick={handleButtonClick}
            value={item.value}
            className={btnClass}
          >
            {item.description}
            {item.timezone && <div>{item.timezone}</div>}
            <div>
              {t(`languages:languages.${item.language}`)}
              {item.covidFormat
                ? ` | ${t(`covid:covid.cohortFormat.${item.covidFormat}.name`)}`
                : null}
            </div>
          </ButtonSelector>
        );
      })}
    </ButtonSelectorWrapper>
  );
}

export default InputButtonSelector;
