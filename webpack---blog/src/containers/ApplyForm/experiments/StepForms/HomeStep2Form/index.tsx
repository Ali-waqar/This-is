import React, { useEffect, useState } from 'react';
import { Box, Button, Select, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';

import SubmitButton from '../SubmitButton';
import ErrorCard from '../ErrorCard';
import StepFormProps from '../StepFormProps';
import FormField from '../FormField';
import campuses from '../../../../../campus.json';
import { useFilteredCohorts } from '../Step2Form/models';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

const GOOGLE_CLIENT_ID =
  '676500801588-v1fpojke5mvknngkf33c3ajcafle6kdq.apps.googleusercontent.com';

const HomeStep2Form = ({
  onSubmitHandler,
  isSubmitting,
  submitError,
  ...props
}: StepFormProps): React.ReactElement => {
  const { datoCmsHomeHeaderApply, datoCmsApplyForm } = props.data;
  const { t } = useTranslation();
  const { register, watch, setValue, setError, clearErrors } = useFormContext();

  const [selectedCampus, selectedCohort, selectedFormat, selectedCourse] =
    watch(['campus', 'cohort', 'format', 'course']);
  const [cohorts, noCohortsAvailable] = useFilteredCohorts(props.cohorts);

  useEffect(() => {
    setValue('type', selectedCampus === 'rmt' ? 'remote' : 'inCampus');
  }, [selectedCampus, setValue]);

  useEffect(() => {
    if (selectedCampus && noCohortsAvailable) {
      setError('cohort', {
        message: t('application-form:applicationForm.noCohorts', {
          course: selectedCourse,
          campus: selectedCampus,
        }),
      });
    }

    if (!noCohortsAvailable) clearErrors('cohort');
  }, [
    clearErrors,
    selectedCampus,
    selectedCourse,
    noCohortsAvailable,
    setError,
    t,
  ]);

  const [disableGoogleLogin, setDisableGoogleLogin] = useState(false);
  const [googleError, setGoogleError] = useState(false);

  const handleLoginSuccess = (response: GoogleLoginResponse): void => {
    setValue('email', response.profileObj.email);
    setValue('isGoogle', true);

    if (response.profileObj.givenName && response.profileObj.givenName !== '') {
      setValue('firstName', response.profileObj.givenName);
      setValue('lastName', response.profileObj.familyName);
    }

    onSubmitHandler(3);
  };

  const handleLoginError = (response: GoogleLoginResponse): void => {
    if (response.error === 'idpiframe_initialization_failed') {
      setDisableGoogleLogin(true);
    } else {
      setGoogleError(true);
    }
  };

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
        {t('application-form:applicationForm.home.step', { step: 2 })}
      </Text>
      <FormField
        name="campus"
        title={t('application-form:applicationForm.placeholders.campus')}
      >
        <Select
          color="electricBlue.100"
          iconColor="darkBlue.100"
          iconSize="x-large"
          placeholder={t(
            'application-form:applicationForm.placeholders.campus'
          )}
          value={selectedCampus}
          {...register('campus', {
            required: t('application-form:applicationForm.fieldsErrors.campus'),
          })}
        >
          {campuses.flatMap(({ code, name }) =>
            ['rmt', 'mia'].includes(code)
              ? [
                  <option key={code} value={code}>
                    {name}
                  </option>,
                ]
              : []
          )}
        </Select>
      </FormField>
      <FormField
        name="cohort"
        title={t('application-form:applicationForm.placeholders.edition')}
      >
        <Select
          color="electricBlue.100"
          iconColor="darkBlue.100"
          iconSize="x-large"
          placeholder={t(
            'application-form:applicationForm.placeholders.edition'
          )}
          value={selectedCohort}
          {...register('cohort', {
            required: t('application-form:applicationForm.fieldsErrors.cohort'),
          })}
        >
          {cohorts?.[selectedFormat]?.map(([code, { title }]) => (
            <option key={code} value={code}>
              {title}
            </option>
          ))}
        </Select>
      </FormField>
      {submitError && (
        <ErrorCard
          message={t('application-form:applicationForm.error')}
          mt={4}
        />
      )}
      <SubmitButton
        isDisabled={noCohortsAvailable}
        isSubmitting={isSubmitting}
        onSubmit={onSubmitHandler}
        text={datoCmsApplyForm.normalFlowContinueCta}
      />
      <Text fontWeight="bold" mt={1} textAlign="center" textStyle="body5">
        {datoCmsApplyForm.continueButtonsSeparator}
      </Text>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        cookiePolicy={'single_host_origin'}
        onFailure={handleLoginError}
        onSuccess={handleLoginSuccess}
        render={(renderProps): React.ReactElement => (
          <Button
            _disabled={{
              bg: '#E06C6333',
              _hover: { bg: '#E06C6333' },
              cursor: 'not-allowed',
            }}
            _hover={{ bg: '#E06C63' }}
            bg="#E06C63"
            disabled={
              renderProps.disabled || isSubmitting || disableGoogleLogin
            }
            iconSpacing={1.5}
            leftIcon={<FaGoogle size={24} />}
            mt={1}
            onClick={renderProps.onClick}
            w="full"
          >
            {datoCmsApplyForm.googleFlowContinueCta}
          </Button>
        )}
      />
      {googleError && (
        <Text color="red" textAlign="center" textShadow="body6">
          {datoCmsApplyForm.googleLoginErrorMessage}
        </Text>
      )}
    </Box>
  );
};

export default HomeStep2Form;
