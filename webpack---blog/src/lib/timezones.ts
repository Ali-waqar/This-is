import moment from 'moment-timezone';

import { P } from 'components/TeamMember/TeamMember';

export default {
  EUROPE: 'Europe/Madrid',
  USA: 'America/Chicago',
  BRAZIL: 'America/Sao_Paulo',
  LATAM: 'America/Mexico_City',
};

export const getTimezoneAbbreviation = (
  timezone: string,
  date: string
): string => {
  const abbr: string = moment.tz.zone(timezone)?.abbr(moment(date));
  return /^-\d{2}$/u.test(abbr) ? `GMT${abbr}` : abbr;
};

export const getTimeInTimezone = (
  sourceTimezone: string,
  targetTimezone: string,
  time: string
): string => {
  if (sourceTimezone && targetTimezone && time) {
    return moment
      .tz(time, 'HH:mm', sourceTimezone)
      .tz(targetTimezone)
      .format('HH:mm');
  }
  return time;
};
