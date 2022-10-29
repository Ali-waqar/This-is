import React from 'react';
import uniqid from 'uniqid';
import { withTranslation } from 'react-i18next';
import Img from 'gatsby-image';

import { emitHireInfoEvent } from './ga_events';
import { getLinkByPageName } from '../../lib/links';
import Layout from '../atoms/layout';
import { Title1 } from '../atoms/headers';
import { Text3, Text4 } from '../atoms/body';
import {
  Images,
  Image,
  ListChecksBox,
  CheckBox,
  LinkPartner,
  LayoutPartner
} from './styles';
import PartnerProps from '../interfaces/Partner';
import DatoCompanies from '../../services/datoCompanies';

const Partner: React.SFC<any> = (props: PartnerProps) => {
  const { title, subtitle, viewChecksBox = false, viewButton, t } = props;
  const companies = new DatoCompanies().getSecondaryShowcase();
  return (
    <Layout extend={LayoutPartner}>
      <Title1 as="h2">{title}</Title1>
      <Text3 as="p">{subtitle}</Text3>
      {viewChecksBox ? (
        <ListChecksBox>
          <CheckBox>
            <div>
              <img src="/assets/icons/checkbox/check-box.svg" alt="check-box" />
              <Text4 as="p">
                <b>
                  {t('social-impact:socialImpact.partners.options.01.title')}
                </b>
                &nbsp;
                {t(
                  'social-impact:socialImpact.partners.options.01.description'
                )}
              </Text4>
            </div>
            <div>
              <img src="/assets/icons/checkbox/check-box.svg" alt="check-box" />
              <Text4 as="p">
                <b>
                  {t('social-impact:socialImpact.partners.options.02.title')}
                </b>
                &nbsp;
                {t(
                  'social-impact:socialImpact.partners.options.02.description'
                )}
              </Text4>
            </div>
          </CheckBox>
          <CheckBox>
            <div>
              <img src="/assets/icons/checkbox/check-box.svg" alt="check-box" />
              <Text4 as="p">
                <b>
                  {t('social-impact:socialImpact.partners.options.03.title')}
                </b>
                &nbsp;
                {t(
                  'social-impact:socialImpact.partners.options.03.description'
                )}
              </Text4>
            </div>
            <div>
              <img src="/assets/icons/checkbox/check-box.svg" alt="check-box" />
              <Text4 as="p">
                <b>
                  {t('social-impact:socialImpact.partners.options.04.title')}
                </b>
                &nbsp;
                {t(
                  'social-impact:socialImpact.partners.options.04.description'
                )}
              </Text4>
            </div>
          </CheckBox>
        </ListChecksBox>
      ) : (
        ''
      )}
      <Images>
        {companies.map(company => (
          <Image key={company.name}>
            <Img fluid={company.logo} alt={company.name} />
          </Image>
        ))}
      </Images>
      {viewButton ? (
        <LinkPartner
          onClick={emitHireInfoEvent}
          href={getLinkByPageName('hireTechTalent')}
        >
          {t('home:home.hireTalent.cta')}
        </LinkPartner>
      ) : (
        ''
      )}
    </Layout>
  );
};

export default withTranslation()(Partner);
