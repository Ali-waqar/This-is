import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash/fp';

interface Company {
  name: string;
  logo: object;
}

export default class DatoCompanies {
  private companies: Array<Company>;
  private mainShowcase: Array<Company>;
  private secondaryShowcase: Array<Company>;

  public constructor() {
    const { all, main, secondary } = this.getCompanies();
    this.companies = all;
    this.mainShowcase = main;
    this.secondaryShowcase = secondary;
  }

  public getMainShowcase(): Array<Company> {
    return this.mainShowcase;
  }

  public getSecondaryShowcase(): Array<Company> {
    return this.secondaryShowcase;
  }

  private getCompanies(): Record<string, Stat> {
    const { allDatoCmsCompany, datoCmsCompanyShowcase } = useStaticQuery(
      graphql`
        query {
          allDatoCmsCompany {
            edges {
              node {
                name
                logo {
                  fluid(
                    maxWidth: 140
                    imgixParams: { fm: "jpg", auto: "compress" }
                  ) {
                    ...GatsbyDatoCmsFluid
                  }
                }
              }
            }
          }
          datoCmsCompanyShowcase {
            main {
              name
              logo {
                fluid(
                  maxWidth: 140
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
            secondary {
              name
              logo {
                fluid(
                  maxWidth: 140
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      `
    );
    const adaptCompany = company => ({ ...company, logo: company.logo.fluid });
    const all = _.flow(
      _.getOr([], 'edges'),
      _.map('node'),
      _.uniqBy('name'),
      _.map(adaptCompany)
    )(allDatoCmsCompany);
    const main = _.flow(
      _.getOr([], 'main'),
      _.map(adaptCompany)
    )(datoCmsCompanyShowcase);

    const secondary = _.flow(
      _.getOr([], 'secondary'),
      _.map(adaptCompany)
    )(datoCmsCompanyShowcase);

    return { all, main, secondary };
  }
}
