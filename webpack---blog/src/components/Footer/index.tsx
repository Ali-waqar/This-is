import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, HStack, Text } from '@chakra-ui/react';

import Breadcrumbs from '../Breadcrumb';
import Layout from '../atoms/layout';
import config from '../config';
import Section from './Footer';
import FooterLinks from '../FooterLinks';
import CourseReport from '../../../static/assets/footer/course-report.svg';
import SwitchUp from '../../../static/assets/footer/switchup.svg';
import FloridaEducation from '../../../static/assets/footer/florida-education.svg';
import Qualiop from '../../../static/assets/footer/qualiop.svg';
import IronhackLogo from '../../../static/assets/icons/ironhack_logos/logo.svg';

interface Props {
  showLinks?: boolean;
  page: string;
  locale?: string;
  lastBreadcrumb?: string;
}

function Footer(props: Props): JSX.Element {
  const { showLinks = false, page, lastBreadcrumb = '' } = props;
  const {
    i18n: { language },
  } = useTranslation(['footer']);

  const isInFrench = language === 'fr';

  return (
    <Layout as="footer" background={config.palette.darkBlue}>
      {showLinks ? (
        <FooterLinks />
      ) : (
        <Breadcrumbs lastBreadcrumb={lastBreadcrumb} page={page} />
      )}

      <Section>
        <article className="footer-content">
          <IronhackLogo alt="Ironhack Logo" />
          <div className="copy">
            990 Biscayne Blvd. Ste 503 - Miami FL 33132
            <br />© 2013-2019 Ironhack. All Rights Reserved
          </div>
        </article>

        <HStack align="flex-start" spacing={4}>
          <CourseReport alt="Course Report Logo" height={43} width="auto" />
          <SwitchUp alt="SwitchUp Logo" height={43} width="auto" />
          {isInFrench ? (
            <Box>
              <Qualiop alt="Qualiop processus certifié" />
              <Text
                color="whiteAlpha.80"
                fontSize="6px"
                mt={0.5}
                textStyle="body6"
                w="150px"
              >
                La certification qualité a été délivrée au titre de la catégorie
                d’action suivante: ACTIONS DE FORMATION
              </Text>
            </Box>
          ) : (
            <div className="licensed-by">
              Licensed by:{' '}
              <FloridaEducation alt="Florida Education Department" />
            </div>
          )}
        </HStack>
      </Section>
    </Layout>
  );
}

export default Footer;
