import _ from 'lodash/fp';

import { TDatoCmsGraphQlAssets, TDatoCmsImage } from '../types/datocms';

export const datoLanguage = (language: string): string => {
  switch (language) {
    case 'br':
      return 'pt-BR';
    default:
      return language;
  }
};

export const webLanguage = (language: string): string => {
  switch (language) {
    case 'pt-BR':
      return 'br';
    default:
      return language;
  }
};

export const processDatoCmsAssests = (
  data: TDatoCmsGraphQlAssets
): Record<string, TDatoCmsImage> =>
  _.pipe(
    _.getOr([], 'nodes'),
    _.getOr([], '0.assets'),
    _.groupBy('basename'),
    _.mapValues(_.head)
  )(data);
