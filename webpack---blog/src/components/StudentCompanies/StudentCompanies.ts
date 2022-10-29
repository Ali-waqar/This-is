import styled, { css } from 'styled-components';
import config from '../config';

const Companies = styled('article')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${config.resolutions.mobileL}) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const CompanyLogo = styled('div')<{ width: number }>`
  filter: grayscale(1);
  width: ${props => props.width}%;

  :hover {
    filter: grayscale(0);
  }

  @media (max-width: ${config.resolutions.mobileL}) {
    width: 25%;
    filter: grayscale(0);
  }
`;

const LayoutStudentCompanies = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 0.8rem;
  padding-top: 1.6rem;

  & > p {
    color: ${config.palette.darkBlueTransparent('0.4')};
    margin-bottom: 0.8rem;
    margin-top: 1.6rem;
  }

  &::before,
  &::after {
    background: linear-gradient(
      270deg,
      #ffffff 0%,
      #596584 44.98%,
      #ffffff 95.78%
    );
    opacity: 0.1;
    content: '';
    display: block;
    height: 0.1rem;
    width: 100%;
  }

  @media(max-width ${config.resolutions.mobileM}) {

    & > p {
      color: ${config.palette.darkBlueTransparent('0.6')};
      margin-top: 1.8rem;
    }
  }
`;

export { Companies, LayoutStudentCompanies, CompanyLogo };
