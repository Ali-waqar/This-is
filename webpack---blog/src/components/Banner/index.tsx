import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Center, Link, Stack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import * as gaEvents from './ga_events';

const linkMap = {
  apprenticeship: {
    en: 'http://www2.ironhack.com/fr/apprenticeship',
    fr: 'http://www2.ironhack.com/fr/apprenticeship',
  },
  covid: {
    br: '/br/novidades/transicao-para-educacao-remota',
    de: '/de/neuigkeiten/ubergang_zur_remote_lernerfahrung',
    en: '/en/news/transition-to-remote-education',
    es: '/es/noticias/transicion-aprendizaje-en-remoto',
    fr: '/fr/news/transition-to-remote-education',
    nl: '/nl/nieuws/overstap-naar-remote-educatie',
    pt: '/pt/novidades/transitar-para-educacao-remota',
  },
  hamburg: {
    en: 'https://www2.ironhack.com/en/NIT#form',
    de: 'https://www2.ironhack.com/de/NIT#form',
  },
  isa: {
    es: 'https://www2.ironhack.com/pago-diferido?utm_source=organic&utm_medium=website&utm_campaign=21-06_GLO_eur_GLO_apps_financing-options&utm_content=deferred-tuition',
    en: 'https://www2.ironhack.com/deferred-tuition?utm_source=organic&utm_medium=website&utm_campaign=21-06_GLO_eur_GLO_apps_financing-options&utm_content=deferred-tuition',
    nl: 'https://www2.ironhack.com/deferred-tuition?utm_source=organic&utm_medium=website&utm_campaign=21-06_GLO_eur_GLO_apps_financing-options&utm_content=deferred-tuition',
    pt: 'https://www2.ironhack.com/deferred-tuition?utm_source=organic&utm_medium=website&utm_campaign=21-06_GLO_eur_GLO_apps_financing-options&utm_content=deferred-tuition',
    default:
      'https://www2.ironhack.com/deferred-tuition?utm_source=organic&utm_medium=website&utm_campaign=21-06_GLO_eur_GLO_apps_financing-options&utm_content=deferred-tuition',
  },
  londonWhitepaper: {
    en: 'http://www2.ironhack.com/uk-guide-retrain-in-tech',
  },
  stap: {
    en: 'https://ironhack.typeform.com/stapnovember',
    nl: 'https://ironhack.typeform.com/stapnovember',
  },
};

export type BannerType =
  | 'apprenticeship'
  | 'covid'
  | 'hamburg'
  | 'isa'
  | 'londonWhitepaper'
  | 'stap';
type PropsType = {
  type: BannerType;
};

const Banner = (props: PropsType): React.ReactElement | null => {
  const {
    t,
    i18n: { language },
  } = useTranslation(['banner']);
  const { type } = props;
  const url =
    t(`banner.${type}.url`, { defaultValue: null }) ||
    linkMap[type]?.[language];

  const onClick = (): void => gaEvents.emitBannerEvent(type);

  if (!Object.keys(linkMap[type]).includes(language)) return null;

  return (
    <Center
      as="section"
      bg="yellow.100"
      id="banner"
      mx="auto"
      px={[3, null, null, 0]}
      py={1}
    >
      <Stack
        align="center"
        direction={['column', null, 'row']}
        spacing={[1.5, null, 4]}
      >
        <Text
          textAlign={['center', null, 'left']}
          textStyle={['body4', null, 'body3']}
        >
          <Trans
            components={[
              type === 'apprenticeship' ? (
                <strong>Free Apprenticeship Program</strong>
              ) : null,
            ]}
            defaults={t(`banner.${type}.description`)}
            i18nKey={t(`banner.${type}.description`)}
          />
        </Text>
        {url && (
          <Button
            as={Link}
            colorScheme="secondary"
            href={url}
            isExternal={url.startsWith('http')}
            onClick={onClick}
            rightIcon={<ArrowForwardIcon />}
            size="xs"
            width={['100%', null, 'auto']}
          >
            {t(`banner.${type}.link`)}
          </Button>
        )}
      </Stack>
    </Center>
  );
};

export default Banner;
