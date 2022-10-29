import React, { useState, useContext } from 'react';
import { withTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import classNames from 'classnames';
import _ from 'lodash/fp';
import Bugsnag from '@bugsnag/js';
import { Link, Text } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

import CourseFormatContext from '../../context/CourseFormat';
import { getSyllabusRequestMutation } from '../../lib/graphql';
import { getApiCampusName } from '../../lib/campus';
import {
  FormLayout,
  Error,
  InputText,
  InputButton,
  InputDropdown,
  InputCheckbox,
  InputPhone,
  generateDefaultState,
  isFormValid,
  getDropdownValues,
} from '../Forms';
import { DropdownOptions } from '../Forms/interfaces';
import { getGaConnectorValues } from '../../lib/ga-connector';
import { UpdateBrowsingHistorySubmits } from '../../storage/provider';
import * as gaEvents from './ga_events';
import baseConfig from './config.json';
import { getClientId } from '../../lib/experiments';
import { getLinkByPageName } from '../../lib/links';
import { getSyllabusPardotParams } from '../../lib/salesforce-integration';
import { usePageContext } from '../../context/PageContext';
import useUserLocation from '../../hooks/useUserLocation';
import { isValidPhone } from '../Forms/fields/_helpers';

interface Props {
  t: TFunction;
  campusCode?: string;
  courseCode: string;
  isCoursePage?: boolean;
}

const FormDownloadSyllabus: React.SFC<any> = (props: Props) => {
  const { t, campusCode, courseCode, isCoursePage } = props;
  const config = isCoursePage ? baseConfig : _.omit('campus', baseConfig);
  const { userLocation } = useUserLocation();
  const campus =
    campusCode ||
    userLocation.campusVisited ||
    userLocation.defaultCampus ||
    'ams';
  const defaultState = {
    ...generateDefaultState(config),
    ...(isCoursePage ? { campus } : {}),
  };
  const [fieldValues, setFieldValues] = useState(defaultState);
  const [phoneCountry, setPhoneCountry] = useState<string>();
  const [shouldValidate, setShouldValidate] = useState(false);
  const [keepInTouchCheckbox, setKeepInTouchCheckbox] = useState(false);
  const [error, setError] = useState('');
  const [showOk, setShowOk] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { pageName } = usePageContext();
  const ctxFormat = useContext(CourseFormatContext);
  const formClass = classNames(
    'request-syllabus',
    { requestCorrect: showOk },
    { whiteSubmitButton: isCoursePage }
  );

  const i18n: {
    fields: Record<string, string>;
    placeholders: Record<string, string>;
  } = {
    fields: {
      name: t('request-syllabus:requestSyllabus.fields.name'),
      email: t('request-syllabus:requestSyllabus.fields.email'),
      button: t('request-syllabus:requestSyllabus.fields.button'),
      campus: t('request-syllabus:requestSyllabus.coursePage.fields.campus'),
      phoneNumber: t(
        'application-form:applicationForm:fields.phoneNumber' // TO BE FIXED: https://app.clickup.com/t/2461218/ENG-2395
      ),
    },
    placeholders: {
      name: t('request-syllabus:requestSyllabus.placeholders.name'),
      email: t('request-syllabus:requestSyllabus.placeholders.email'),
      campus: t('request-syllabus:requestSyllabus.placeholders.campus'),
    },
  };

  const campuses: DropdownOptions = {
    ams: t('breadcrumbs:breadcrumbs.campusAms'),
    bcn: t('breadcrumbs:breadcrumbs.campusBcn'),
    ber: t('breadcrumbs:breadcrumbs.campusBer'),
    bod: t('breadcrumbs:breadcrumbs.campusBod'),
    dus: t('breadcrumbs:breadcrumbs.campusDus'),
    lis: t('breadcrumbs:breadcrumbs.campusLis'),
    lon: t('breadcrumbs:breadcrumbs.campusLon'),
    mad: t('breadcrumbs:breadcrumbs.campusMad'),
    mex: t('breadcrumbs:breadcrumbs.campusMex'),
    mia: t('breadcrumbs:breadcrumbs.campusMia'),
    par: t('breadcrumbs:breadcrumbs.campusPar'),
    sao: t('breadcrumbs:breadcrumbs.campusSao'),
    tpa: t('breadcrumbs:breadcrumbs.campusTpa'),
    rmt: t('breadcrumbs:breadcrumbs.campusRmt'),
  };

  const dropdownValues: Record<string, DropdownOptions> = {
    campus: campuses,
  };

  function updateFieldValue(key: string, value: string): void {
    setFieldValues({ ...fieldValues, [key]: value });
  }

  const validationErrors = isFormValid(fieldValues, config);

  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> {
    e.preventDefault();
    setError('');
    setIsSending(true);
    gaEvents.emitClickEvent();

    const courseFormat = ctxFormat.format !== '' ? ctxFormat.format : 'ft';
    if (validationErrors.length === 0) {
      const gaConnector = getGaConnectorValues(document.cookie || '');

      const salesforceInfo = {
        campus: campusCode || fieldValues.campus,
        course: `${courseCode}${courseFormat}`,
        email: fieldValues.email,
        emailOptIn: keepInTouchCheckbox,
        gaConnector,
        ipCountry: userLocation.countryName,
        name: fieldValues.name,
        phoneNumber: fieldValues.phoneNumber,
        phoneCountry: phoneCountry?.toUpperCase(),
      };

      const pardotParams = getSyllabusPardotParams(salesforceInfo);
      const gaClientId = await getClientId(2000);

      const query = getSyllabusRequestMutation(
        fieldValues.name,
        fieldValues.email,
        getApiCampusName(campusCode || fieldValues.campus),
        courseCode,
        courseFormat,
        pageName,
        pardotParams,
        gaClientId
      );
      try {
        await fetch(process.env.IRONHACK_API, query).then((response) => {
          if (response.errors) throw response.errors;
          setShowOk(true);
          gaEvents.emitSubmitOkEvent(keepInTouchCheckbox);
          UpdateBrowsingHistorySubmits('syllabus');
        });
      } catch (apiError) {
        gaEvents.emitSubmitKoEvent();
        Bugsnag.notify(apiError, function (event) {
          event.addMetadata('Query', query);
        });
        setError(t('application-form:applicationForm.error'));
        setIsSending(false);
      }
    } else {
      gaEvents.emitSubmitKoEvent(validationErrors);
      setShouldValidate(true);
      setIsSending(false);
      setError(t('request-syllabus:requestSyllabus.requiredFields'));
    }
  }

  function generateField(id: string): JSX.Element {
    const fieldProps = {
      key: id,
      id,
      label: i18n.fields[id],
      setValue: updateFieldValue,
      value: fieldValues[id],
      shouldValidate,
      ...config[id],
    };

    const fields: Record<string, JSX.Element> = {
      select: (
        <InputDropdown
          options={getDropdownValues(dropdownValues[id], i18n.placeholders[id])}
          {...fieldProps}
        />
      ),
      phone: (
        <InputPhone
          id={id}
          isValid={isValidPhone(
            fieldValues[id],
            error && validationErrors.includes(id)
          )}
          key={id}
          label={i18n.fields[id]}
          noMarginBottom={false}
          onChange={(phone, country): void => {
            setPhoneCountry(country.name);
          }}
          setValue={updateFieldValue}
          shouldValidate
          value={fieldValues[id]}
          {...config[id]}
        />
      ),
    };

    return (
      fields[config[id].type] || (
        <InputText placeholder={i18n.placeholders[id]} {...fieldProps} />
      )
    );
  }

  return (
    <FormLayout className={formClass}>
      <>
        {_.pipe(_.keys, _.map(generateField))(config)}
        <InputCheckbox
          className="no-margin"
          handleOnChange={setKeepInTouchCheckbox}
          id="newsletter"
        >
          {t('request-syllabus:requestSyllabus.newsletter')}
        </InputCheckbox>
        <InputButton
          isSending={isSending}
          onClick={handleSubmit}
          text={i18n.fields.button}
        />
        <Text mt={2} textAlign="center" textStyle="body5" w="100%">
          {t(
            'application-form:applicationForm.footer.legalAdvice.byApplyingStart'
          )}{' '}
          <Link as={GatsbyLink} to={getLinkByPageName('privacyPolicy')}>
            {t(
              'application-form:applicationForm.footer.legalAdvice.privacyPolicyLinkText'
            )}
          </Link>{' '}
          {t(
            'application-form:applicationForm.footer.legalAdvice.byApplyingConjuntion'
          )}{' '}
          <Link as={GatsbyLink} to={getLinkByPageName('termsOfUse')}>
            {t(
              'application-form:applicationForm:footer.legalAdvice.termsOfUseLinkText'
            )}
          </Link>
        </Text>
        <Error showError={error.length > 0}>{error}</Error>
        <div className="okay-message">
          {t('request-syllabus:requestSyllabus:okayMessage')}
        </div>
      </>
    </FormLayout>
  );
};

export default withTranslation()(FormDownloadSyllabus);
