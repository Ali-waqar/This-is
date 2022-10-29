import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash/fp';

import { usePageContext } from '../context/PageContext';
import { ItemDatoBlogInfo as BlogArticle } from '../services/interfaces';

export type BlogCategory = {
  code: string;
  description: string;
};

type DatoBlogCategories = {
  allDatoCmsBlogArticles: DatoCmsSourceGraphQlResponse<BlogArticle>;
};

export default function useBlogArticles(category: string): BlogArticle[] {
  const { locale } = usePageContext();

  const datoCmsBlogArticles = useStaticQuery<DatoBlogCategories>(graphql`
    query BlogArticlesQuery {
      allDatoCmsBlogArticle {
        edges {
          node {
            title
            locale
            slugTitle
            id
            language {
              code
            }
            headerImage {
              gatsbyImageData(width: 1100, layout: FULL_WIDTH)
              alt
              title
            }
            mainCategory {
              ... on DatoCmsCity {
                code
                description
              }
              ... on DatoCmsCourse {
                code
                description
              }
              ... on DatoCmsBlogCategory {
                code
              }
            }
            secondaryCategory {
              ... on DatoCmsCity {
                code
                description
              }
              ... on DatoCmsCourse {
                code
                description
              }
              ... on DatoCmsBlogCategory {
                code
                description
              }
            }
          }
        }
      }
    }
  `);

  const articles = useMemo(
    () =>
      _.pipe(
        _.getOr([], 'allDatoCmsBlogArticle.edges'),
        _.filter((edge: { node: BlogArticle }) => {
          const sanitizedLocale = locale === 'br' ? 'pt-BR' : locale;
          let toKeep =
            edge.node.locale === sanitizedLocale &&
            edge.node.language.code.toLowerCase() === locale;
          if (toKeep && category) {
            toKeep =
              edge.node.mainCategory.code === category ||
              edge.node.secondaryCategory?.code === category;
          }
          return toKeep;
        }),
        _.pluck('node')
      )(datoCmsBlogArticles),
    [datoCmsBlogArticles, locale, category]
  );

  return articles;
}
