import { updateDataLayer } from '../../lib/datalayer';

const campusMap: Record<string, string> = {
  campusRmt: 'rmt',
  campusAms: 'ams',
  campusBcn: 'bcn',
  campusBer: 'ber',
  campusBod: 'bod',
  campusDus: 'dus',
  campusLis: 'lis',
  campusLon: 'lon',
  campusMad: 'mad',
  campusMex: 'mex',
  campusMia: 'mia',
  campusPar: 'par',
  campusSao: 'sao',
  campusTpa: 'tpa',
  allCampuses: 'all campuses',
};
const courseMap: Record<string, string> = {
  courseWeb: 'wd',
  courseUxui: 'ux',
  courseData: 'da',
  courseCysec: 'cy',
  shortCourseJs: 'js-shortcourse',
  allCourses: 'all courses',
};

function emitCampusEvent(campus: string): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar',
    eventAction: 'click level 2',
    eventLabel: `campus::${campusMap[campus]}`,
  });
}

function emitCourseEvent(course: string, isMobile = false): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: `navbar${isMobile ? ' mobile' : ''}`,
    eventAction: 'click level 2',
    eventLabel: `courses::${courseMap[course]}`,
  });
}

function emitCtaEvent(): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar',
    eventAction: 'click cta::apply',
    eventLabel: 'apply now',
  });
}

function emitForCompaniesEvent(): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar',
    eventAction: 'click level 1',
    eventLabel: 'for companies',
  });
}

function emitHomeLogoEvent(): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar',
    eventAction: 'click icon',
    eventLabel: 'ironhack home logo',
  });
}

function emitLevelOneEvent(
  section: string,
  kind: 'click' | 'hover',
  isMobile = false
): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: `navbar${isMobile ? ' mobile' : ''}`,
    eventAction: `${kind} level 1`,
    eventLabel: section,
  });
}

function emitLanguageSelectionEvent(language: string): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar',
    eventAction: 'click language',
    eventLabel: language,
  });
}

function emitMobileMenuBackEvent(): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar',
    eventAction: 'click level 2',
    eventLabel: 'go back',
  });
}

function emitMobileMenuToggleEvent(isVisible): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: 'navbar mobile',
    eventAction: 'click icon',
    eventLabel: isVisible ? 'open' : 'close',
  });
}

function emitWhyIronhackEvent(section: string, isMobile = false): void {
  updateDataLayer({
    event: 'gaEvent',
    eventCategory: `navbar${isMobile ? ' mobile' : ''}`,
    eventAction: 'click level 2',
    eventLabel: `why ironhack::${section}`,
  });
}

export {
  emitCampusEvent,
  emitCourseEvent,
  emitCtaEvent,
  emitForCompaniesEvent,
  emitHomeLogoEvent,
  emitLanguageSelectionEvent,
  emitLevelOneEvent,
  emitMobileMenuBackEvent,
  emitMobileMenuToggleEvent,
  emitWhyIronhackEvent,
};
