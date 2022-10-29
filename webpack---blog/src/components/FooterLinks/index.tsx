import React from 'react';
import { withTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import { getLinkByPageName } from '../../lib/links';
import { getSocialNetworkLink } from '../../lib/social-network-links';
import { Nav, Footer, FooterSection } from './styles';
import * as gaEvents from './ga_events';

const FooterLink: React.SFC<any> = (props: { t: TFunction }) => {
  const { t } = props;
  return (
    <Footer>
      <Nav>
        <FooterSection>
          {t('footer:footer.links.studyWithIronhack.title')}
        </FooterSection>
        <a
          href={getLinkByPageName('allCourses')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('study with ironhack', 'all courses')
          }
        >
          {t('footer:footer.links.studyWithIronhack.allCourses')}
        </a>
        <a
          href={getLinkByPageName('financing')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('study with ironhack', 'financing options')
          }
        >
          {t('footer:footer.links.studyWithIronhack.financingOptions')}
        </a>
        <a
          href={getLinkByPageName('careerServices')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('study with ironhack', 'career services')
          }
        >
          {t('footer:footer.links.studyWithIronhack.careerServices')}
        </a>
        <a
          href={getLinkByPageName('alumni')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('study with ironhack', 'testimonials')
          }
        >
          {t('footer:footer.links.studyWithIronhack.studentTestimonials')}
        </a>
        <a
          href={getLinkByPageName('blog')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('study with ironhack', 'blog')
          }
        >
          {t('footer:footer.links.studyWithIronhack.blog')}
        </a>
        <a
          href={getLinkByPageName('faq')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('study with ironhack', 'faq')
          }
        >
          {t('footer:footer.links.studyWithIronhack.faq')}
        </a>
      </Nav>
      <Nav>
        <FooterSection>{t('footer:footer.links.moreInfo.title')}</FooterSection>
        {getLinkByPageName('enterprise') && (
          <a href={getLinkByPageName('enterprise')}>
            {t('footer:footer.links.moreInfo.enterprise')}
          </a>
        )}
        <a href={getLinkByPageName('hireTechTalent')}>
          {t('footer:footer.links.moreInfo.hireTalent')}
        </a>
      </Nav>
      <Nav>
        <FooterSection>
          {t('footer:footer.links.aboutIronhack.title')}
        </FooterSection>
        <a
          href={getLinkByPageName('socialImpact')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'social impact')
          }
        >
          {t('footer:footer.links.aboutIronhack.socialImpact')}
        </a>
        <a
          href={getLinkByPageName('team')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'about us')
          }
        >
          {t('footer:footer.links.aboutIronhack.aboutUs')}
        </a>
        <a
          href="https://jobs.ironhack.com/departments/instructors"
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'become an instructor')
          }
        >
          {t('footer:footer.links.aboutIronhack.becomeAnInstructor')}
        </a>
        <a
          href="https://jobs.ironhack.com/"
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'work with us')
          }
        >
          {t('footer:footer.links.aboutIronhack.workWithUs')}
        </a>
        <a
          href={getLinkByPageName('contact')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'contact')
          }
        >
          {t('footer:footer.links.aboutIronhack.contact')}
        </a>
        <a
          href={getLinkByPageName('press')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'press')
          }
        >
          {t('footer:footer.links.aboutIronhack.press')}
        </a>
        <a
          href={getLinkByPageName('privacyPolicy')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'legal')
          }
        >
          {t('footer:footer.links.aboutIronhack.privacyPolicy')}
        </a>
        <a
          href={getLinkByPageName('termsOfUse')}
          onClick={(): void =>
            gaEvents.emitFooterEvent('about ironhack', 'terms&conditions')
          }
        >
          {t('footer:footer.links.aboutIronhack.termsOfUse')}
        </a>
      </Nav>
      <Nav>
        <FooterSection>{t('footer:footer.links.followUs.title')}</FooterSection>
        <a
          href="https://www.coursereport.com/schools/ironhack"
          onClick={(): void =>
            gaEvents.emitFooterEvent('follow us', 'course report')
          }
          rel="noreferrer"
          target="_blank"
        >
          {t('footer:footer.links.followUs.courseReport')}
        </a>
        <a
          href="https://www.switchup.org/bootcamps/ironhack"
          onClick={(): void =>
            gaEvents.emitFooterEvent('follow us', 'switchup')
          }
          rel="noreferrer"
          target="_blank"
        >
          {t('footer:footer.links.followUs.switchUp')}
        </a>
        <a
          href={getSocialNetworkLink('twitter')}
          itemProp="sameAs"
          onClick={(): void => gaEvents.emitFooterEvent('follow us', 'twitter')}
          rel="noreferrer"
          target="_blank"
        >
          {t('footer:footer.links.followUs.twitter')}
        </a>
        <a
          href={getSocialNetworkLink('facebook')}
          itemProp="sameAs"
          onClick={(): void =>
            gaEvents.emitFooterEvent('follow us', 'facebook')
          }
          rel="noreferrer"
          target="_blank"
        >
          {t('footer:footer.links.followUs.facebook')}
        </a>
        <a
          href={getSocialNetworkLink('instagram')}
          itemProp="sameAs"
          onClick={(): void =>
            gaEvents.emitFooterEvent('follow us', 'instagram')
          }
          rel="noreferrer"
          target="_blank"
        >
          {t('footer:footer.links.followUs.instagram')}
        </a>
        <a
          href="https://www.youtube.com/c/ironhack-tech-school"
          itemProp="sameAs"
          onClick={(): void => gaEvents.emitFooterEvent('follow us', 'youtube')}
          rel="noreferrer"
          target="_blank"
        >
          {t('footer:footer.links.followUs.youtube')}
        </a>
      </Nav>
    </Footer>
  );
};

export default withTranslation()(FooterLink);
