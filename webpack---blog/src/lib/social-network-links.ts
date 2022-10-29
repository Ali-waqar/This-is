import { currentLanguage } from './links';

interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  [key: string]: string;
}

const socialNetworkLinks: { [key: string]: SocialLinks } = {
  nl: {
    facebook: 'https://www.facebook.com/ironhackAMS/',
    twitter: 'https://twitter.com/ironhackams',
    instagram: 'https://www.instagram.com/ironhackams/'
  },
  de: {
    facebook: 'https://www.facebook.com/ironhackBER/',
    twitter: 'https://twitter.com/IronhackBER',
    instagram: 'https://www.instagram.com/ironhackber/'
  },
  pt: {
    facebook: 'https://www.facebook.com/Ironhacklis/',
    twitter: 'https://twitter.com/IronhackLIS',
    instagram: 'https://www.instagram.com/ironhacklisb'
  },
  br: {
    facebook: 'https://www.facebook.com/ironhackSAO/',
    twitter: 'https://twitter.com/ironhackSAO',
    instagram: 'https://www.instagram.com/ironhacksao/'
  },
  fr: {
    facebook: 'https://www.facebook.com/IronhackPAR/',
    twitter: 'https://twitter.com/IronhackPAR',
    instagram: 'https://www.instagram.com/ironhackpar/'
  },
  default: {
    facebook: 'https://www.facebook.com/theironhack',
    twitter: 'https://twitter.com/ironhack',
    instagram: 'https://www.instagram.com/ironhack/'
  }
};

const getSocialNetworkLink = (socialNetwork: string): string => {
  const language = currentLanguage() || 'en';

  return (
    (socialNetworkLinks[language] &&
      socialNetworkLinks[language][socialNetwork]) ||
    socialNetworkLinks.default[socialNetwork]
  );
};

export { getSocialNetworkLink };
