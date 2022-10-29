import React from 'react';
import { chakra } from '@chakra-ui/react';
import ReactPhoneInput from 'react-phone-input-2';
import { useTranslation } from 'react-i18next';
import 'react-phone-input-2/lib/high-res.css';

import { Label, PhoneWrapper } from './styles';
import useUserLocation from '../../../hooks/useUserLocation';
import countries from '../../../countries.json';

type CountryData = {
  name: string;
  dialCode: string;
  countryCode: string;
  format: string;
};

type Props = {
  id: string;
  label?: string;
  isValid: boolean | undefined;
  onChange: (phoneNumber: string, country: CountryData) => void;
  placeholder?: string;
  required?: boolean;
  setValue?: (id: string, value: string) => void;
  value: string;
  noMarginBottom?: boolean;
};

const RequiredIndicator = chakra('span', {
  baseStyle: { ml: 1, color: 'red.500' },
});

const InputPhone = (props: Props): React.ReactElement => {
  const {
    id,
    label,
    noMarginBottom = true,
    onChange,
    placeholder,
    value,
    setValue,
    required = true,
    isValid,
  } = props;
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { userLocation } = useUserLocation();

  const handleOnChange = (
    phoneNumber,
    country,
    event,
    formattedPhoneNumber
  ): void => {
    if (onChange) onChange(formattedPhoneNumber, country);
    if (setValue) setValue(id, formattedPhoneNumber);
  };

  const style = noMarginBottom ? { marginBottom: 0 } : {};

  return (
    <PhoneWrapper style={style}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <RequiredIndicator>{'*'}</RequiredIndicator>}
        </Label>
      )}
      <ReactPhoneInput
        country={
          userLocation?.country?.toLocaleLowerCase() ||
          countries.find((country) => country.language === language).code ||
          'us'
        }
        countryCodeEditable={false}
        enableLongNumbers
        inputProps={{
          'aria-required': true,
          name: id,
          required,
        }}
        inputStyle={{ height: '2.5rem', paddingBottom: 0 }}
        isValid={isValid}
        onChange={handleOnChange}
        placeholder={placeholder || t('forms:forms.fields.phone.placeholder')}
        preferredCountries={countries.map(({ code }) => code)}
        value={value}
      />
    </PhoneWrapper>
  );
};

export default InputPhone;
