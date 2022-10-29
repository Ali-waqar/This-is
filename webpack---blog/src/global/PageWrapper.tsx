import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/clerk-react';
import { navigate } from 'gatsby';

import chakraTheme from '../theme/chakraTheme';
import GtagLoader from '../components/GtagLoader';
import PardotLoader from '../components/PardotLoader';
import DNSPrefetch from '../components/DNSPrefetch';
import DataLayer from '../components/DataLayer';
import GlobalStyles from '../components/GlobalStyles';
import withI18next from '../i18n/TemplateI18n';
import Seo from '../components/Seo';
import {
  updateBrowsingHistoryPages,
  updateBrowsingHistorySubmits,
} from '../storage/provider';
import { PageContextProvider } from '../context/PageContext';
import { CookieBanner } from '../components/CookieBanner';

interface TPageWrapper {
  children: React.ReactNode;
  pageContext: {
    locale: string;
    pageName: string;
    gtmPageType: string;
    courseCode?: string;
    campusCode?: string;
    disableCovidBanner: boolean;
    url: string;
  };
}

const frontendApi = process.env.GATSBY_CLERK_FRONTEND_API_KEY;

const PageWrapper = (props: TPageWrapper): React.ReactElement => {
  const { children, pageContext } = props;
  const { locale, url, pageName, gtmPageType } = pageContext;
  const [localStorageUpdated, setLocalStorageUpdated] = useState(false);

  useEffect(() => {
    updateBrowsingHistoryPages(gtmPageType);
    if (['applicationThanks', 'contactThanks'].includes(pageName)) {
      updateBrowsingHistorySubmits(pageName);
    }
    setLocalStorageUpdated(true);
  }, [gtmPageType, pageName]);

  return (
    <>
      <DNSPrefetch />
      <Seo
        locale={locale}
        page={pageName}
        pageContext={pageContext}
        url={url}
      />
      <GtagLoader />
      <PardotLoader />
      {localStorageUpdated && <DataLayer data={pageContext} />}
      <GlobalStyles />
      <ChakraProvider theme={chakraTheme}>
        <PageContextProvider pageContext={pageContext}>
          <ClerkProvider
            frontendApi={frontendApi}
            navigate={(to): void => navigate(to)}
          >
            {children}
            <CookieBanner />
          </ClerkProvider>
        </PageContextProvider>
      </ChakraProvider>
    </>
  );
};

export default withI18next()(PageWrapper);
