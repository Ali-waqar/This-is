import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  BoxProps,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

type FormFieldProps = BoxProps & {
  children: React.ReactNode;
  name: string;
  isRequired?: boolean;
  title: string;
};

const FormField = ({
  children,
  name,
  isRequired = true,
  title,
  ...boxProps
}: FormFieldProps): React.ReactElement => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl
      isInvalid={errors[name]}
      isRequired={isRequired}
      mt={4}
      {...boxProps}
    >
      <FormLabel htmlFor={name} mb={[1.5, null, null, 2]}>
        {title}
      </FormLabel>
      {children}
      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormField;
