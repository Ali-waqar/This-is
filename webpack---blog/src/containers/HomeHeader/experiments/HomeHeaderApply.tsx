import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';

import CourseReport from '../../../../static/assets/footer/course-report.svg';
import SwitchUp from '../../../../static/assets/footer/switchup.svg';
import Navbar from '../../../components/NavBar';
import HomeStep1Form from '../../ApplyForm/experiments/StepForms/HomeStep1Form';
import HomeStep2Form from '../../ApplyForm/experiments/StepForms/HomeStep2Form';
import HomeStep3Form from '../../ApplyForm/experiments/StepForms/HomeStep3Form';
import HomeStep4Form from '../../ApplyForm/experiments/StepForms/HomeStep4Form';
import { FormProvider, useForm } from 'react-hook-form';
import { Cohort } from '../../../components/RetinaSyllabusForm/interfaces';
import { replaceValues } from '../../../lib/utils';
import { useLocation } from '@reach/router';
import * as qs from 'query-string';
import useUserLocation from '../../../hooks/useUserLocation';
import { SaveApplicationData } from '../../../storage/provider';
import {
  getStepApplicationPardotParams,
  SalesforceStepApplicationInterface,
} from '../../../lib/salesforce-integration';
import { getGaConnectorValues } from '../../../lib/ga-connector';
import { getClientId } from '../../../lib/experiments';
import { getHomeStepApplicationMutation } from '../../../lib/graphql';
import * as gaEvents from '../../../template/Application/ga_events';
import { getLinkByPageName } from '../../../lib/links';
import Bugsnag from '@bugsnag/js';

type Props = {
  cohorts: Cohort[];
  data: {
    datoCmsHomeHeaderApply: {
      textAfterApply: string;
      title: string;
    };
    allDatoCmsApplyForm: {
      nodes: Array<{
        googleFlowContinueCta: string;
        googleLoginErrorMessage: string;
        continueButtonsSeparator: string;
        normalFlowContinueCta: string;
      }>;
    };
  };
  pageName: string;
};

const FORM_EMPTY_VALUES = {
  campus: null,
  cohort: null,
  course: null,
  email: null,
  firstName: null,
  format: null,
  interest: null,
  lastName: null,
  newsletter: true,
  phoneCountry: null,
  phoneNumber: null,
  referral: null,
  referralOther: null,
  termsOfUse: true,
  type: null,
  whyAreYouInterested: null,
};

const DEFAULT_COURSE = 'web';

