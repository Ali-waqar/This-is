import React, { useState } from 'react';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Button,
  Link,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import _ from 'lodash/fp';

import { LinkButton } from '../atoms/buttons';
import {
  Wrapper,
  Navbar,
  Select,
  Campuses,
  Languages,
  MobileMenu,
  MobileOptions,
  ButtonApplyNowMobile,
} from './Components';
import MenuItems from './MenuItems';
import MenuIcon from '../../../static/assets/icons/menu/burger-blue.svg';
import Props from '../interfaces/NavBar';
import { getLinkByPageName } from '../../lib/links';
import Cross from '../../../static/assets/icons/menu/cross.svg';
import ArrowRight from '../../../static/assets/icons/menu/arrow-right.svg';
import ArrowLeft from '../../../static/assets/icons/menu/arrow-left.svg';
import IronhackLogo from '../IronhackLogo';
import BrFlag from '../../../static/assets/icons/flags/br.svg';
import DeFlag from '../../../static/assets/icons/flags/de.svg';
import UsFlag from '../../../static/assets/icons/flags/en.svg';
import EsFlag from '../../../static/assets/icons/flags/es.svg';
import FrFlag from '../../../static/assets/icons/flags/fr.svg';
import NlFlag from '../../../static/assets/icons/flags/nl.svg';
import PtFlag from '../../../static/assets/icons/flags/pt.svg';
import * as gaEvents from './ga_events';
import { campusSelectorOptions } from '../../lib/campus';
import { updateDataLayer } from '../../lib/datalayer';
import { DatoCmsSourceGraphQlResponse } from '../../types/datocms';
import config from '../config';
import { EXTERNAL_LINKS } from '../../utils/constants/links';

type Link = {
  id: string;
  description: string;
  eventLabel: string;
  label: string;
  url: string;
};

type LinkList = {
  locale: string;
  title: string;
  urlList: Link[];
};

const ALL_UPCOMING_COURSES_QUERY = graphql`
  query Query {
    allUpcomingCourses: allDatoCmsLinkList(
      filter: { purpose: { eq: "upcoming-courses" } }
    ) {
      edges {
        node {
          title
          locale
          urlList {
            id
            description
            eventLabel
            label
            url
          }
        }
      }
    }
  }
`;

const defaultLanguages = [
  { language: 'English', code: 'en' },
  { language: 'Español', code: 'es' },
  { language: 'Français', code: 'fr' },
  { language: 'German', code: 'de' },
  { language: 'Portuguese', code: 'pt' },
  { language: 'Portuguese (Brazil)', code: 'br' },
  { language: 'Dutch', code: 'nl' },
];

