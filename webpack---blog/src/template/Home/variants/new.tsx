import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import HomeWhyIronhack from '../../../containers/HomeWhyIronhack';
import HomeCourses from '../../../containers/HomeCourses';
import StudentCompanies from '../../../components/StudentCompanies';
import BlogArticlesSample from '../../../components/BlogArticlesSample';
import HomeHeader from '../../../containers/HomeHeader';
import HomeHeaderApply from '../../../containers/HomeHeader/experiments/HomeHeaderApply';
import Navbar from '../../../components/NavBar';
import HexagonBackground from '../../../components/HexagonBackground';
import CampusList from '../../../components/CampusList';
import Partner from '../../../components/Partner';
import Footer from '../../../components/Footer';
import { PageContext } from '../../../context/PageContext';
import useScroll from '../../../hooks/useScroll';
import { processDatoCmsAssests } from '../../../services/datoUtilities';
import { TDatoCmsGraphQlAssets } from '../../../types/datocms';
import Banner from '../../../components/Banner';
import useUserLocation from '../../../hooks/useUserLocation';
import SnackBar from '../../../components/SnackBar';
import { useExperimentVariant } from '../../../lib/experiments';

type HomeData = {
  allDatoCmsAssetsByPage: TDatoCmsGraphQlAssets;
};

type HomeProps = PageProps<HomeData, PageContext>;

const Home = (props: HomeProps): ReactElement => {
  const { pageName, cohorts } = props.pageContext;
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const variant = useExperimentVariant('template');
  const [scrollToCourses, coursesRef] = useScroll();
  const assets = processDatoCmsAssests(props.data.allDatoCmsAssetsByPage);
  const { userLocation } = useUserLocation();
  const isEnglishInUs = userLocation.country === 'US' && language === 'en';

  return (
    <>
      {userLocation?.country === 'FR' && <Banner type="apprenticeship" />}
      {userLocation?.country === 'NL' && <Banner type="stap" />}
      {userLocation?.country === 'DE' && <Banner type="hamburg" />}
      {isEnglishInUs && variant ? (
        <HomeHeaderApply
          cohorts={cohorts}
          data={props.data}
          pageName={pageName}
        />
      ) : (
        <>
          <HexagonBackground color="electricBlue.10" />
          <Box
            maxW={[null, null, null, '1296px']}
            mb={[null, null, null, 6]}
            mx={[null, null, 4, 'auto']}
          >
            <Navbar pageName={pageName} />
          </Box>
          <HomeHeader
            image={assets.headerdesktop}
            mb={[null, null, null, 6]}
            scrollToTarget={scrollToCourses}
          />
        </>
      )}
      <SnackBar />
      <Box
        maxW={[null, null, null, '1296px']}
        mb={[3, null, null, 6]}
        mx={[null, null, 4, 'auto']}
      >
        <StudentCompanies />
      </Box>
      <HomeWhyIronhack images={assets} />
      <HomeCourses mb={[6, null, null, 7]} ref={coursesRef} />
      <Box
        maxW={[null, null, null, '1296px']}
        mb={[null, null, null, 6]}
        mx={[null, null, 4, 'auto']}
      >
        <CampusList cohorts={cohorts} />
      </Box>
      <Box
        maxW={[null, null, null, '1296px']}
        mb={[null, null, null, 6]}
        mx={[null, null, 4, 'auto']}
      >
        <BlogArticlesSample />
      </Box>
      <Box
        maxW={[null, null, null, '1296px']}
        mb={[null, null, null, 6]}
        mx={[null, null, 4, 'auto']}
      >
        <Partner
          subtitle={t('home:home.hireTalent.description')}
          title={t('home:home.hireTalent.title')}
          viewButton
        />
      </Box>
      <Footer page="" showLinks />
    </>
  );
};

export default Home;