function HomeHeaderApply(props: Props): JSX.Element {
  const { pageName } = props;
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const methods = useForm({ mode: 'onBlur' });
  const { reset } = methods;
  const location = useLocation();
  const search = qs.parse(location.search);
  const { userLocation } = useUserLocation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    const campusVisited =
      userLocation.campusVisited || userLocation.defaultCampus;
    const courseVisited =
      localStorage?.getItem('courseVisited')?.slice(0, -2) || DEFAULT_COURSE;
    const typeVisited = userLocation.campusVisited ? 'inCampus' : 'remote';

    reset(
      replaceValues(FORM_EMPTY_VALUES, {
        campus: campusVisited,
        course: courseVisited,
        type: typeVisited,
        financingOption: search.fo || null,
        referral: search.code ? 'other' : null,
        referralOther: search.code,
      })
    );
  }, [reset, search.code, search.fo, userLocation]);

  const fieldsToValidate = (stepToValidate: number): string[] => {
    const firstStepFields = ['course', 'format'];
    const secondStepFields = ['type', 'campus', 'cohort'];
    const thirdStepFields = [
      'firstName',
      'lastName',
      'phoneNumber',
      'phoneCountry',
    ];

    const stepFields: Record<number, string[]> = {
      1: firstStepFields,
      2: [...firstStepFields, ...secondStepFields],
      3: [...firstStepFields, ...secondStepFields, ...thirdStepFields],
    };

    return stepFields[stepToValidate];
  };

  const submitStepForm = async (): Promise<void> => {
    const values = methods.getValues();

    const fields = fieldsToValidate(step);

    const isValid = await methods.trigger(fields, {
      shouldFocus: true,
    });

    if (!isValid) return;

    SaveApplicationData(values);

    const { campus, course } = values;

    const selectedCohort = props.cohorts.find(
      (cohort) => cohort.id === values.cohort
    );

    const salesforceParameters: Partial<SalesforceStepApplicationInterface> = {
      campus,
      cohort: values.cohort,
      course,
      date: selectedCohort?.start_at,
      email: values.email,
      emailOptIn: values.newsletter,
      financingOption: values.financingOption,
      firstName: values.firstName,
      format: values.format,
      gaConnector: getGaConnectorValues(document.cookie || ''),
      ipCountry: userLocation.countryName,
      lastName: values.lastName,
      phoneCountry: values.phoneCountry,
      phoneNumber: values.phoneNumber,
      referral: values.referral,
      referralOther: values.referralOther,
      remote: values.type === 'rmt' && values.type,
      salesforceId: selectedCohort?.salesforce_id,
      whyAreYouInterested: values.interest,
    };
    const pardotParams = getStepApplicationPardotParams(
      salesforceParameters,
      language,
      step,
      selectedCohort?.timezone
    );
    const clientId = await getClientId(2000);
    const query = getHomeStepApplicationMutation(step, pardotParams, clientId);
    gaEvents.emitApplyHomeStepOKEvent(step);

    try {
      if (step === 3) {
        const response = await fetch(process.env.IRONHACK_API, query);
        if (response.errors) throw response.errors;
        if (!response.ok) throw new Error(response.statusText);
        setSubmitError(false);
      }

      setStep((currentStep) => currentStep + 1);
    } catch (error) {
      Bugsnag.notify(error, function (event) {
        event.addMetadata('Query', query);
      });
      gaEvents.emitApplyKoEvent(campus, course);
    }
  };

  const onSubmitHandler = async (nextStep: number): Promise<void> => {
    setIsSubmitting(true);
    if (submitError) setSubmitError(false);

    try {
      await submitStepForm();
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(true);
    }
  };

  return (
    <>
      <Box
        backgroundSize="cover"
        bgImage={[
          '/assets/headers/home-header-apply-mobile.jpg',
          null,
          '/assets/headers/home-header-apply-desktop.jpg',
        ]}
        mb={[0, null, 3]}
      >
        <Navbar isDarkBackground pageName={pageName} />
        <Flex
          direction={['column', null, null, 'row']}
          maxW={[null, null, null, '1296px']}
          mx={[3, null, 4, 'auto']}
          pb={[0, null, null, 15]}
          pt={[3, null, null, 10]}
        >
          <Flex direction="column" maxWidth={[null, null, null, '56rem']}>
            <Text
              align={['center', null, 'left']}
              as="h1"
              color="white"
              dangerouslySetInnerHTML={{
                __html: t('home:home.newMainHeadline.title'),
              }}
              fontSize={['3.8rem', null, null, '5.6rem']}
              sx={{ '&>span': { color: 'electricBlue.100' } }}
              textStyle="jumbo"
            />
            <Text
              align={['center', null, 'left']}
              color="white"
              maxWidth={[null, null, null, '60rem']}
              mb={[3, null, null, 4]}
              mt={2}
              textStyle="body3"
            >
              {t('home:home.newMainHeadline.subtitle')}
            </Text>
            <Flex my={[8, null, 0]} spacing={2}>
              <SwitchUp height={43} width={70} />
              <CourseReport height={43} width={100} />
              <Flex
                direction="column"
                maxWidth={['15.5rem', null, null, '17.8rem']}
              >
                <Text color="white" textStyle="body1">
                  {t('home:home.stats.reviews.score')}
                </Text>
                <Text color="white" mt={0.5} textStyle="body6">
                  {t('home:home.stats.reviews.description')}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box
            borderRadius="card"
            d={['none', null, 'block']}
            height="100%"
            ml={[0, null, 12]}
            mt={[3, null, null, 0]}
            overflow="hidden"
            width={['100%', null, null, '48rem']}
          >
            <FormProvider {...methods}>
              <form>
                {step === 1 && (
                  <HomeStep1Form
                    isSubmitting={isSubmitting}
                    onSubmitHandler={onSubmitHandler}
                    submitError={submitError}
                    {...props}
                  />
                )}
                {step === 2 && (
                  <HomeStep2Form
                    isSubmitting={isSubmitting}
                    onSubmitHandler={onSubmitHandler}
                    submitError={submitError}
                    {...props}
                  />
                )}
                {step === 3 && (
                  <HomeStep3Form
                    isSubmitting={isSubmitting}
                    onSubmitHandler={onSubmitHandler}
                    submitError={submitError}
                    {...props}
                  />
                )}
                {step === 4 && (
                  <HomeStep4Form
                    isSubmitting={isSubmitting}
                    onSubmitHandler={onSubmitHandler}
                    submitError={submitError}
                    {...props}
                  />
                )}
              </form>
            </FormProvider>
          </Box>
        </Flex>
      </Box>
      <Box d={['block', null, 'none']} mb={3} p={2}>
        <Button
          as={Link}
          state={{ form: { applySource: pageName } }}
          to={getLinkByPageName('allCourses/application')}
          onClick={gaEvents.emitApplyHomeInterestEvent}
        >
          {props.data?.datoCmsHomeHeaderApply?.title}
        </Button>
      </Box>
    </>
  );
}

export default HomeHeaderApply;
