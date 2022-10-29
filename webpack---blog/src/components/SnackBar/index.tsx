import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
  Box,
  BoxProps,
  Button,
  Center,
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { emitFindMoreEvent } from './ga_events';
import { EXTERNAL_LINKS } from '../../utils/constants/links';

const SnackBar = (boxProps: BoxProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <LinkBox onClick={emitFindMoreEvent}>
      <Flex
        bgColor="green.10"
        borderRadius={[0, null, null, 'card']}
        justify="space-between"
        maxW={[null, null, null, '1296px']}
        mx="auto"
        p={1}
        {...boxProps}
      >
        <Center>
          <Box
            bgColor="green.100"
            borderRadius="card"
            color="white"
            px={1}
            py={1.5}
          >
            <Text color="white" textStyle="body4">
              {t(`course-web-dev-rmt:snackbar.status`).toUpperCase()}
            </Text>
          </Box>
          <Text color="darkBlue.100" ml={4} textStyle="body4">
            <Trans
              components={[
                <Text as="span" color="green.100" fontWeight="bold">
                  Free Javascript Course
                </Text>,
              ]}
              defaults="Test out your coding skills on our new <0>Free Javascript Course</0> and see how you can also be a developer"
              i18nKey={t(`course-web-dev-rmt:snackbar.description`)}
            />
          </Text>
        </Center>
        <LinkOverlay href={EXTERNAL_LINKS.shortCourseJs}>
          <ChevronRightIcon
            boxSize={20}
            color="darkBlue.100"
            display={['inline', null, 'none']}
            my="auto"
          />
          <Button
            colorScheme="quaternary"
            display={['none', null, 'inline-block']}
            mr={4}
            variant="link"
            w="auto"
          >
            {t(`course-web-dev-rmt:snackbar.linkText`)}
          </Button>
        </LinkOverlay>
      </Flex>
    </LinkBox>
  );
};

export default SnackBar;
