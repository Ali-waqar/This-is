import React from 'react';
import uniqid from 'uniqid';
import { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';

import List from './Breadcrumb';
import { getLinkByPageName } from '../../lib/links';
import * as gaEvents from './ga_events';
import Cross from '../../../static/assets/footer/cross.svg';

interface LandingPageProps {
  text: string;
  url: string;
}
interface Props {
  page: string;
  landingPage?: LandingPageProps;
  lastBreadcrumb?: string;
  t: TFunction;
}

function getBreadCrumb(
  landingPage: LandingPageProps,
  position: number,
  isUrl: boolean
): JSX.Element {
  return (
    <li key={uniqid()} property="itemListElement" typeof="ListItem">
      <Cross alt="Cross" />
      {isUrl ? (
        <a
          href={landingPage.url}
          onClick={(): void => {
            gaEvents.emitBreadcrumbEvent(position, landingPage.text);
          }}
          property="item"
          typeof="WebPage"
        >
          {landingPage.text}
        </a>
      ) : (
        <span property="item" typeof="WebPage">
          {landingPage.text}
        </span>
      )}
      <meta content={landingPage.text} property="name" />
      <meta content={position.toString()} property="position" />
    </li>
  );
}

const Breadcrumb: React.SFC<any> = (props: Props) => {
  const {
    page,
    landingPage = { url: '', text: '' },
    t,
    lastBreadcrumb = '',
  } = props;
  const pages = page.split('/');
  const isLandingPage =
    landingPage.url.length > 0 && landingPage.text.length > 0;

  const courseBreadcrumbs = () =>
    pages.map((breadcrumb: string, index: number) => {
      const { position, isUrl } = getPositionAndIsUrl(index);
      if (index === 2) {
        return getBreadCrumb(
          {
            text: `${t(`breadcrumbs:breadcrumbs.${pages[1]}`)} ${t(
              'breadcrumbs:breadcrumbs.preposition'
            )} ${t(`breadcrumbs:breadcrumbs.${breadcrumb}`)}`,
            url: '',
          },
          position,
          isUrl
        );
      }

      return getLiElements(breadcrumb, position, isUrl);
    });

  const getLiElements = (
    breadcrumb: string,
    position: number,
    isUrl: boolean,
    link?: string
  ): JSX.Element => {
    if (breadcrumb !== ':last-breadcrumb') {
      return getBreadCrumb(
        {
          text: t(`breadcrumbs:breadcrumbs.${breadcrumb}`),
          url: getLinkByPageName(link || breadcrumb),
        },
        position,
        isUrl
      );
    }
    return getBreadCrumb(
      {
        text: lastBreadcrumb,
        url: '',
      },
      position,
      isUrl
    );
  };

  const getPositionAndIsUrl = (index: number) => {
    const position = index + 2;
    const isUrl = Boolean(index < pages.length - 1 || isLandingPage);
    return { position, isUrl };
  };

  const breadcrumbsList = () =>
    pages.map((breadcrumb: string, index: number) => {
      const { position, isUrl } = getPositionAndIsUrl(index);
      let link = pages[0];
      for (let i = 1; i <= index; i++) {
        link = `${link}/${pages[i]}`;
      }
      return getLiElements(breadcrumb, position, isUrl, link);
    });

  return (
    <List typeof="BreadcrumbList" vocab="https://schema.org/">
      <li property="itemListElement" typeof="ListItem">
        <a
          href={getLinkByPageName('home')}
          onClick={(): void => {
            gaEvents.emitBreadcrumbEvent(1, 'home');
          }}
          property="item"
          typeof="WebPage"
        >
          Home
        </a>
        <meta content="Home" property="name" />
        <meta content="1" property="position" />
      </li>
      {page.includes('course') ? courseBreadcrumbs() : breadcrumbsList()}
      {isLandingPage && getBreadCrumb(landingPage, pages.length + 2, false)}
    </List>
  );
};
export default withTranslation()(Breadcrumb);
