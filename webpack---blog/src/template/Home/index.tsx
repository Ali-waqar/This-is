import React from 'react';
import { graphql, PageProps } from 'gatsby';

import NewVariant from './variants/new';
import { PageContext } from '../../context/PageContext';

type HomeProps = PageProps<PageContext>;

function Home(props: HomeProps): JSX.Element {
  return <NewVariant {...props} />;
}

/*
 * Since the page to render is going to be choosed on runtime, the data for
 * both variants should be grabbed in advance. This is the combined query.
 */
export const query = graphql`
  query ($locale: String!, $datoLocale: String!, $pageName: String!) {
    locales: allLocale(
      filter: {
        lng: { eq: $locale }
        ns: {
          regex: "/(application-form)|(home)|(menu)|(course-cybersecurity-campus)|(course-campus)|(course-list)|(footer)|(seo)|(breadcrumbs)|(banner)|(course-web-dev-rmt)|(blog)|(campus-list)|(languages)/"
        }
      }
    ) {
      ...TranslationFragment
    }
    allDatoCmsAssetsByPage(
      filter: { page: { eq: $pageName }, locale: { eq: $datoLocale } }
    ) {
      nodes {
        page
        locale
        assets {
          gatsbyImageData(layout: FULL_WIDTH)
          title
          alt
          customData
          basename
        }
      }
    }
    datoCmsCompanyShowcase {
      main {
        name
        logo {
          fluid(maxWidth: 140, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    datoCmsHomeHeaderApply {
      title
      textAfterApply
    }
    datoCmsApplyForm {
      googleFlowContinueCta
      googleLoginErrorMessage
      continueButtonsSeparator
      normalFlowContinueCta
    }
  }
`;

export default Home;
