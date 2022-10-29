import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Link,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { StructuredText, renderRule } from 'react-datocms';
import { isLink, Link as LinkNode } from 'datocms-structured-text-utils';

import { windowDefined } from '../../lib/utils';
import { usePageContext } from '../../context/PageContext';
import { loadCookieBotScript } from '../../lib/cookiebot';

export const CookieBanner = (): React.ReactElement => {
  const { cookieBanner } = usePageContext();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const shouldTextBeCollapsed = useBreakpointValue({
    base: true,
    lg: false,
  });
  const [isTextCollapsed, setIsTextCollapsed] = useState<boolean>(
    shouldTextBeCollapsed
  );
  const [cookiebotScriptLoaded, setCookiebotScriptLoaded] = useState(false);

  const isBrowser = windowDefined();
  const hasConsentCookie =
    isBrowser && /^(.*;)?\s*CookieConsent\s*=/.test(document.cookie);

  /*
   * Cookiebot.consent.stamp seems to be the best way to check if consent is given.
   * By checking the cookie we avoid having to load the script on every page.
   */
  const showBanner =
    !hasConsentCookie ||
    (isBrowser && window.Cookiebot?.consent?.stamp === '0');

  const handleHiddenTextClick = (): void => {
    if (isTextCollapsed) {
      setIsTextCollapsed(false);
    }
  };

  const handleRejectClick = (): void => {
    onClose();
    // HACK
    document.cookie = 'CookieConsent={}';
    window.Cookiebot.submitCustomConsent(false, false, false);
  };

  const handleAcceptClick = (): void => {
    onClose();
    // HACK
    document.cookie = 'CookieConsent={}';
    window.Cookiebot.submitCustomConsent(true, true, true);
  };

  const handleCustomizeClick = (): void => {
    onClose();
    window.Cookiebot.renew();
  };

  const onCookiebotBannerLoaded = (): void => {
    window.Cookiebot.deleteConsentCookie();
  };

  const onCookiebotInit = (): void => {
    if (window.Cookiebot.consent.stamp === '0') {
      window.Cookiebot.submitCustomConsent(false, false, false);
      window.addEventListener('CookiebotOnLoad', onCookiebotBannerLoaded);
    }
  };

  useEffect(() => {
    /*
     * This is a hack to avoid the Cookiebot dialog to show as soon as the
     * script is loaded.
     * It sends a fake consent before the dialog is rendered to prevent it from
     * showing but makes sure to cleanup the fake consent when we actually want
     * to show the dialog.
     */
    window.addEventListener('CookiebotOnDialogInit', onCookiebotInit);

    loadCookieBotScript(() => {
      setCookiebotScriptLoaded(true);
    });

    return (): void => {
      window.removeEventListener('CookiebotOnDialogInit', onCookiebotInit);
      window.removeEventListener('CookiebotOnLoad', onCookiebotBannerLoaded);
    };
  });

  useEffect(() => {
    setIsTextCollapsed(shouldTextBeCollapsed);
  }, [shouldTextBeCollapsed]);

  useEffect(() => {
    if (showBanner) onOpen();
  }, [showBanner, onOpen]);

  if (!cookiebotScriptLoaded || !cookieBanner) return null;

  return (
    <Drawer
      closeOnEsc={false}
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom"
    >
      <DrawerContent bg="denim.100">
        <DrawerBody
          display="flex"
          flexDirection={['column', null, null, 'row']}
          justifyContent="space-between"
          maxW={[null, null, null, '1296px']}
          mx={[null, null, null, 'auto']}
          px={[3, null, null, 0]}
          py={[2, null, null, 3]}
        >
          <Box>
            <Text
              color="white"
              css={{
                // Props to https://stackoverflow.com/a/66024788
                '-webkit-mask-image': isTextCollapsed
                  ? 'linear-gradient(180deg, #000 60%, transparent)'
                  : 'none',
              }}
              cursor={isTextCollapsed ? 'pointer' : 'auto'}
              noOfLines={isTextCollapsed ? 3 : 100}
              onClick={handleHiddenTextClick}
              overflowY="hidden"
              textStyle="body5"
            >
              <StructuredText
                customRules={[
                  renderRule<LinkNode>(isLink, ({ node, children, key }) => (
                    <Link href={node.url} isExternal key={key}>
                      {children}
                    </Link>
                  )),
                ]}
                data={cookieBanner.mainText}
              />
            </Text>
            <Button mt={2} onClick={handleCustomizeClick} variant="unstyled">
              <Link textStyle="body5">{cookieBanner.customizeButton}</Link>
            </Button>
          </Box>
          <Flex
            alignItems="flex-end"
            direction="row"
            ml={[0, null, null, 3]}
            mt={[4, null, null, 0]}
          >
            <Button
              colorScheme="white"
              onClick={handleRejectClick}
              variant="outline"
            >
              {cookieBanner.rejectButton}
            </Button>
            <Button ml={2} onClick={handleAcceptClick}>
              {cookieBanner.acceptButton}
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
