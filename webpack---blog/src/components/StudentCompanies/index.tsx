import React from 'react';
import { Box } from '@chakra-ui/react';
import { withTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import Img from 'gatsby-image';

import Layout from '../atoms/layout';
import { Text5 } from '../atoms/body';
import {
  Companies,
  LayoutStudentCompanies,
  CompanyLogo,
} from './StudentCompanies';
import DatoCompanies from '../../services/datoCompanies';

interface Company {
  name: string;
  logo: string;
}

const StudentCompanies: React.SFC<any> = (props: {
  t: TFunction;
  title?: string;
}) => {
  const { t, title } = props;
  const companies = new DatoCompanies().getMainShowcase();
  return (
    <Layout extend={LayoutStudentCompanies}>
      <Box mt={[6, null, null, 8]}>
        <Text5 as="p">{title ? title : t('home:home:companies.title')}</Text5>
      </Box>
      <Companies>
        {companies.map((company: Company) => (
          <CompanyLogo key={company.name} width={100 / companies.length}>
            <Img alt={company.name} fluid={company.logo} />
          </CompanyLogo>
        ))}
      </Companies>
    </Layout>
  );
};

export default withTranslation()(StudentCompanies);
