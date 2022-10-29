import fetch from 'node-fetch';
import _ from 'lodash';

import { GAConnectorFields, browserToInterface } from './ga-connector';

interface SalesforceApplicationInterface {
  salesforceId: string;
  campus: string;
  course: string;
  cohort: string;
  date: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  referral: string;
  referralOther: string;
  whyAreYouInterested: string;
  gaConnector: GAConnectorFields;
  emailOptIn: boolean;
  ipCountry: string;
}
interface SalesforceStepApplicationInterface {
  salesforceId: string;
  campus: string;
  course: string;
  cohort: string;
  date: string;
  email: string;
  firstName: string;
  lastName: string;
  nurturingActions?: string;
  phoneNumber: string;
  referral: string;
  referralOther: string;
  referrerCode: string;
  whyAreYouInterested: string;
  gaConnector: GAConnectorFields;
  emailOptIn: boolean;
}

interface SalesforceRetinaApplicationInterface {
  salesforceId: string;
  campus: string;
  course: string;
  cohort: string;
  date: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gaConnector: GAConnectorFields;
  emailOptIn: boolean;
}

interface SalesforceBusinessInterestInterface {
  interest: 'brochure' | 'syllabus' | 'testimonials' | 'getInTouch';
  name: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  termsOfUse: boolean;
  stayInTouch: boolean;
}

interface SalesforceSyllabusRequestInterface {
  campus: string;
  course: string;
  name: string;
  email: string;
  ipCountry: string;
  phoneNumber: string;
  phoneCountry: string;
  emailOptIn: boolean;
  gaConnector: GAConnectorFields;
}

interface SalesforceShortCourseInterface {
  emailOptIn: boolean;
  gaConnector: GAConnectorFields;
  campus: string;
  type: string;
  email: string;
  language: string;
  timezone?: string;
}

interface SalesforceContactInterface {
  campus: string;
  email: string;
  firstName: string;
  ipCountry: string;
  lastName: string;
  phone: string;
  phoneCountry: string;
  message: string;
  emailOptIn: boolean;
}

interface SalesforceGetUpdatesRequestInterface {
  name: string;
  email: string;
  last: string;
  emailOptIn: boolean;
  ipCountry: string;
}

interface SalesforceGetFinancialInfoInterface {
  name: string;
  email: string;
  phoneCountry: string;
  phoneNumber: string;
  emailOptIn: boolean;
  ipCountry: string;
}

const pardotEndpoints = (formHandler: string): string => {
  const endpoints = {
    ApplyForm: '2019-02-18/7kbr',
    EnterpriseForm: '2021-05-12/2d2tzj',
    retinaApplyForm: '2021-01-19/2614gy',
    zomatoApplyForm: '2021-04-14/2bbpl8',
    contactForm: '2019-12-20/9w216',
    getSyllabus: '2019-02-19/7l15',
    getSyllabusBlog: '2021-07-21/2hkrvc',
    getSyllabusCoursePage: '2021-03-22/28wxr1',
    getSyllabusRetina: '2021-01-19/2613np',
    getUpdatesBlogPage: '2020-05-29/pyl5m',
    getUpdatesApply: '2021-03-22/28wxny',
    getFinancialInfo: '2020-07-16/ssln9',
    enterpriseContact: '2021-05-12/2d2tzj',
    shortCourseForm: '2022-01-25/2xlgd9',
  };
  return `https://www2.ironhack.com/l/688303/${endpoints[formHandler]}`;
};

const courseToSalesforce = (course: string): string => {
  switch (course) {
    case 'webft':
      return 'WDFT';
    case 'webpt':
      return 'WDPT';
    case 'web':
      return 'WDFT';
    case 'uxuift':
      return 'UXFT';
    case 'uxuipt':
      return 'UXPT';
    case 'uxui':
      return 'UXFT';
    case 'dataft':
      return 'DAFT';
    case 'datapt':
      return 'DAPT';
    case 'data':
      return 'DAFT';
    case 'cysecft':
      return 'CYFT';
    case 'cysecpt':
      return 'CYPT';
    case 'cysec':
      return 'CYFT';
    case 'js':
      return 'JS';
    default:
      return '';
  }
};

