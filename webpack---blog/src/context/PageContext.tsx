import React, { ReactNode, useContext } from 'react';
import { StructuredTextGraphQlResponse } from 'react-datocms';

export type PageContext = {
  locale: string;
  pageName: string;
  gtmPageType: string;
  courseCode?: string;
  campusCode?: string;
  disableCovidBanner: boolean;
  url: string;
  defaultLanguage: string;
  cookieBanner: {
    mainText: StructuredTextGraphQlResponse;
    learnMore: StructuredTextGraphQlResponse;
    customizeButton: string;
    rejectButton: string;
    acceptButton: string;
  };
};

type PageContextProviderProps = {
  pageContext: PageContext;
  children: ReactNode;
};

export const PageContextContext = React.createContext<PageContextProviderProps>();

export const PageContextProvider = (
  props: PageContextProviderProps
): JSX.Element => {
  const { children, pageContext } = props;
  return (
    <PageContextContext.Provider value={{ pageContext }}>
      {children}
    </PageContextContext.Provider>
  );
};

export const usePageContext = (): PageContext => {
  const { pageContext } = useContext(PageContextContext);
  return pageContext;
};
