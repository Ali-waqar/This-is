import React from 'react';
import _ from 'lodash/fp';
import {
  Box,
  BoxProps,
  Flex,
  Link,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { GatsbyImage } from 'gatsby-plugin-image';

import { TDatoCmsImage } from '../../types/datocms';
import { getLinkByPageName } from '../../lib/links';
import { ArrowRight } from '../../icons';

type ReasonName =
  | 'financial'
  | 'community'
  | 'outcomes'
  | 'curriculum'
  | 'career'
  | 'network';

type Props = BoxProps & {
  images: Partial<Record<ReasonName, TDatoCmsImage>>;
};

type ReasonProps = {
  reasonName: ReasonName;
  image?: TDatoCmsImage;
};

const reasonConfigs = {
  career: {
    header: {
      width: '21.8rem',
      mt: [3, null, null, 4],
      mb: [3, null, null, 3],
    },
  },
  community: {
    header: {
      width: '11.2rem',
      mt: [null, null, null, 5],
      mb: [3, null, null, 5],
    },
  },
  curriculum: {
    header: {
      mt: [null, null, null, 4],
      mb: [3, null, null, 5],
    },
  },
  financial: {
    header: {
      width: '27.8rem',
      mt: [null, null, null, 5],
      mb: [2, null, null, 3],
    },
  },
  network: {
    header: {
      width: '30rem',
      mt: [null, null, null, 2],
      mb: [1, null, null, 2],
    },
  },
  outcomes: {
    header: {
      width: '30.9rem',
      mb: [null, null, null, 1],
    },
  },
};

const ctaTargets: Partial<Record<ReasonName, string>> = {
  career: 'careerServices',
  community: 'alumni',
  curriculum: 'campusRmt',
  financial: 'financing',
  network: 'enterprise',
  outcomes: 'careerServices',
};

const reasonsOrder: ReasonName[] = [
  'financial',
  'community',
  'outcomes',
  'curriculum',
  'career',
  'network',
];

function ReasonFeature(props: ReasonProps): JSX.Element {
  const { reasonName, image } = props;
  const { t } = useTranslation(['home']);
  const copiesIndex = _.findIndex(_.eq(reasonName), reasonsOrder);
  const copies: Record<string, string> = t(
    `home.whyironhack.0${copiesIndex + 1}`,
    {
      returnObjects: true,
    }
  );
  const config = reasonConfigs[reasonName];

  return (
    <Flex
      direction="column"
      mb={[null, null, null, 4]}
      width={['100%', null, null, '40rem']}
    >
      {image ? (
        <Box {...config.header}>
          <GatsbyImage
            alt={image.alt}
            image={image.gatsbyImageData}
            title={image.title}
          />
        </Box>
      ) : (
        <Text {...config.header} textStyle="title2">
          {copies.header}
        </Text>
      )}
      <Text textStyle="body2">{copies.title}</Text>
      <Text color="darkBlue.80" mt={1.5} textStyle="body4">
        {copies.description}
      </Text>
      {copies.cta && (
        <Link
          alignItems="center"
          fontWeight="700"
          href={getLinkByPageName(_.getOr('', reasonName, ctaTargets))}
          mt={2}
          textStyle="body4"
        >
          {copies.cta}
          <ArrowRight boxSize="12px" color="electricBlue.100" ml={1} />
        </Link>
      )}
    </Flex>
  );
}

function WhyIronhack(props: Props): JSX.Element {
  const { images, ...boxProps } = props;
  const { t } = useTranslation(['home']);

  return (
    <Flex
      {...boxProps}
      background={
        'linear-gradient(240.24deg, rgba(253, 167, 54, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(120.01deg, rgba(45, 197, 250, 0.12) 5.51%, rgba(86, 76, 255, 0.08) 100%);'
      }
      pb={[4, null, null, 0]}
    >
      <Flex
        direction="column"
        m={[null, null, null, 'auto']}
        maxW={[null, null, null, '1296px']}
        px={[3, null, null, 0]}
      >
        <Text mb={[4, null, null, 1]} mt={6} textStyle="title1">
          {t('home:home.whyironhack.title')}
        </Text>
        <Stack
          direction={['column', null, null, 'row']}
          divider={
            <StackDivider
              borderColor="white"
              borderWidth={['1px', null, null, '0px']}
            />
          }
          spacing={3}
        >
          {_.take(3, reasonsOrder).map((reasonName) => (
            <ReasonFeature
              image={images[reasonName]}
              key={reasonName}
              reasonName={reasonName}
            />
          ))}
        </Stack>
        <StackDivider
          borderColor="white"
          borderWidth="1px"
          mt={[2, null, null, 0]}
        />
        <Stack
          direction={['column', null, null, 'row']}
          divider={
            <StackDivider
              borderColor="white"
              borderWidth={['1px', null, null, '0px']}
            />
          }
          spacing={3}
        >
          {_.takeLast(3, reasonsOrder).map((reasonName) => (
            <ReasonFeature
              image={images[reasonName]}
              key={reasonName}
              reasonName={reasonName}
            />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}

export default WhyIronhack;