const languageToSalesforce = (language: string): string => {
  switch (language) {
    case 'es':
      return 'Spanish';
    case 'fr':
      return 'French';
    case 'de':
      return 'German';
    case 'nl':
      return 'Dutch';
    case 'pt':
      return 'Portuguese';
    case 'br':
      return 'Brazilian';
    default:
      return 'English';
  }
};

const genderToSalesforce = (gender: string): string => {
  const mappedFields: Record<string, string> = {
    nonBinary: 'Non-binary',
    notDisclose: 'Prefer not to disclose',
  };
  return mappedFields[gender] || gender;
};

const toTitleCase = _.flow([
  _.toLower,
  _.partial(_.replace, _, /(^|[\s-])\S/g, _.toUpper),
]);

const getB2bContactPardotParams = (
  fields: SalesforceBusinessInterestInterface
): string => {
  const params = {
    B2B_interest: fields.interest,
    Company: fields.company,
    email: fields.email,
    Email_Opt_In: fields.stayInTouch ? '1' : '0',
    'First Name': fields.name,
    form__c: 'true',
    'Job Title': fields.jobTitle,
    'Last Name': fields.lastName,
    phone: fields.phone,
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = fields.gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const getApplicationPardotParams = (
  fields: SalesforceApplicationInterface,
  language: string,
  timezone?: string
): string => {
  const params = {
    CourseId: fields.salesforceId,
    course: courseToSalesforce(fields.course),
    campus: _.upperCase(fields.campus),
    date: fields.date || '',
    email: fields.email,
    financingoption: fields.financingOption,
    firstName: fields.firstName,
    lastName: fields.lastName,
    phone: fields.phoneNumber,
    gender: genderToSalesforce(fields.gender),
    how: fields.referral,
    how_other: fields.referralOther,
    why: fields.whyAreYouInterested,
    language: languageToSalesforce(language),
    form__c: 'true',
    is_apply_form: 'true',
    timezone: timezone || '',
    abtest: language === 'es' ? 'true' : '',
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    ipCountry: fields.ipCountry,
    phoneCountry: toTitleCase(fields.phoneCountry),
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = fields.gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const getStepApplicationPardotParams = (
  fields: Partial<SalesforceStepApplicationInterface>,
  language: string,
  step: number,
  timezone?: string
): string => {
  const params = {
    CourseId: fields.salesforceId || '',
    course: fields.format
      ? courseToSalesforce(fields.course + fields.format)
      : courseToSalesforce(fields.course),
    campus:
      (fields.remote && _.upperCase(fields.remote)) ||
      _.upperCase(fields.campus) ||
      '',
    date: fields.date || '',
    email: fields.email,
    financingoption: fields.financingOption || '',
    firstName: fields.firstName || '',
    formatMethod: fields.format || '',
    lastName: fields.lastName || '',
    phone: fields.phoneNumber || '',
    how: fields.referral || '',
    how_other: fields.referralOther || '',
    why: fields.whyAreYouInterested || '',
    language: languageToSalesforce(language),
    form__c: 'true',
    is_apply_form: 'true',
    timezone: timezone || '',
    abtest: 'true',
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    ipCountry: fields.ipCountry,
    phoneCountry: fields.phoneCountry || '',
    referrerCode: fields.referrerCode || '',
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = fields.gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const sendRetinaApplicationToPardot = async (
  fields: SalesforceRetinaApplicationInterface,
  language: string,
  timezone?: string
): Promise<void> => {
  const params = new URLSearchParams();
  params.append('CourseId', fields.salesforceId);
  params.append('course', courseToSalesforce(fields.course));
  params.append('campus', _.upperCase(fields.campus));
  params.append('date', fields.date || '');
  params.append('email', fields.email);
  params.append('firstName', fields.firstName);
  params.append('lastName', fields.lastName);
  params.append('phone', fields.phoneNumber);
  params.append('language', languageToSalesforce(language));
  params.append('timezone', timezone || '');
  params.append('Email_Opt_In', fields.emailOptIn ? '1' : '0');
  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params.append(fieldId, fields.gaConnector[fieldId]);
  });

  fetch(pardotEndpoints('retinaApplyForm'), {
    method: 'POST',
    body: params,
  });
};

const sendZomatoApplicationToPardot = async (
  fields: Record<string, string>,
  language: string,
  timezone?: string
): Promise<void> => {
  const params = new URLSearchParams();
  params.append('CourseId', fields.salesforceId);
  params.append('course', courseToSalesforce(fields.course));
  params.append('campus', _.upperCase(fields.campus));
  params.append('date', fields.date || '');
  params.append('email', fields.email);
  params.append('firstName', fields.firstName);
  params.append('lastName', fields.lastName);
  params.append('phone', fields.phone);
  params.append('language', languageToSalesforce(language));
  params.append('timezone', timezone || '');
  params.append('Email_Opt_In', fields.keepInTouch ? '1' : '0');
  params.append('emailOptin', fields.keepInTouch ? '1' : '0');
  params.append('levelEnglish', fields.englishlevel);
  params.append('profile', fields.profile);
  params.append('country', fields.country);
  params.append('over18Years', fields.over18 ? 'Yes' : 'No');
  params.append('whyApplying', fields.whyIronhack);
  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params.append(fieldId, fields.gaConnector[fieldId]);
  });

  fetch(pardotEndpoints('zomatoApplyForm'), {
    method: 'POST',
    body: params,
  });
};

const getUpdatesApplyPardotParams = (
  fields: Partial<SalesforceApplicationInterface>,
  language: string
): string => {
  const params = {
    campus: _.upperCase(fields.campus),
    course: courseToSalesforce(fields.course),
    email: fields.email,
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    firstName: fields.firstName,
    form__c: 'true',
    ipCountry: fields.ipCountry,
    language: languageToSalesforce(language),
    lastName: fields.lastName,
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = fields.gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const sendSyllabusRequestToPardot = (
  fields: SalesforceSyllabusRequestInterface,
  gaConnector: GAConnectorFields,
  isCoursePage?: boolean
): void => {
  const params = new URLSearchParams();
  params.append('sy_campus', fields.campus);
  params.append('sy_BootcampType', courseToSalesforce(fields.course));
  params.append('email', fields.email);
  params.append('firstName', fields.name);
  params.append('phone', fields.phoneNumber);
  params.append('phoneCountry', fields.phoneCountry);
  params.append('Email_Opt_In', fields.emailOptIn ? '1' : '0');
  params.append('ipCountry', fields.ipCountry);
  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params.append(fieldId, gaConnector[fieldId]);
  });

  fetch(pardotEndpoints(`getSyllabus${isCoursePage ? 'CoursePage' : ''}`), {
    method: 'POST',
    body: params,
  });
};

const getSyllabusPardotParams = (
  fields: SalesforceSyllabusRequestInterface
): string => {
  const params = {
    email: fields.email,
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    firstName: fields.name,
    ipCountry: fields.ipCountry,
    phone: fields.phoneNumber,
    phoneCountry: toTitleCase(fields.phoneCountry),
    sy_BootcampType: courseToSalesforce(fields.course),
    sy_campus: fields.campus,
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = fields.gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const sendBlogSyllabusRequestToPardot = async (
  fields: SalesforceSyllabusRequestInterface,
  gaConnector: GAConnectorFields,
  language: string
): Promise<void> => {
  const params = new URLSearchParams();
  params.append('sy_campus', fields.campus);
  params.append('sy_BootcampType', `${fields.course}FT`);
  params.append('phone', fields.phoneNumber);
  params.append('phoneCountry', fields.phoneCountry);
  params.append('email', fields.email);
  params.append('firstName', fields.firstName);
  params.append('language', languageToSalesforce(language));
  params.append('Email_Opt_In', fields.emailOptIn ? '1' : '0');
  params.append('ipCountry', fields.ipCountry);
  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params.append(fieldId, gaConnector[fieldId]);
  });

  fetch(pardotEndpoints('getSyllabusBlog'), {
    method: 'POST',
    body: params,
  });
};

const sendRetinaSyllabusRequestToPardot = async (
  fields: SalesforceSyllabusRequestInterface,
  gaConnector: GAConnectorFields,
  language: string,
  timezone?: string
): Promise<void> => {
  const params = new URLSearchParams();
  params.append('sy_campus', fields.campus);
  params.append('sy_BootcampType', courseToSalesforce(fields.course));
  params.append('email', fields.email);
  params.append('firstName', fields.name);
  params.append('lastName', fields.last);
  params.append('language', languageToSalesforce(language));
  params.append('timezone', timezone || '');
  params.append('Email_Opt_In', fields.emailOptIn ? '1' : '0');
  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params.append(fieldId, gaConnector[fieldId]);
  });

  fetch(pardotEndpoints('getSyllabusRetina'), {
    method: 'POST',
    body: params,
  });
};

