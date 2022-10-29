import React, { Component } from 'react';
import { I18nextProvider, Translation } from 'react-i18next';
import { i18n, TFunction } from 'i18next';
import _ from 'lodash';
import setupI18next from './i18next';
import { defaultLanguage } from './config';

interface WithI18nextProps {
  pageContext: { locale: string };
  data: {
    locales: {
      edges: Array<{ node: { lng: string; ns: string; data: string } }>;
    };
  };
}

const I18nContext = React.createContext({});

function I18nProvider({ children, ...rest }: { children: JSX.Element }) {
  return (
    <I18nContext.Provider value={{ ...rest }}>{children}</I18nContext.Provider>
  );
}

const withI18next = (language?: string) => (
  Comp: React.FunctionComponent<{ t: TFunction }>
) => {
  class I18n extends Component<WithI18nextProps> {
    private i18n: i18n;
    private language: string | undefined;
    constructor(props: WithI18nextProps) {
      super(props);
      this.i18n = setupI18next();
      this.language = language;
      this.activateLng();
    }

    public componentDidUpdate(prevProps: WithI18nextProps) {
      if (this.props.pageContext.locale !== prevProps.pageContext.locale) {
        this.activateLng();
      }
    }

    public render() {
      return (
        <I18nextProvider i18n={this.i18n}>
          <I18nProvider {...this.props.pageContext}>
            <Translation>
              {(t: TFunction) => <Comp t={t} {...this.props} />}
            </Translation>
          </I18nProvider>
        </I18nextProvider>
      );
    }

    private activateLng = () => {
      const { data, pageContext } = this.props;
      const ctxLocale = _.get(pageContext, 'locale');
      if (data && data.locales) {
        data.locales.edges.forEach(
          ({ node }: { node: { lng: string; ns: string; data: string } }) => {
            const { lng, ns } = node;
            const translate = node.data;
            if (!this.i18n.hasResourceBundle(lng, ns)) {
              this.i18n.addResourceBundle(
                lng,
                ns,
                JSON.parse(translate),
                true,
                true
              );
            }
          }
        );
      }
      this.i18n.changeLanguage(ctxLocale || this.language || defaultLanguage);
    };
  }

  return I18n;
};

export default withI18next;
