import { createGlobalStyle, CSSProp } from 'styled-components';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import GelionSemiBold from '../../fonts/Gelion-SemiBold.woff2';
import GelionRegular from '../../fonts/Gelion-Regular.woff2';

export default createGlobalStyle<{ extend?: CSSProp }>`
  @font-face {
    font-family: Gelion;
    src: url("${GelionSemiBold}") format('woff2');
    font-style: normal;
    font-weight: 600;
    font-display: swap
  }
  @font-face {
    font-family: Gelion;
    src: url("${GelionRegular}") format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap
  }
  @font-face {
    font-family: Gelion-SemiBold;
    font-style: normal;
    font-weight: bold;
    src: url("${GelionSemiBold}") format('woff2');
    font-display: swap
  }
  @font-face {
    font-family: Gelion-Regular;
    font-style: normal;
    font-weight: bold;
    src: url("${GelionRegular}") format('woff2');
    font-display: swap
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'Roboto';
    font-display: swap
    font-size: 10px;

  html {
    body {
      // hide cookie policy tag
      > div.cc-revoke.cc-bottom {
        display: none;
      }
    }
  }

  ${(props): CSSProp<any> | undefined => props.extend}
`;
