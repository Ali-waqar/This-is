import React from 'react';
import { Box, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';

import SubmitButton from '../SubmitButton';
import ErrorCard from '../ErrorCard';
import StepFormProps from '../StepFormProps';
import FormField from '../FormField';
import Terms from '../Terms';
import { InputPhone } from '../../../../../components/Forms';
import { isValidPhone } from '../../../../../components/Forms/fields/_helpers';

const HomeStep3Form = ({
  onSubmitHandler,
  isSubmitting,
  submitError,
  ...props
}: StepFormProps): React.ReactElement => {
  const { datoCmsHomeHeaderApply } = props.data;
  const { t } = useTranslation();
  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();

  const [selectedPhoneNumber] = watch(['phoneNumber']);

  return (
    <Box bg="white" borderRadius="card" p={5}>
      <Text align="center" textStyle="title2">
        {datoCmsHomeHeaderApply.title}
      </Text>
      <Text
        align="center"
        color="electricBlue.100"
        fontWeight={600}
        mt={1}
        textStyle="body5"
        textTransform="uppercase"
      >
        {t('application-form:applicationForm.home.step', { step: 3 })}
      </Text>
      <Grid gap={4} mt={4} templateColumns="repeat(2, 1fr)">
        <GridItem colSpan={[2, null, 1]}>
          <FormField
            mt={0}
            name="firstName"
            title={t('application-form:applicationForm.fields.firstName')}
          >
            <Input
              placeholder={t(
                'application-form:applicationForm.placeholders.firstName'
              )}
              type="text"
              {...register('firstName', {
                required: t(
                  'application-form:applicationForm.fieldsErrors.firstName'
                ),
              })}
            />
          </FormField>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <FormField
            mt={0}
            name="lastName"
            title={t('application-form:applicationForm.fields.lastName')}
          >
            <Input
              placeholder={t(
                'application-form:applicationForm.placeholders.lastName'
              )}
              type="text"
              {...register('lastName', {
                required: t(
                  'application-form:applicationForm.fieldsErrors.lastName'
                ),
              })}
            />
          </FormField>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <FormField
            mt={0}
            name="email"
            title={t('application-form:applicationForm.fields.email')}
          >
            <Input
              placeholder={t(
                'application-form:applicationForm.placeholders.email'
              )}
              type="email"
              {...register('email', {
                required: t(
                  'application-form:applicationForm.fieldsErrors.email'
                ),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t(
                    'application-form:applicationForm.fieldsErrors.email'
                  ),
                },
              })}
            />
          </FormField>
        </GridItem>
        <GridItem colSpan={[2, null, 1]}>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, value } }): React.ReactElement => (
              <FormField
                mt={0}
                name="phoneNumber"
                title={t('application-form:applicationForm.fields.phoneNumber')}
              >
                <InputPhone
                  id="phoneNumber"
                  isValid={isValidPhone(value, errors.phoneNumber)}
                  onChange={(phone, country): void => {
                    setValue('phoneCountry', country.name);
                    onChange(phone);
                  }}
                  placeholder={t(
                    'application-form:applicationForm.placeholders.phoneNumber'
                  )}
                  value={value}
                />
              </FormField>
            )}
            rules={{
              required: t(
                'application-form:applicationForm.fieldsErrors.phoneNumber'
              ),
              validate: () =>
                isValidPhone(selectedPhoneNumber) ||
                t('application-form:applicationForm.fieldsErrors.phoneNumber'),
            }}
          />
        </GridItem>
      </Grid>
      {submitError && (
        <ErrorCard
          message={t('application-form:applicationForm.error')}
          mt={4}
        />
      )}
      <SubmitButton
        isSubmitting={isSubmitting}
        onSubmit={onSubmitHandler}
        text={t('application-form:applicationForm.cta.submit')}
      />
      <Terms />
    </Box>
  );
};

export default HomeStep3Form;
