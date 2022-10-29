import styled from 'styled-components';
import config from '../../config';
import { InterfaceLayout } from '../../interfaces/Layout';

import { space, SpaceProps } from 'styled-system';

type LayoutProps = InterfaceLayout & SpaceProps;

export const Component = styled('section')<LayoutProps>`
  background-color: ${props => props.background || ''};
  padding: 0 calc((100% - 1296px) / 2);

  @media (max-width: ${config.resolutions.desktopS}) {
    padding-left: calc((100% - 1120px) / 2);
    padding-right: calc((100% - 1120px) / 2);
  }
  @media (max-width: ${config.resolutions.tablet}) {
    padding-left: calc((100% - 704px) / 2);
    padding-right: calc((100% - 704px) / 2);
  }
  @media (max-width: ${config.resolutions.mobileL}) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
  @media (max-width: ${config.resolutions.mobileM}) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
  @media (max-width: ${config.resolutions.mobileS}) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  }
  ${space}
  ${props => props.extend}
`;
