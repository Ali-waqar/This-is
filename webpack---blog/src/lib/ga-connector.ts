interface GAConnectorFields {
  GA_all_traffic_sources: string;
  GA_browser: string;
  GA_city: string;
  GA_country: string;
  GA_FC_campaign: string;
  GA_FC_channel: string;
  GA_FC_content: string;
  GA_FC_landing: string;
  GA_FC_medium: string;
  GA_FC_referrer: string;
  GA_FC_source: string;
  GA_FC_term: string;
  GA_Client_ID: string;
  GA_LC_campaign: string;
  GA_LC_channel: string;
  GA_LC_content: string;
  GA_LC_landing: string;
  GA_LC_medium: string;
  GA_LC_referrer: string;
  GA_LC_source: string;
  GA_LC_term: string;
  GA_page_visits: string;
  GA_time_passed: string;
  GA_device: string;
  gclid: string;
}

interface Cookie {
  [key: string]: string;
}

const browserToInterface: { [key: string]: string } = {
  gaconnector_all_traffic_sources: 'GA_all_traffic_sources', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_browser: 'GA_browser', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_city: 'GA_city', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_country: 'GA_country', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_campaign: 'GA_FC_campaign', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_channel: 'GA_FC_channel', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_content: 'GA_FC_content', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_landing: 'GA_FC_landing', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_medium: 'GA_FC_medium', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_referrer: 'GA_FC_referrer', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_source: 'GA_FC_source', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_fc_term: 'GA_FC_term', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_GA_Client_ID: 'GA_Client_ID', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_campaign: 'GA_LC_campaign', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_channel: 'GA_LC_channel', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_content: 'GA_LC_content', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_landing: 'GA_LC_landing', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_medium: 'GA_LC_medium', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_referrer: 'GA_LC_referrer', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_source: 'GA_LC_source', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_lc_term: 'GA_LC_term', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_page_visits: 'GA_page_visits', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_time_passed: 'GA_time_passed', // eslint-disable-line @typescript-eslint/camelcase
  gaconnector_device: 'GA_device', // eslint-disable-line @typescript-eslint/camelcase
  gclid: 'gclid' // eslint-disable-line @typescript-eslint/camelcase
};

const getCookieValue = (cookie: string): Cookie | void => {
  const cookieParts = cookie.split('=');
  if (cookieParts[0].trim() in browserToInterface) {
    return { [browserToInterface[cookieParts[0].trim()]]: cookieParts[1] };
  }
};

const getGaConnectorValues = (documentCookie: string): GAConnectorFields => {
  const cookies = documentCookie.split(';');
  let GAConnectorCookies = {
    GA_all_traffic_sources: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_browser: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_city: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_country: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_campaign: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_channel: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_content: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_landing: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_medium: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_referrer: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_source: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_FC_term: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_Client_ID: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_campaign: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_channel: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_content: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_landing: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_medium: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_referrer: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_source: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_LC_term: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_page_visits: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_time_passed: '', // eslint-disable-line @typescript-eslint/camelcase
    GA_device: '', // eslint-disable-line @typescript-eslint/camelcase
    gclid: '' // eslint-disable-line @typescript-eslint/camelcase
  };
  cookies.forEach(cookie => {
    const value = getCookieValue(cookie);
    if (value) {
      GAConnectorCookies = { ...GAConnectorCookies, ...value };
    }
  });
  return GAConnectorCookies;
};

export {
  GAConnectorFields,
  getCookieValue,
  browserToInterface,
  getGaConnectorValues
};
