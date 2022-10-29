const hexStringToRGB = (colort: string) => {
  const result = colort.match(/([\da-f]{2})([\da-f]{2})([\da-f]{2})/i) || [
    '',
    'FF',
    'FF',
    'FF',
  ];
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
    result[3],
    16
  )}`;
};

export default {
  fonts: {
    monoFont: 'Gelion-SemiBold',
    normal: 'Roboto',
  },
  palette: {
    applicationProcess: {
      green01: 'rgb(13, 139, 159, 0.1)',
      green02: 'rgb(13,139,159, 0.25)',
      green03: 'rgb(158,209,217)',
      green04: 'rgb(122,191,202)',
      green05: 'rgb(0,139,156, 0.8)',
    },
    blueGreen: '#0d8b9f',
    blueGreenTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.blueGreen)}, ${alpha})`;
    },
    boxShadow: 'rgba(0, 0, 0, 0.08)',
    boxShadowHover: 'rgba(0, 0, 0, 0.16)',
    cyan: '#008bbb',
    cyanTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.cyan)}, ${alpha})`;
    },
    darkBlue: '#2d354c',
    darkBlueTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.darkBlue)}, ${alpha})`;
    },
    secondaryDarkBlue: '#1e2334',
    electricBlue: '#EAF9FF',
    electricBlueHover: '#D5F3FE',
    errorRed: '#ec3a35',
    errorRedBackground: '#fdebeb',
    errorRedTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.errorRed)}, ${alpha})`;
    },
    green: '#008b9c',
    greenTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.green)}, ${alpha})`;
    },
    lightGreen: '#E5F3F5',
    lightGreenHover: '#CCE8EB',
    grey: '#b5c1e5',
    greyTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.grey)}, ${alpha})`;
    },
    secondaryGray: '#ABAEB7',
    secondaryGraylight(alpha: string): string {
      return `rgba(${hexStringToRGB(this.secondaryGray)}, ${alpha})`;
    },
    thirdGray: '#818694',
    thirdGrayTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.thirdGray)}, ${alpha})`;
    },
    fourthGray: '#686e7e',
    lightBlue: '#2dc5fa',
    lightBlueTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.lightBlue)}, ${alpha})`;
    },
    lightBlueActive: '#00abf2',
    lightBlueActiveTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.lightBlueActive)}, ${alpha})`;
    },
    lightBlueHover: '#00b4ff',
    lightBlueHoverTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.lightBlueHover)}, ${alpha})`;
    },
    lightGray: '#2d354c',
    lightGrayTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.lightGray)}, ${alpha})`;
    },
    grayBackground: '#f8f8f8',
    orange: '#f49102',
    orangeTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.orange)}, ${alpha})`;
    },
    black: '#000',
    blackTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.black)}, ${alpha})`;
    },
    secondaryBlack: '#1E2434',
    shadowGrey: '#b5c1e6',
    shadowGreyTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.shadowGrey)}, ${alpha})`;
    },
    skyBlue: '#32c3ff',
    skyBlueTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.skyBlue)}, ${alpha})`;
    },
    softGray: '#575d70',
    softGrayTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.softGray)}, ${alpha})`;
    },
    tableHeaderBackground: '#fcfcfc',
    testimonialBlue: '#f3f8fc',
    testimonialYellow: 'rgba(250, 172, 6, .1)',
    white: '#fff',
    whiteTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.white)}, ${alpha})`;
    },
    yellow: '#FFD26F',
    yellowHover: '#FFCC5C',
    yellowTransparent(alpha: string): string {
      return `rgba(${hexStringToRGB(this.yellow)}, ${alpha})`;
    },
  },
  borderRadius: '0.6rem',
  resolutions: {
    desktopM: '1440px',
    desktopS: '1280px',
    mobileL: '767px',
    mobileM: '360px',
    mobileS: '320px',
    tablet: '768px',
  },
};