const NavBar: React.SFC<any> = (props: Props) => {
  const {
    isDarkBackground,
    isDarkBackgroundMobile,
    languages = defaultLanguages,
    showCourses = true,
    showCampuses = true,
    showWhyIronhack = true,
    showLanguages = true,
    showCompanies = true,
    showApplicationCta = true,
    pageName,
    className = '',
  } = props;
  const { t, i18n } = useTranslation();
  const [showMenuMobile, toggleShowMenuMobile] = useState(false);
  const [showLaguagesMobile, toggleShowLanguages] = useState(false);
  const [showCoursesMobile, toggleShowCoursesMobile] = useState(false);
  const [showCampusesMobile, toggleShowCampusesMobile] = useState(false);
  const [showWhyIronhackMobile, toggleShowWhyIronhackMobile] = useState(false);
  const [showForCompaniesMobile, toggleShowForCompaniesMobile] =
    useState(false);
  const logoSize = useBreakpointValue(['m', null, null, 'l']);
  const { allUpcomingCourses } = useStaticQuery<{
    allUpcomingCourses: DatoCmsSourceGraphQlResponse<LinkList>;
  }>(ALL_UPCOMING_COURSES_QUERY);

  const upcomingCourses = allUpcomingCourses.edges.find(({ node }) => {
    const lang = node.locale === 'pt-BR' ? 'br' : node.locale;
    return lang === i18n.language;
  });

  const upcomingCourseOptions = upcomingCourses?.node.urlList.map((course) => ({
    badge: 'new',
    description: course.description,
    externalLink: course.url,
    handleClick: (): void =>
      updateDataLayer({
        event: 'gaEvent',
        eventAction: 'click level 2',
        eventCategory: 'navbar',
        eventLabel: course.eventLabel,
      }),
    title: course.label,
  }));

  const courseOptions = [
    { code: 'courseWeb' },
    { code: 'courseUxui' },
    { code: 'courseData' },
    { code: 'courseCysec' },
    {
      code: 'shortCourseJs',
      badge: t('menu:menu.badges.free'),
      highlight: true,
      externalLink: EXTERNAL_LINKS.shortCourseJs,
    },
    {
      code: 'shortCourseUx',
      badge: t('menu:menu.badges.free'),
      highlight: true,
      externalLink: '/en/ux-shortcourse-start',
    },
    { code: 'allCourses', type: 'all' },
  ].map(({ code, type, badge, highlight, externalLink }) => ({
    badge,
    description: t(`menu:menu.courses.options.${code}.description`),
    handleClick: (): void => gaEvents.emitCourseEvent(code, showMenuMobile),
    highlight,
    title: t(`menu:menu.courses.options.${code}.title`),
    type,
    urlCode: code,
    externalLink,
  }));

  const campusOptions = [
    ...campusSelectorOptions,
    { code: 'allCampuses', type: 'all' },
  ].map(({ code, type, badge }) => ({
    title: t(`menu:menu.campuses.options.${code}.title`),
    description:
      type === 'all'
        ? t(`menu:menu.campuses.options.${code}.description`)
        : undefined,
    urlCode: code,
    handleClick: (): void => gaEvents.emitCampusEvent(code, showMenuMobile),
    type,
    badge,
  }));

  const whyIronhackOptions = [
    'financing',
    'careerServices',
    'faq',
    'alumni',
    'blog',
  ].map((code) => ({
    title: t(`menu:menu.whyIronhack.options.${code}.title`),
    description: t(`menu:menu.whyIronhack.options.${code}.description`),
    urlCode: code,
    handleClick: (): void =>
      gaEvents.emitWhyIronhackEvent(code, showMenuMobile),
  }));

  const forCompaniesOptions = [
    {
      title: t(`menu:menu.forCompanies.options.enterprise.title`),
      description: t(`menu:menu.forCompanies.options.enterprise.description`),
      urlCode: 'enterprise',
      handleClick: (): void =>
        gaEvents.emitCourseEvent('enterprise', showMenuMobile),
    },
  ];

  const getCourses = (ulClass?: string): JSX.Element => (
    <MenuItems
      itemClass={'course-item'}
      items={courseOptions}
      ulClass={ulClass}
    />
  );

  const getCampuses = (ulClass?: string): JSX.Element => {
    const { all, online, virtual, inPerson } = _.groupBy('type', campusOptions);
    const inPersonSorted = inPerson.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return (
      <ul className={ulClass}>
        <li className="campus-group">
          <span>{t('menu:menu.campuses.onlineLabel')}</span>
          <MenuItems itemClass={'campus-item'} items={online} />
        </li>
        <li className="campus-group">
          <span>{t('menu:menu.campuses.virtualLabel')}</span>
          <MenuItems itemClass={'campus-item'} items={virtual} />
        </li>
        <li className="campus-group">
          <span>{t('menu:menu.campuses.inPersonLabel')}</span>
          <MenuItems itemClass={'campus-item'} items={inPersonSorted} />
        </li>
        <MenuItems avoidUlWrapper items={all} />
      </ul>
    );
  };

  const getWhyIronhack = (ulClass?: string): JSX.Element => (
    <MenuItems
      itemClass={'why-ironhack-item'}
      items={whyIronhackOptions}
      ulClass={ulClass}
    />
  );

  const getForCompanies = (ulClass?: string): JSX.Element => (
    <MenuItems
      itemClass={'course-item'}
      items={forCompaniesOptions}
      ulClass={ulClass}
    />
  );

  const home = pageName === 'home';

  const classNameLanguageActive = (code: string): string =>
    classNames({ active: code === i18n.language });

  const flagMap = {
    br: BrFlag,
    de: DeFlag,
    en: UsFlag,
    es: EsFlag,
    fr: FrFlag,
    nl: NlFlag,
    pt: PtFlag,
  };

  const CurrentFlag = flagMap[i18n.language];

  const flag = (lng: string, code: string): JSX.Element => {
    const Flag = flagMap[code];
    return <Flag alt={lng} />;
  };

  const getLanguages = (ulClass?: string, mobile?: boolean): JSX.Element => (
    <ul className={ulClass}>
      {languages.map(({ language, code }) => (
        <li className="language-item" key={`${code}`}>
          {home || mobile ? (
            <a
              className={`language-links ${classNameLanguageActive(code)}`}
              href={getLinkByPageName(pageName, code)}
              onClick={(): void => gaEvents.emitLanguageSelectionEvent(code)}
            >
              {flag(language, code)}
              {language}
            </a>
          ) : (
            <div
              className="language-links"
              onClick={(): string => {
                gaEvents.emitLanguageSelectionEvent(code);
                return (location.href = getLinkByPageName(pageName, code));
              }}
            >
              {flag(language, code)}
              {language}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  function handleMobileClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    gaEvents.emitMobileMenuToggleEvent(!showMenuMobile);
    toggleShowMenuMobile(!showMenuMobile);
    toggleShowLanguages(false);
    toggleShowCoursesMobile(false);
  }

  function handleLanguageClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    event.preventDefault();
    gaEvents.emitLevelOneEvent('languages', 'click');
    toggleShowLanguages(!showLaguagesMobile);
  }
  function handleGoBackClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    event.preventDefault();
    gaEvents.emitMobileMenuBackEvent();
    toggleShowLanguages(false);
    toggleShowCoursesMobile(false);
    toggleShowWhyIronhackMobile(false);
    toggleShowForCompaniesMobile(false);
    toggleShowCampusesMobile(false);
  }

  function handleCoursesClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    event.preventDefault();
    gaEvents.emitLevelOneEvent('courses', 'click', true);
    toggleShowCoursesMobile(!showCoursesMobile);
  }

  function handleCampusesClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    event.preventDefault();
    gaEvents.emitLevelOneEvent('campuses', 'click', true);
    toggleShowCampusesMobile(!showCampusesMobile);
  }

  function handleWhyIronhackClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    event.preventDefault();
    gaEvents.emitLevelOneEvent('why ironhack', 'click', true);
    toggleShowWhyIronhackMobile(!showWhyIronhackMobile);
  }

  function handleForCompaniesClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    event.preventDefault();
    gaEvents.emitLevelOneEvent('for companies', 'click', true);
    toggleShowForCompaniesMobile(!showForCompaniesMobile);
  }

  const navbarClass = classNames('desktop', {
    isNotDarkBackground: !isDarkBackground,
  });

  const mobileMenu = classNames('mobile', {
    isNotDarkBackground:
      isDarkBackgroundMobile !== undefined
        ? !isDarkBackgroundMobile
        : !isDarkBackground,
  });

  const mobileOptionsClass = classNames({
    hide:
      showCoursesMobile ||
      showCampusesMobile ||
      showLaguagesMobile ||
      showWhyIronhackMobile ||
      showForCompaniesMobile,
  });

  const mobileGoBackClass = classNames({
    hideGoBack:
      !showCoursesMobile &&
      !showCampusesMobile &&
      !showLaguagesMobile &&
      !showWhyIronhackMobile &&
      !showForCompaniesMobile,
  });

  const wrapperClass = classNames({
    [className]: className.length > 0,
    isDarkBackground,
  });

  function getItemsClass(showItems) {
    return classNames({ hide: !showItems });
  }

  return (
    <Wrapper className={wrapperClass}>
      <a
        className={classNames({
          menuMobile: showMenuMobile,
          hide:
            showCoursesMobile ||
            showCampusesMobile ||
            showLaguagesMobile ||
            showWhyIronhackMobile ||
            showForCompaniesMobile,
        })}
        href={getLinkByPageName('home')}
        onClick={gaEvents.emitHomeLogoEvent}
      >
        <IronhackLogo colorScheme={'electricBlue'} size={logoSize} />
      </a>
      <Navbar className={navbarClass}>
        {showCourses && (
          <Select
            dark={isDarkBackground}
            onMouseEnter={(): void =>
              gaEvents.emitLevelOneEvent('courses', 'hover')
            }
          >
            {t('menu:menu.courses.title')}
            <ChevronDownIcon
              color={isDarkBackground ? 'white' : 'darkBlue.100'}
            />
            <Box as="ul">
              <Stack
                direction="row"
                divider={
                  <StackDivider
                    borderColor={config.palette.darkBlueTransparent('0.05')}
                  />
                }
                spacing={0}
              >
                {getCourses()}
                <Box as="ul" minW="32rem" mt={2}>
                  <Text
                    color="orange.100"
                    fontWeight="normal"
                    px={3}
                    textStyle="body6"
                  >
                    {upcomingCourses.node.title}
                  </Text>
                  <MenuItems
                    avoidUlWrapper
                    itemClass={'course-item'}
                    items={upcomingCourseOptions}
                  />
                </Box>
              </Stack>
            </Box>
          </Select>
        )}
        {showCampuses && (
          <Campuses
            dark={isDarkBackground}
            onMouseEnter={(): void =>
              gaEvents.emitLevelOneEvent('campuses', 'hover')
            }
          >
            {t('menu:menu.campuses.title')}
            <ChevronDownIcon
              color={isDarkBackground ? 'white' : 'darkBlue.100'}
            />
            {getCampuses()}
          </Campuses>
        )}
        {showWhyIronhack && (
          <Select
            dark={isDarkBackground}
            onMouseEnter={(): void =>
              gaEvents.emitLevelOneEvent('why ironhack', 'hover')
            }
          >
            {t('menu:menu.whyIronhack.title')}
            <ChevronDownIcon
              color={isDarkBackground ? 'white' : 'darkBlue.100'}
            />
            {getWhyIronhack()}
          </Select>
        )}
        {showCompanies && (
          <Select
            dark={isDarkBackground}
            onMouseEnter={(): void =>
              gaEvents.emitLevelOneEvent('for companies', 'hover')
            }
          >
            {t('menu:menu.forCompanies.title')}
            <ChevronDownIcon
              color={isDarkBackground ? 'white' : 'darkBlue.100'}
            />
            {getForCompanies()}
          </Select>
        )}
        {showLanguages && (
          <Languages
            dark={isDarkBackground}
            onMouseEnter={(): void =>
              gaEvents.emitLevelOneEvent('languages', 'hover')
            }
          >
            <li>
              <CurrentFlag alt={i18n.language} />
              {getLanguages()}
            </li>
          </Languages>
        )}
        <Button
          as={Link}
          color={isDarkBackground ? 'white' : 'darkBlue.100'}
          colorScheme="secondary"
          href="https://admission.my.ironhack.com"
          isExternal
          mr={3}
          rightIcon={<ExternalLinkIcon />}
          textDecoration="none"
          variant="link"
        >
          <Text textStyle="body5">{t('menu:menu.myApplication')}</Text>
        </Button>
        {showApplicationCta && (
          <LinkButton
            href={getLinkByPageName('allCourses/application')}
            onClick={gaEvents.emitCtaEvent}
            // HACK: in line style hack while transitioning to Chakra
            style={{
              color: isDarkBackground ? '#FFF' : '#212353',
              borderColor: isDarkBackground ? '#FFF' : '#212353',
            }}
          >
            {t('menu:menu.cta')}
          </LinkButton>
        )}
      </Navbar>
      {showMenuMobile ? (
        <MobileOptions>
          <div className={mobileGoBackClass}>
            <article onClick={handleGoBackClick}>
              <ArrowRight />
              {t('menu:menu.mobile.back')}
            </article>
            <Cross onClick={handleMobileClick} />
          </div>
          <ul className={mobileOptionsClass}>
            {showCourses && (
              <li onClick={handleCoursesClick}>
                {t('menu:menu.courses.title')} <ArrowLeft />
              </li>
            )}
            {showCampuses && (
              <li onClick={handleCampusesClick}>
                {t('menu:menu.campuses.title')} <ArrowLeft />
              </li>
            )}
            {showWhyIronhack && (
              <li onClick={handleWhyIronhackClick}>
                {t('menu:menu.whyIronhack.title')} <ArrowLeft />
              </li>
            )}
            {showCompanies && (
              <li onClick={handleForCompaniesClick}>
                {t('menu:menu.forCompanies.title')} <ArrowLeft />
              </li>
            )}
            {showLanguages && (
              <li onClick={handleLanguageClick}>
                {t('menu:menu.mobile.language')} <ArrowLeft />
              </li>
            )}
            <ButtonApplyNowMobile
              href={getLinkByPageName('allCourses/application', i18n.language)}
              onClick={gaEvents.emitCtaEvent}
            >
              {t('menu:menu.cta')}
            </ButtonApplyNowMobile>
          </ul>
          {showCourses && (
            <>
              <div
                className={`options-title ${getItemsClass(showCoursesMobile)}`}
              >
                {t('menu:menu.courses.title')}
              </div>
              <Stack
                as="section"
                divider={
                  <StackDivider
                    borderColor={config.palette.darkBlueTransparent('0.05')}
                  />
                }
                overflowX="hidden"
                overflowY="scroll"
              >
                {getCourses(getItemsClass(showCoursesMobile))}
                <Box
                  as="ul"
                  className={getItemsClass(showCoursesMobile)}
                  mt={2}
                >
                  <Text
                    color="orange.100"
                    fontWeight="normal"
                    px={3}
                    textStyle="body6"
                  >
                    {upcomingCourses.node.title}
                  </Text>
                  <MenuItems
                    avoidUlWrapper
                    itemClass={'course-item'}
                    items={upcomingCourseOptions}
                  />
                </Box>
              </Stack>
            </>
          )}
          {showCampuses && (
            <>
              <div
                className={`options-title ${getItemsClass(showCampusesMobile)}`}
              >
                {t('menu:menu.campuses.title')}
              </div>
              {getCampuses(getItemsClass(showCampusesMobile))}
            </>
          )}
          {showWhyIronhack && (
            <>
              <div
                className={`options-title ${getItemsClass(
                  showWhyIronhackMobile
                )}`}
              >
                {t('menu:menu.whyIronhack.title')}
              </div>
              {getWhyIronhack(getItemsClass(showWhyIronhackMobile))}
            </>
          )}
          {showCompanies && (
            <>
              <div
                className={`options-title ${getItemsClass(
                  showForCompaniesMobile
                )}`}
              >
                {t('menu:menu.forCompanies.title')}
              </div>
              {getForCompanies(getItemsClass(showForCompaniesMobile))}
            </>
          )}
          {showLanguages && (
            <>
              <div
                className={`options-title ${getItemsClass(showLaguagesMobile)}`}
              >
                {t('menu:menu.languages.title')}
              </div>
              {getLanguages(getItemsClass(showLaguagesMobile), true)}
            </>
          )}
        </MobileOptions>
      ) : (
        <Flex direction={'row'} display={['flex', null, 'none']}>
          <Button
            alignSelf={'flex-end'}
            as={Link}
            href="https://admission.my.ironhack.com"
            isExternal
            // mr={2}
            rightIcon={<ExternalLinkIcon />}
            textDecoration="none"
            variant="link"
          >
            <Text textStyle="body4">Login</Text>
          </Button>
          <MobileMenu className={mobileMenu} onClick={handleMobileClick}>
            <MenuIcon />
          </MobileMenu>
        </Flex>
      )}
    </Wrapper>
  );
};

export default NavBar;
