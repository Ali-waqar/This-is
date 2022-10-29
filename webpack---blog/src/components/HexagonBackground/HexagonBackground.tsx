import React from 'react';
import { Icon, IconProps, useBreakpointValue } from '@chakra-ui/react';

interface BackgroundProps {
  color: string;
}

const SmallHexagon = (props: IconProps): JSX.Element => (
  <Icon height="173" viewBox="0 0 257 173" width="257" {...props}>
    <path
      clipRule="evenodd"
      d="M99.8244 31.0415C101.089 35.9461 102.927 39.5909 104.775 42.8781C107.334 47.4285 110.099 51.0502 113.055 54.1941C119.415 60.9601 126.66 65.8888 140.473 69.7751L466.211 169.521C491.08 176.518 507.488 173.683 525.742 154.375L761.171 -94.6575C779.425 -113.966 776.552 -134.268 769.853 -160.663L674.943 -506.703C674.114 -509.918 673.441 -512.431 672.433 -514.697C670.184 -519.757 667.775 -523.33 664.11 -527.207C658.802 -532.822 653.524 -538.345 638.481 -542.577L320.145 -641.75C295.277 -648.746 269.084 -653.794 250.83 -634.486L14.8009 -383.924C-3.45272 -364.615 -2.159 -338.149 4.5401 -311.754L99.8244 31.0415Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Icon>
);

const BigHexagon = (props: IconProps): JSX.Element => (
  <Icon height="378" viewBox="0 0 573 378" width="573" {...props}>
    <path
      clipRule="evenodd"
      d="M173.361 202.312C175.252 207.984 177.714 212.126 180.159 215.846C183.545 220.995 187.096 225.033 190.831 228.492C198.871 235.938 207.8 241.147 224.37 244.588L615.79 335.272C645.621 341.467 664.691 336.779 684.575 312.536L941.028 -0.139931C960.912 -24.3828 955.86 -48.0583 945.806 -78.5945L805.652 -478.351C804.412 -482.069 803.413 -484.973 802.041 -487.56C798.978 -493.334 795.85 -497.344 791.219 -501.609C784.512 -507.785 777.848 -513.856 759.803 -517.603L377.139 -608.221C347.307 -614.416 316.078 -618.206 296.194 -593.964L39.1612 -279.437C19.2775 -255.194 22.9792 -224.128 33.034 -193.592L173.361 202.312Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </Icon>
);

const HexagonBackground = (props: BackgroundProps): JSX.Element => {
  const underDesktop = useBreakpointValue([true, true, true, false]);

  const SelectedBackground = underDesktop ? SmallHexagon : BigHexagon;

  return (
    <SelectedBackground
      position="absolute"
      right={0}
      top={0}
      zIndex={'hide'}
      {...props}
    />
  );
};

export default HexagonBackground;
