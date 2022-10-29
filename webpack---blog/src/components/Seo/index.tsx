import React from 'react';
import Helmet from 'react-helmet';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';

import { defaultLanguage } from '../../i18n/config';
import { getLinkByPageName } from '../../lib/links';
import getCopies from './copies';

interface Props {
  t: TFunction;
  locale: string;
  page: string;
  url: string;
}

const IRONHACK_URL = process.env.IRONHACK_URL;
const IH_LOGO_PATH = '/assets/icons/ironhack_logos/logo.svg';

const getPagePath = (page: string): string => {
  if (page === 'application') return `allCourses/${page}`;
  if (page === 'applicationThanks') return `allCourses/application/${page}`;
  return page;
};

const generateHrefLang = (
  hrefLink: string,
  languageCode: string,
  index: number
): JSX.Element => (
  <link
    href={`${IRONHACK_URL}${hrefLink}`}
    hrefLang={languageCode}
    key={`hrefLang-${index}`}
    rel="alternate"
  />
);

const SEO: React.SFC<any> = (props: Props) => {
  const { t, page, pageContext, locale, url } = props;
  const { title, description } = getCopies(page, locale, t);
  const pagePath = getPagePath(page);
  const defaultLink = getLinkByPageName(pagePath, defaultLanguage);
  const defaultHrefLang =
    defaultLink && generateHrefLang(defaultLink, 'X-Default', 0);

  const languages: Record<string, string> = {
    en: 'en-US',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    nl: 'nl-NL',
    pt: 'pt-PT',
    br: 'pt-BR',
  };

  const notRenderHreflangs =
    page === 'landingPage' || page === 'blogArticle' || page === 'pressRelease';

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang: languages[locale],
      }}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'facebook-domain-verification',
          content: '8783nkfgyn58vwde7prj16zimolgmn',
        },
        {
          name: 'og:site_name',
          content: t('seo:seo.home.title'),
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          content: `${IRONHACK_URL}${
            pageContext.ogImage || '/assets/images/ih-students.jpg'
          }`,
        },
        {
          name: 'og:url',
          content: url,
        },
        {
          name: 'og:title',
          content: title,
        },
        {
          name: 'og:description',
          content: description,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: '@ironhack',
        },
      ]}
      title={title}
    >
      <link href="/assets/favicon/favicon.ico" rel="icon" type="image/x-icon" />
      <link href={`${IRONHACK_URL}${url}`} rel="canonical" />
      {!notRenderHreflangs &&
        Object.entries(languages).reduce(
          (hrefLangs, [locale, languageCode]: string[]) => {
            const hrefLink = getLinkByPageName(pagePath, locale);
            if (hrefLink) {
              hrefLangs.push(
                generateHrefLang(hrefLink, languageCode, hrefLangs.length)
              );
            }
            return hrefLangs;
          },
          defaultHrefLang ? [defaultHrefLang] : []
        )}
      <meta
        content={
          process.env.NODE_ENV !== 'production'
            ? 'noindex, nofollow, noarchive, nosnippet, nocache'
            : 'index, follow'
        }
        name="robots"
      />
    </Helmet>
  );
};

export default withTranslation()(SEO);
