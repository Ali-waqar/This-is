import React from 'react';
import { Button } from '@chakra-ui/react';

type SubmitButtonProps = {
  isDisabled?: boolean;
  isSubmitting: boolean;
  onSubmit?: () => void;
  text: string;
};

const SubmitButton = ({
  isDisabled,
  isSubmitting,
  onSubmit,
  text,
}: SubmitButtonProps): React.ReactElement => (
  <Button
    isDisabled={isDisabled}
    isLoading={isSubmitting}
    mt={4}
    onClick={onSubmit}
    w="100%"
  >
    {text}
  </Button>
);

export default SubmitButton;
