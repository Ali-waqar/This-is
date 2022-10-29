import React from 'react';
import { withTranslation } from 'react-i18next';
import DatoContactInfo from '../../services/datoCampusContactInformation';
import { ItemDatoContactInfo } from '../../services/interfaces';
import { Text1, Text3 } from '../atoms/body';
import { showPhoneNumberByCampus } from '../../lib/campus';
import { TFunction } from 'i18next';

interface Props {
  t: TFunction;
  locale: string;
  campus: string;
}

const ContactInfo: React.SFC<any> = (props: Props) => {
  const { t, campus, locale } = props;
  const campusContactInfo = new DatoContactInfo(
    locale
  ).contactInformationByLanguage();
  const campusInfo = campusContactInfo.find(
    (info: ItemDatoContactInfo): boolean =>
      info.campus.code.toLowerCase() === campus.toLowerCase()
  );

  const showPhone = showPhoneNumberByCampus(campus);

  return (
    <React.Fragment>
      {campusInfo && campusInfo.phoneNumber && showPhone && (
        <section className="col-1 section-title">
          <Text3 as="div">
            {t('contact-form:contactForm.contactInfo.message')}
          </Text3>
          <Text1>{campusInfo.phoneNumber}</Text1>
        </section>
      )}
    </React.Fragment>
  );
};

export default withTranslation()(ContactInfo);
