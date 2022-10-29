import { graphql, useStaticQuery } from 'gatsby';
import { datoLanguage } from './datoUtilities';
import {
  AllDatoContactInfo,
  ItemDatoContactInfo,
  AllDatoCampusCourseInfo,
  ItemDatoCampusCourseInfo,
} from './interfaces';

export default class DatoContactInfo {
  private language: string;
  private allContactInfo: AllDatoContactInfo;
  private campusContactInfo: Array<ItemDatoContactInfo>;
  private allCampusInfo: AllDatoCampusCourseInfo;
  private campusInfo: Array<ItemDatoCampusCourseInfo>;
  private allCourseInfo: AllDatoCampusCourseInfo;
  private courseInfo: Array<ItemDatoCampusCourseInfo>;

  public constructor(locale: string) {
    this.language = datoLanguage(locale);
    const { allDatoCmsCampusinformation, allDatoCmsCity, allDatoCmsCourse } =
      this.contactInfoFunction();
    this.allContactInfo = allDatoCmsCampusinformation;
    this.allCampusInfo = allDatoCmsCity;
    this.allCourseInfo = allDatoCmsCourse;
    this.campusContactInfo = this.allContactInfo.edges
      .map((item): ItemDatoContactInfo => item.node)
      .sort((item1, item2): number => item1.campus.order - item2.campus.order);
    this.campusInfo = this.allCampusInfo.edges.map(
      (item): ItemDatoCampusCourseInfo => item.node
    );
    this.courseInfo = this.allCourseInfo.edges.map(
      (item): ItemDatoCampusCourseInfo => item.node
    );
  }

  public allCampusCodes(): Array<ItemDatoCampusCourseInfo> {
    return this.campusInfo.filter(
      (campusInfo: ItemDatoCampusCourseInfo) =>
        campusInfo.locale === this.language
    );
  }
  public allCourseCodes(): Array<ItemDatoCampusCourseInfo> {
    return this.courseInfo.filter(
      (campusInfo: ItemDatoCampusCourseInfo) =>
        campusInfo.locale === this.language
    );
  }

  public contactInformationByLanguage(): Array<ItemDatoContactInfo> {
    return this.campusContactInfo.filter(
      (campusInfo: ItemDatoContactInfo): boolean =>
        campusInfo.locale === this.language
    );
  }

  public campusInformationByLanguage(
    campusCode: string
  ): Array<ItemDatoCampusCourseInfo> {
    return this.campusInfo.filter(
      (campusInfo: ItemDatoCampusCourseInfo): boolean =>
        campusInfo.locale === this.language && campusInfo.code === campusCode
    );
  }

  public contactInformationByCampus(
    campusCode: string
  ): Array<ItemDatoContactInfo> {
    return this.campusContactInfo.filter(
      (info: ItemDatoContactInfo) =>
        info.campus.code.toLowerCase() === campusCode &&
        info.locale === this.language
    );
  }

  private contactInfoFunction(): {
    allDatoCmsCampusinformation: AllDatoContactInfo;
    allDatoCmsCity: AllDatoCampusCourseInfo;
    allDatoCmsCourse: AllDatoCampusCourseInfo;
  } {
    const { allDatoCmsCampusinformation, allDatoCmsCity, allDatoCmsCourse } =
      useStaticQuery(
        graphql`
          query {
            allDatoCmsCampusinformation {
              edges {
                node {
                  locale
                  street
                  zipCode
                  campus {
                    code
                    description
                    order
                    isOnline
                    isNew
                  }
                  country
                  phoneNumber
                  email
                  sliderImages {
                    fluid(
                      maxWidth: 1440
                      imgixParams: { fm: "jpg", auto: "compress" }
                    ) {
                      ...GatsbyDatoCmsFluid
                    }
                  }
                  googleMapsUrl
                  campusValuePropsTitle
                }
              }
            }
            allDatoCmsCity {
              edges {
                node {
                  description
                  code
                  locale
                }
              }
            }
            allDatoCmsCourse {
              edges {
                node {
                  description
                  code
                  locale
                }
              }
            }
          }
        `
      );
    return { allDatoCmsCampusinformation, allDatoCmsCity, allDatoCmsCourse };
  }
}
