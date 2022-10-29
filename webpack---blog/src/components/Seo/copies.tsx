import { getCampusNameFromDato } from '../../lib/campus';

export default function getCopies(
  pageName: string,
  locale: string,
  t: TFunction
): { title: string; description: string } {
  let title, description, courseCode, campusCode, courseName, campusName;
  const courseKey = /course(Web|Data|Uxui|Cysec)/.exec(pageName);
  const campusKey =
    /campus(Ams|Bcn|Bod|Dus|Par|Mad|Ber|Mia|Nyc|Lis|Lon|Sao|Tpa|Mex|Rmt)/.exec(
      pageName
    );

  if (courseKey) {
    [, courseCode] = courseKey;
    courseName = t(`course-list:courseList.${courseCode.toLowerCase()}.title`);
  }

  if (campusKey) {
    [, campusCode] = campusKey;
    campusName = getCampusNameFromDato(campusCode, locale);
  }

  if (campusKey && pageName === campusKey[0]) {
    title = t(`seo:seo.campus.${campusCode.toLowerCase()}.title`);
    description = t(`seo:seo.campus.${campusCode.toLowerCase()}.description`);
  }

  if (courseKey && pageName === courseKey[0]) {
    title = t(`seo:seo.course.title`, {
      course: courseName,
    });
    description = t(`seo:seo.course.${courseCode.toLowerCase()}.description`);
  }

  if (courseKey && campusKey) {
    title = t(`seo:seo.courses-campus.title`, {
      campus: campusName,
      course: courseName,
    });
    description = t(
      `seo:seo.courses-campus.${courseCode.toLowerCase()}.description`,
      {
        campus: campusName,
      }
    );
  }
  if (campusCode && courseCode && campusCode === 'Rmt') {
    title = t(`seo:seo.course-campus-rmt.title`, {
      course: courseName,
    });
    description = t(`seo:seo.course-campus-rmt.description`, {
      course: courseName,
    });
  }

  let key = pageName;
  if (pageName === 'pressRelease') key = 'covid';
  if (pageName === 'page404') key = 'notFound';

  title = title || t(`seo:seo.${key}.title`);
  description = description || t(`seo:seo.${key}.description`);
  return { title, description };
}
