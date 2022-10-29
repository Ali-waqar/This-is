import _ from 'lodash';
import Dates, { WeekDays } from '../interface/dates';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const LANGUAGESCODE: { [key: string]: string } = {
  br: 'pt-BR',
  de: 'de-DE',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  nl: 'nl-NL',
  pt: 'pt-PT'
};

const dateMonthYear = (date: string, language: string) => {
  const splitDateT = date.split('T');
  const lengthEqualZero = (length: number) => length === 0;

  if (lengthEqualZero(splitDateT.length)) {
    return '';
  }
  const splitDateScript = splitDateT[0].split('-');
  if (lengthEqualZero(splitDateScript.length)) {
    return '';
  }
  const transformDate = new Date(
    Date.UTC(+splitDateScript[0], +splitDateScript[1] - 1, +splitDateScript[2])
  );
  const monthYear = new Intl.DateTimeFormat(LANGUAGESCODE[language], {
    year: 'numeric',
    month: 'long'
  }).format(transformDate);
  return monthYear;
};

const getDayAbbreviation = (weekDays: WeekDays, day: string): string => {
  return _.get(weekDays, `${day.toLocaleLowerCase()}.abbreviation`, '');
};

const getScheduleDays = (
  i18nDates: Dates,
  courseWeekDays: string[]
): string => {
  if (courseWeekDays.length === 5) {
    const firstDay = getDayAbbreviation(i18nDates.weekDays, courseWeekDays[0]);
    const lastDay = getDayAbbreviation(i18nDates.weekDays, courseWeekDays[4]);
    const to = _.get(i18nDates, 'conjunctions.to');
    return `${firstDay} ${to} ${lastDay}`;
  }
  const and = _.get(i18nDates, 'conjunctions.and');
  return courseWeekDays
    .map((day: string): string => getDayAbbreviation(i18nDates.weekDays, day))
    .join(` ${and} `);
};

const formatDate = (date: string): string => {
  if (date === '') {
    return '';
  }

  const splittedDate = date.split('T');
  if (splittedDate.length !== 2) {
    return '';
  }

  const dateParts = splittedDate && splittedDate[0].split('-');
  if (dateParts.length !== 3) {
    return '';
  }

  const day = dateParts[2];
  const month = parseInt(dateParts[1]);
  return `${day} ${MONTHS[month - 1]}`;
};

const formatCurrency = (amount: number, currency: string): string => {
  let code;
  let locale;

  switch (currency) {
    case '$':
      code = 'USD';
      locale = 'en-US';
      break;
    case '€':
      code = 'EUR';
      locale = 'es-ES';
      break;
    case '$MXN':
      code = 'MXN';
      locale = 'es-MX';
      break;
    case 'R$':
      code = 'BRL';
      locale = 'pt-BR';
      break;
    case '£':
      code = 'GBP';
      locale = 'en-GB';
      break;
    default:
      code = 'EUR';
      locale = 'es-ES';
      break;
  }

  let formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: code,
  }).format(amount);

  if (code === 'MXN') {
    formatted += ' MXN';
  } else if (code === 'USD') {
    formatted = `US${formatted}`;
  }

  return formatted;
};

export { getScheduleDays, formatDate, formatCurrency, dateMonthYear };
