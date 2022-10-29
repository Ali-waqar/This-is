import _ from 'lodash/fp';

import campuses from '../campus.json';
import CampusInformation from '../interface/campus';
import TZ from './timezones';
import DatoContactInfo from '../services/datoCampusContactInformation';

type SelectorOption = { badge?: string; code: string; type: string };

const getCampusInformation = (campusCode: string): CampusInformation =>
  campuses.find((campus: CampusInformation) => campus.code === campusCode);

const getCampusName = (campusCode: string): string =>
  (getCampusInformation(campusCode) && getCampusInformation(campusCode).name) ||
  'Campus not found';

const campusApiName: Record<string, string> = {
  ams: 'Amsterdam',
  bcn: 'Barcelona',
  ber: 'Berlin',
  bod: 'Bordeaux',
  lis: 'Lisbon',
  mad: 'Madrid',
  mex: 'Mexico City',
  mia: 'Miami',
  nyc: 'New York City',
  par: 'Paris',
  sao: 'Sao Paulo',
  tpa: 'Tampa',
  rmt: 'Remote',
};
const getApiCampusName = (campusCode: string): string =>
  campusApiName[campusCode] || '';

const campusMeetup: Record<string, string> = {
  ams: 'ironhack-amsterdam',
  bcn: 'ironhackbcn',
  ber: 'Ironhack-Berlin',
  bod: 'ironhack-bordeaux',
  dus: 'ironhack-germany',
  lis: 'ironhack-lisbon',
  lon: 'uk-tech-careers-learning-and-networking-by-ironhack',
  mad: 'ironhack-madrid',
  mex: 'Ironhack-Mexico',
  mia: 'Learn-to-Code-in-Miami',
  nyc: 'ironhack-new-york-tech-careers-learning-and-networking',
  par: 'Ironhack-Paris',
  rmt: 'https://www.crowdcast.io/ironhack',
  sao: 'ironhackSAO',
  tpa: 'ironhack-tampa-tech-careers-learning-and-networking',
};
const getCampusMeetup = (campusCode: string): string => {
  if (campusCode === 'rmt') {
    return 'https://www.crowdcast.io/ironhack';
  }

  return campusMeetup[campusCode]
    ? `https://www.meetup.com/${campusMeetup[campusCode]}/`
    : '';
};

const campusFacebook: Record<string, string> = {
  ams: 'ironhackAMS',
  bcn: 'IronhackBCN',
  ber: 'ironhackBER',
  bod: 'IronhackPAR',
  lis: 'ironhackLIS',
  mad: 'IronhackMAD',
  mex: 'ironhackMEX',
  mia: 'IronhackUS',
  nyc: 'IronhackUS',
  par: 'IronhackPAR',
  sao: 'ironhackSAO',
  tpa: 'IronhackUS',
  rmt: 'theironhack',
};
const getCampusFacebook = (campusCode: string): string =>
  campusFacebook[campusCode]
    ? `https://www.facebook.com/${campusFacebook[campusCode]}/`
    : '';

const campusTwitter: Record<string, string> = {
  ams: 'ironhackAMS',
  bcn: 'IronhackBCN',
  ber: 'ironhackBER',
  bod: 'IronhackPAR',
  lis: 'ironhackLIS',
  mad: 'IronhackMAD',
  mex: 'ironhackMEX',
  mia: 'IronhackUS',
  nyc: 'IronhackUS',
  par: 'IronhackPAR',
  rmt: 'theironhack',
  sao: 'ironhackSAO',
  tpa: 'IronhackUS',
};
const getCampusTwitter = (campusCode: string): string =>
  campusTwitter[campusCode]
    ? `https://www.twitter.com/${campusTwitter[campusCode]}/`
    : '';

const campusInstagram: Record<string, string> = {
  ams: 'ironhackAMS',
  bcn: 'IronhackBCN',
  ber: 'ironhackBER',
  bod: 'IronhackPAR',
  lis: 'ironhacklisb',
  mad: 'IronhackMAD',
  mex: 'ironhackMEX',
  mia: 'ironhackus',
  nyc: 'ironhackus',
  par: 'IronhackPAR',
  rmt: 'theironhack',
  sao: 'ironhackSAO',
  tpa: 'ironhackus',
};
const getCampusInstagram = (campusCode: string): string =>
  campusInstagram[campusCode]
    ? `https://www.instagram.com/${campusInstagram[campusCode]}/`
    : '';

const campusLinkedIn: Record<string, string> = {
  ams: 'company/amst',
  bcn: 'showcase/ironhack-barcelona',
  ber: 'showcase/ironhack-berlin',
  bod: 'showcase/ironhack-paris',
  lis: 'showcase/lisbon',
  mad: 'showcase/ironhack-madrid-campus',
  mex: 'showcase/ironhack-mexico',
  mia: 'showcase/ironhack-us',
  nyc: 'showcase/ironhack-us',
  par: 'showcase/ironhack-paris',
  sao: 'showcase/ironhack-são-paulo',
  tpa: 'showcase/ironhack-us',
};
const getCampusLinkedIn = (campusCode: string): string =>
  campusLinkedIn[campusCode]
    ? `https://www.linkedin.com/${campusLinkedIn[campusCode]}/`
    : '';

const getCampusDeposit = (campusCode: string): string => {
  switch (campusCode.toLowerCase()) {
    case 'lis':
      return '500€';
    case 'lon':
      return '£690';
    case 'mex':
      return '$9,000 MXN';
    case 'mia':
    case 'tpa':
    case 'nyc':
      return '$500';
    case 'sao':
      return 'R$ 500';
    case `rmt-${TZ.EUROPE.toLowerCase()}`:
      return '750€';
    case `rmt-${TZ.USA.toLowerCase()}`:
      return 'US$1,000';
    case `rmt-${TZ.LATAM.toLowerCase()}`:
      return 'US$400';
    case `rmt-${TZ.BRAZIL.toLowerCase()}`:
      return 'R$ 1.700';
    default:
      return '750€';
  }
};

const showPhoneNumberByCampus = (campusCode: string): boolean => {
  switch (campusCode.toLowerCase()) {
    case 'sao':
    case 'mex':
      return true;
    default:
      return false;
  }
};

const getCampusNameFromDato = (campusCode: string, locale: string) => {
  const campuses = new DatoContactInfo(locale).contactInformationByLanguage();
  const currentCampus = campuses.find(
    (info) => info.campus.code.toLowerCase() === campusCode.toLowerCase()
  );
  return (currentCampus && currentCampus.campus.description) || '';
};

const isVirtualCampus = _.pipe(
  _.lowerCase,
  _.pathEq('code'),
  (campusCodeEq) => _.find(campusCodeEq, campuses),
  _.pathEq('type', 'virtual')
);

const campusSelectorOptions: SelectorOption[] = campuses.map((campus) => ({
  badge: campus.badge,
  code: `campus${_.capitalize(campus.code)}`,
  type: campus.type,
}));

export {
  campusSelectorOptions,
  getCampusName,
  getApiCampusName,
  getCampusMeetup,
  getCampusFacebook,
  getCampusDeposit,
  getCampusInstagram,
  getCampusLinkedIn,
  getCampusTwitter,
  showPhoneNumberByCampus,
  getCampusNameFromDato,
  isVirtualCampus,
};
