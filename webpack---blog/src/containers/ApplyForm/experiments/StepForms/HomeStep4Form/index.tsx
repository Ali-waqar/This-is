import React, { useEffect, useState } from 'react';
import { Box, Circle, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { IoIosPaperPlane } from 'react-icons/io';
import Confetti from 'react-dom-confetti';

import SubmitButton from '../SubmitButton';
import StepFormProps from '../StepFormProps';

const CONFETTI_CONFIG = {
  angle: 90,
  dragFriction: 0.12,
  duration: 150000,
  elementCount: 250,
  height: '16px',
  perspective: '1000px',
  spread: 360,
  stagger: 25,
  startVelocity: 75,
  width: '4px',
};

const HomeStep4Form = ({
  onSubmitHandler,
  isSubmitting,
  submitError,
  ...props
}: StepFormProps): React.ReactElement => {
  const { datoCmsHomeHeaderApply } = props.data;
  const { t } = useTranslation();
  const { getValues } = useFormContext();
  const [firstName] = getValues(['firstName']);
  const [confettiTime, setConfettiTime] = useState(false);

  useEffect(() => {
    setConfettiTime(true);
  }, [setConfettiTime]);

  return (
    <Box bg="white" borderRadius="card" p={5}>
      <Box
        active={confettiTime}
        as={Confetti}
        config={CONFETTI_CONFIG}
        left="25%"
        pos="absolute"
      />
      <Text align="center" textStyle="title2">
        {t('application-form:applicationForm.home.thanksTitle', {
          name: firstName,
        })}
      </Text>
      <Circle bgColor="electricBlue.100" h={32} mx="auto" w={32} mt={4}>
        <IoIosPaperPlane color="white" size={48} />
      </Circle>
      <Text
        align="center"
        color="darkBlue.64"
        fontWeight={400}
        mt={2}
        textStyle="body5"
      >
        {datoCmsHomeHeaderApply.textAfterApply}
      </Text>
      <SubmitButton
        isSubmitting={isSubmitting}
        onSubmit={onSubmitHandler}
        text={t('application-form:applicationForm.home.cta.done')}
      />
    </Box>
  );
};

export default HomeStep4Form;