const getContactFormPardotParams = (
  fields: SalesforceContactInterface,
  language: string,
  gaConnector: GAConnectorFields
): string => {
  const params = {
    campus: _.upperCase(fields.campus),
    email: fields.email,
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    firstName: fields.firstName,
    ipCountry: fields.ipCountry,
    language: languageToSalesforce(language),
    lastName: fields.lastName,
    message: fields.message,
    phone: fields.phone,
    phoneCountry: toTitleCase(fields.phoneCountry),
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const sendEnterpriseForm = (fields, gaConnector): void => {
  const params = new URLSearchParams();
  params.append('email');
  params.append('phone');
  params.append('Email_Opt_In');
  params.append('firstName');
  params.append('lastName');
  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params.append(fieldId, gaConnector[fieldId]);
  });

  return fetch(pardotEndpoints('enterpriseContact'), {
    method: 'POST',
    body: params,
  });
};

const getFinancialPardotParams = (
  fields: SalesforceGetFinancialInfoInterface,
  language: string,
  campus: string,
  country: string,
  gaConnector: GAConnectorFields
): string => {
  const params = {
    campus: _.upperCase(campus),
    email: fields.email,
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    financing_option: 'financing',
    firstName: fields.name,
    ipCountry: fields.ipCountry,
    language: languageToSalesforce(language),
    phone: fields.phoneNumber,
    phoneCountry: toTitleCase(fields.phoneCountry),
    ...(country ? { remote_location: `RMT${country}` } : {}),
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const getNewsletterPardotParams = (
  fields: SalesforceGetUpdatesRequestInterface,
  language: string,
  gaConnector: GAConnectorFields
): string => {
  const params = {
    email: fields.email,
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    firstName: fields.name,
    language: languageToSalesforce(language),
    lastName: fields.last,
    ipCountry: fields.ipCountry,
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

const getShortCourseRequestParams = (
  fields: SalesforceShortCourseInterface,
  gaConnector: GAConnectorFields,
  language: string,
  timezone?: string
): string => {
  const params = {
    email: fields.email,
    Email_Opt_In: fields.emailOptIn ? '1' : '0',
    language: languageToSalesforce(language),
    sy_BootcampType: courseToSalesforce(fields.course),
    sy_campus: _.upperCase(fields.campus),
    timezone: timezone || '',
  };

  const gaFields = Object.values(browserToInterface);
  gaFields.forEach((fieldId: string): void => {
    params[fieldId] = gaConnector[fieldId];
  });

  return new URLSearchParams(params).toString();
};

export {
  SalesforceApplicationInterface,
  SalesforceStepApplicationInterface,
  getApplicationPardotParams,
  getSyllabusPardotParams,
  sendBlogSyllabusRequestToPardot,
  getB2bContactPardotParams,
  SalesforceRetinaApplicationInterface,
  sendRetinaApplicationToPardot,
  SalesforceSyllabusRequestInterface,
  sendZomatoApplicationToPardot,
  sendSyllabusRequestToPardot,
  sendRetinaSyllabusRequestToPardot,
  SalesforceContactInterface,
  getContactFormPardotParams,
  getNewsletterPardotParams,
  getFinancialPardotParams,
  getStepApplicationPardotParams,
  getUpdatesApplyPardotParams,
  sendEnterpriseForm,
  getShortCourseRequestParams,
  SalesforceShortCourseInterface,
  pardotEndpoints,
  courseToSalesforce,
  languageToSalesforce,
};
