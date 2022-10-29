import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash/fp';

import { usePageContext } from '../context/PageContext';

type DatoKey = 'allDatoCmsCity' | 'allDatoCmsCourse' | 'allDatoCmsBlogCategory';

type DatoBlogCategories = Record<
  DatoKey,
  DatoCmsSourceGraphQlResponse<BlogCategory>
>;

export type BlogCategory = {
  code: string;
  description: string;
  type?: 'city' | 'campus' | 'category';
  locale: string;
};

export type BlogCategories = Record<string, BlogCategory>;

const typeMap = {
  allDatoCmsCity: 'city',
  allDatoCmsCourse: 'course',
  allDatoCmsBlogCategory: 'category',
};

export default function useBlogCategories(): BlogCategories {
  const { locale } = usePageContext();

  const datoCmsBlogCategories = useStaticQuery<DatoBlogCategories>(graphql`
    query BlogCategoriesQuery {
      allDatoCmsCity {
        edges {
          node {
            description
            code
            locale
          }
        }
      }
      allDatoCmsCourse {
        edges {
          node {
            description
            code
            locale
          }
        }
      }
      allDatoCmsBlogCategory {
        edges {
          node {
            description
            code
            locale
          }
        }
      }
    }
  `);

  const categoriesMap = useMemo<BlogCategories>(
    () =>
      _.pipe(
        _.toPairs,
        _.map(([key, values]) =>
          _.pipe(
            _.getOr([], 'edges'),
            _.pluck('node'),
            _.filter({ locale: locale === 'br' ? 'pt-BR' : locale }),
            _.map(_.merge({ type: typeMap[key as DatoKey] })),
            _.keyBy('code')
          )(values)
        ),
        _.reduce(_.merge, {})
      )(datoCmsBlogCategories),
    [datoCmsBlogCategories, locale]
  );

  return categoriesMap;
}
