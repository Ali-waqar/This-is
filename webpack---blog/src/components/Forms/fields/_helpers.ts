import { isValidPhoneNumber } from 'libphonenumber-js';

import {
  FieldValidations,
  StateValue,
  FieldsConfiguration,
  DropdownOptions,
} from '../interfaces';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-var-requires
const validate = require('validate.js');

const isMandatory = (value: string): boolean =>
  validate({ input: value }, { input: { presence: { allowEmpty: false } } }) ===
  undefined;

const isEmail = (value: string): boolean =>
  validate({ input: value }, { input: { email: true } }) === undefined;

const isMinLength = (value: string, length: integer): boolean =>
  validate({ input: value }, { input: { length: { minimum: length } } }) ===
  undefined;

const isValidPhone = (
  value: string | undefined,
  error?: boolean
): boolean | undefined => {
  if (error) return !error;
  if (!value) return;

  return isValidPhoneNumber(value);
};

function isValidField(value: string, validations: FieldValidations): boolean {
  const checkValidations = (validation: string): boolean | void => {
    switch (validation) {
      case 'mandatory':
        return isMandatory(value);
      case 'email':
        return isEmail(value);
      case 'phone':
      case 'phoneNumber':
        return isValidPhoneNumber(value);
      case 'minLength':
        return isMinLength(value, validations.minLength);
    }
  };
  return Object.keys(validations).every(checkValidations);
}

function generateDefaultState(config: StateValue): StateValue {
  const defaultState: StateValue = Object.keys(config).reduce(
    (obj, key) => ({
      ...obj,
      [key]: config[key].default || '',
    }),
    {}
  );
  return defaultState;
}

function getDropdownValues(
  options: DropdownOptions,
  defaultValue: string
): DropdownOptions {
  options = options || {};
  if (defaultValue) {
    options = { '': defaultValue, ...options };
  }
  return options;
}

function isFormValid(
  fields: StateValue,
  fieldsConfig: FieldsConfiguration
): string[] {
  let isValid = true;
  const fieldIds = Object.keys(fields).filter(
    (fieldId) => fieldId !== 'noCohorts'
  );
  const errorFields = fieldIds
    .map((fieldId) => {
      let needsValidation = true;
      const conditionalField = fieldsConfig[fieldId].conditionalField || '';
      if (conditionalField.length > 0) {
        const conditionalValue = fieldsConfig[fieldId].conditionalValue || '';
        needsValidation = fields[conditionalField] === conditionalValue;
      }

      if (needsValidation) {
        isValid = isValidField(
          fields[fieldId],
          fieldsConfig[fieldId].validations
        );
        if (!isValid) {
          return fieldId;
        }
      }
    })
    .filter((fieldId) => fieldId);
  return errorFields;
}

export {
  isValidField,
  isValidPhone,
  isFormValid,
  generateDefaultState,
  getDropdownValues,
};
