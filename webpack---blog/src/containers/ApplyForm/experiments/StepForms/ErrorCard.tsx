import React from 'react';
import { Alert, AlertDescription, BoxProps } from '@chakra-ui/react';

type ErrorCardProps = BoxProps & {
  message: string;
};

const ErrorCard = ({
  message,
  ...boxProps
}: ErrorCardProps): React.ReactElement => (
  <Alert
    borderColor="critical.100"
    borderWidth="1px"
    status="error"
    {...boxProps}
  >
    <AlertDescription textAlign="center" textStyle="body5">
      {message}
    </AlertDescription>
  </Alert>
);

export default ErrorCard;
