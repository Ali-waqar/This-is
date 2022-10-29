import React from 'react';
import {
  Box,
  BoxProps,
  Flex,
  Text,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

import { TDatoCmsImage } from '../../types/datocms';
import CourseReport from '../../../static/assets/footer/course-report.svg';
import SwitchUp from '../../../static/assets/footer/switchup.svg';
import CourseCampusSelector from '../../components/CourseCampusSelector';
import { getLinkByPageName, getCourseCampusLink } from '../../lib/links';

type Props = BoxProps & {
  scrollToTarget: () => void;
  image: TDatoCmsImage;
};

function Header(props: Props): JSX.Element {
  const { image, scrollToTarget, ...boxProps } = props;
  const { t, i18n } = useTranslation(['home', 'menu']);
  const img = useBreakpointValue([null, null, null, image]);

  const handleSubmission = (course: string, campus: string): void => {
    if (!course && !campus) {
      return scrollToTarget();
    }
    if (!course) {
      window.location.href = getLinkByPageName(campus, i18n.language);
      return;
    }
    if (!campus) {
      window.location.href = getLinkByPageName(course, i18n.language);
      return;
    }
    window.location.href = getCourseCampusLink(course, campus, i18n.language);
  };

  return (
    <Flex
      direction={['column', null, null, 'row']}
      justifyContent={[null, null, null, 'space-between']}
      m={[null, null, null, 'auto']}
      maxW={[null, null, null, '1296px']}
      px={[3, null, null, 0]}
      {...boxProps}
    >
      <Flex direction="column" maxWidth={[null, null, null, '62.4rem']}>
        <Text
          as="h1"
          color="darkBlue.100"
          dangerouslySetInnerHTML={{
            __html: t('home:home.newMainHeadline.title'),
          }}
          fontSize={['3.8rem', null, null, '5.6rem']}
          sx={{ '&>span': { color: 'electricBlue.100' } }}
          textStyle="jumbo"
        />
        <Text
          color="darkBlue.64"
          maxWidth={[null, null, null, '60rem']}
          mb={[3, null, null, 4]}
          mt={2}
          textStyle="body3"
        >
          {t('home:home.newMainHeadline.subtitle')}
        </Text>
        <CourseCampusSelector onSubmit={handleSubmission} />
        <Flex direction={['column', null, null, 'row']}>
          <HStack mt={6} spacing={2}>
            <SwitchUp height={43} width="auto" />
            <CourseReport height={43} width="auto" />
            <Flex direction="column" maxWidth={[null, null, null, '17.8rem']}>
              <Text textStyle="body1">
                {t('home:home.stats.reviews.score')}
              </Text>
              <Text mt={0.5} textStyle="body6">
                {t('home:home.stats.reviews.description')}
              </Text>
            </Flex>
          </HStack>
          {/* Removing per https://app.clickup.com/t/1ja5zxq */}
          {/* <Flex
            align-items="center"
            maxWidth={[null, null, null, '25rem']}
            ml={[0, null, null, 4]}
            mt={[2, null, null, 6]}
          >
            <Text textStyle="title1">
              {t('home:home.stats.placement.rate')}
            </Text>
            <Flex direction="column" ml={1}>
              <Text textStyle="body2">
                {t('home:home.stats.placement.subject')}
              </Text>
              <Text mt={0.5} textStyle="body6">
                {t('home:home.stats.placement.description')}
              </Text>
            </Flex>
          </Flex> */}
        </Flex>
      </Flex>
      <Box
        borderRadius="card"
        height="100%"
        mt={[3, null, null, 0]}
        overflow="hidden"
        width={['100%', null, null, '51.2rem']}
      >
        {img && (
          <GatsbyImage
            alt={img.alt}
            image={img.gatsbyImageData}
            title={img.title}
          />
        )}
      </Box>
    </Flex>
  );
}

export default Header;
