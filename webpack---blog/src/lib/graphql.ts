const getCampusWebsite = require('../../build-utils');

type FieldValues = Record<string, string>;

const getCampusApi = (campus: string): string => {
  switch (campus.toLowerCase()) {
    case 'ams':
      return 'Amsterdam';
    case 'bcn':
      return 'Barcelona';
    case 'ber':
      return 'Berlin';
    case 'lis':
      return 'Lisbon';
    case 'mad':
      return 'Madrid';
    case 'mex':
      return 'Mexico City';
    case 'mia':
      return 'Miami';
    case 'par':
      return 'Paris';
    case 'sao':
      return 'Sao Paulo';
    case 'rmt':
      return 'Remote';
    default:
      return 'Global';
  }
};

const getGenderApi = (gender: string): string => {
  const mappedFields: Record<string, string> = {
    nonBinary: 'non-binary',
    notDisclose: 'no-specified',
  };
  return mappedFields[gender] || gender;
};

const getContactMutation = (
  fieldValues: FieldValues,
  pardotParams: string,
  gaCid: string
): Record<string, string | FieldValues> => {
  const { campus, email, firstName, lastName, message, phoneNumber } =
    fieldValues;
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `mutation Contact { createContact(contact: {
      campus: "${getCampusApi(campus)}",
      email: "${email}",
      first_name: "${firstName}",
      last_name: "${lastName}",
      message: "${message}",
      phone: "${phoneNumber}",
      pardot: "${pardotParams}",
      ga_cid: "${gaCid}",
    }) { email } }
    `,
    }),
  };
};

const getApplicationMutation = (
  fieldValues: FieldValues,
  acceptTerms: boolean,
  receiveNewsletter: boolean,
  pardotParams: string,
  gaCid: string
): Record<string, unknown> => {
  const {
    campus,
    cohort,
    course,
    email,
    gender,
    firstName,
    lastName,
    phoneNumber,
    referral,
    referralOther = '',
    whyAreYouInterested,
    language = 'en',
  } = fieldValues;

  const query = `mutation Application {
      createApply(apply: {
        campus: "${campus}",
        course: "${course}",
        course_edition: "${cohort}",
        email: "${email}",
        gender: "${getGenderApi(gender)}",
        language: "${language}",
        first_name: "${firstName}",
        last_name: "${lastName}",
        phone: "${phoneNumber}",
        referral: "${referral}",
        referral_other: "${referralOther.replace(/"/gu, '\\"')}",
        why_applied: "${whyAreYouInterested}",
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}",
        accept_legal_terms: ${acceptTerms},
        receive_newletters: ${receiveNewsletter},
      }) {
        email
      }
    }
  `;

  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };
};

const getStepApplicationMutation = (
  step: number,
  pardotParams: string,
  gaCid: string
): Record<string, unknown> => {
  const query = `mutation StepApplication {
      createStepApplication(stepApplication: {
        step: ${step},
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}"
      }) {
        step
      }
    }
  `;
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };
};

const getHomeStepApplicationMutation = (
  step: number,
  pardotParams: string,
  gaCid: string
): Record<string, unknown> => {
  const query = `mutation HomeStepApplication {
      createHomeStepApplication(stepApplication: {
        step: ${step},
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}"
      }) {
        step
      }
    }
  `;
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };
};

const getShortCourseJsMutation = (
  pardotParams: string,
  gaCid: string
): Record<string, unknown> => {
  const query = `mutation ShortCourseJs {
      createShortCourseJsRequest(shortCourseJs: {
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}"
      }) {
        ga_cid
      }
    }
  `;
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  };
};

const getSyllabusRequestMutation = (
  name: string,
  email: string,
  campus: string,
  course: string,
  format: string,
  pageName: string,
  pardotParams: string,
  gaCid: string
): object => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `mutation RequestSyllabus { createRequestSyllabus(requestSyllabus: {
        campus_name: "${campus}",
        course_type: "${course}",
        course_format: "${format}",
        email: "${email}",
        name: "${name}",
        page_name: "${pageName}",
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}",
      }) { email } }`,
  }),
});

const getFinancialInfoMutation = (
  pageName: string,
  pardotParams: string,
  gaCid: string
): Record<string, string | FieldValues> => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `mutation FinancialInfo { createFinancialInfo(financialInfo: {
        page_name: "${pageName}",
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}",
      }) {
        page_name
        pardot
        ga_cid
      } }`,
  }),
});

const getNewsletterMutation = (
  pardotParams: string,
  gaCid: string
): Record<string, string | FieldValues> => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `mutation NewsletterRequest { createNewsletterRequest(newsletterRequest: {
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}",
      }) {
        pardot
        ga_cid
      }}`,
  }),
});

const getUpdatesApplyMutation = (
  pardotParams: string,
  gaCid: string
): Record<string, string | FieldValues> => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `mutation UpdatesApply { createUpdatesRequest(updatesRequest: {
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}",
      }) {
        pardot
        ga_cid
      }}`,
  }),
});

const getEnterpriseContactMutation = (
  pardotParams: string,
  gaCid: string
): Record<string, string | FieldValues> => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `mutation EnterpriseContact { createEnterpriseContact(enterpriseContact: {
        pardot: "${pardotParams}",
        ga_cid: "${gaCid}",
      }) {
        pardot
        ga_cid
      }}`,
  }),
});

const getUserGeoDataQuery = (): object => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `query GeoData { currentTimezone, remoteTimezone, currentCountry, defaultCampus }`,
  }),
});

const getUserTimezoneQuery = (): object => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `query Timezone { remoteTimezone }`,
  }),
});

const getUserLocationQuery = (): object => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query:
      'query Location { campus: defaultCampusCode, remoteTimezone: remoteTimezone }',
  }),
});

export {
  getCampusApi,
  getCampusWebsite,
  getContactMutation,
  getApplicationMutation,
  getEnterpriseContactMutation,
  getFinancialInfoMutation,
  getHomeStepApplicationMutation,
  getNewsletterMutation,
  getStepApplicationMutation,
  getShortCourseJsMutation,
  getSyllabusRequestMutation,
  getUpdatesApplyMutation,
  getUserGeoDataQuery,
  getUserTimezoneQuery,
  getUserLocationQuery,
};
