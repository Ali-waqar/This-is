import React from 'react';
import { Link, Text } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { privacyPolicy, termsOfUse } from '../../../../../url.json';

const Terms = (): React.ReactElement => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  return (
    <Text align="center" color="darkBlue.64" mt={2} textStyle="body5">
      {t(
        'application-form:applicationForm.footer.legalAdvice.shareData.byApplyingStart'
      )}{' '}
      <Link as={GatsbyLink} to={`/${language}/${privacyPolicy[language]}`}>
        {t(
          'application-form:applicationForm.footer.legalAdvice.privacyPolicyLinkText'
        )}
      </Link>{' '}
      {t(
        'application-form:applicationForm.footer.legalAdvice.shareData.byApplyingConjuntion'
      )}{' '}
      <Link as={GatsbyLink} to={`/${language}/${termsOfUse[language]}`}>
        {t(
          'application-form:applicationForm:footer.legalAdvice.shareData.termsOfUseLinkText'
        )}
      </Link>
    </Text>
  );
};

export default Terms;
