import React, { useEffect, useRef } from 'react';
import { Box, Select, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';
import { isEmpty } from 'lodash';

import SubmitButton from '../SubmitButton';
import ErrorCard from '../ErrorCard';
import StepFormProps from '../StepFormProps';
import FormField from '../FormField';
import * as gaEvents from '../../../../../template/Application/ga_events';

const HomeStep1Form = ({
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
    formState: { touchedFields },
  } = useFormContext();
  const [selectedCourse, selectedFormat] = watch(['course', 'format']);
  const hasInterest = useRef(null);

  useEffect(() => {
    if (!hasInterest.current && !isEmpty(touchedFields)) {
      gaEvents.emitApplyHomeInterestEvent();
      hasInterest.current = true;
    }
  }, [touchedFields.format, touchedFields.course, hasInterest]);

  const courseCampusKey =
    selectedCourse === 'cysec'
      ? 'course-cybersecurity-campus:cysec'
      : 'course-campus:courseCampus';

  const courses = Object.entries(
    t('application-form:applicationForm.courseSelection.courses', {
      returnObjects: true,
    })
  ).filter(([code]) => code !== 'cysec'); // This is US-specific. Remove/adapt when the A/B test is over.
  const formats = Object.entries(
    t('application-form:applicationForm.formatSelection.formats', {
      returnObjects: true,
      ftDuration: t(`${courseCampusKey}.formats.fullTime.weeks`),
      ptDuration: t(`${courseCampusKey}.formats.partTime.weeks`),
    })
  );

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
        {t('application-form:applicationForm.home.step', { step: 1 })}
      </Text>
      <FormField
        name="course"
        title={t('application-form:applicationForm.placeholders.bootcamp')}
      >
        <Select
          color="electricBlue.100"
          iconColor="darkBlue.100"
          iconSize="x-large"
          placeholder={t(
            'application-form:applicationForm.placeholders.course'
          )}
          value={selectedCourse}
          {...register('course', {
            required: t('application-form:applicationForm.fieldsErrors.course'),
          })}
        >
          {courses.map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </Select>
      </FormField>
      <FormField
        name="format"
        title={t('application-form:applicationForm.placeholders.schedule')}
      >
        <Select
          color="electricBlue.100"
          iconColor="darkBlue.100"
          iconSize="x-large"
          placeholder={t(
            'application-form:applicationForm.placeholders.schedule'
          )}
          value={selectedFormat}
          {...register('format', {
            required: t('application-form:applicationForm.fieldsErrors.format'),
          })}
        >
          {formats.map(([code, { title }]) => (
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
        isSubmitting={isSubmitting}
        onSubmit={onSubmitHandler}
        text={t('application-form:applicationForm.home.cta.next')}
      />
    </Box>
  );
};

export default HomeStep1Form;
