const categories = {
    wd: 'courseWeb',
    ux: 'courseUxui',
    da: 'courseData',
    cy: 'courseCysec',
    js: 'shortCourseJs',
    allcourses: 'allCourses',
    ams: 'campusAms',
    bcn: 'campusBcn',
    ber: 'campusBer',
    bod: 'campusBod',
    dus: 'campusDus',
    lis: 'campusLis',
    lon: 'campusLon',
    mad: 'campusMad',
    mex: 'campusMex',
    mia: 'campusMia',
    nyc: 'campusNyc',
    par: 'campusPar',
    sao: 'campusSao',
    tpa: 'campusTpa',
    rmt: 'campusRmt',
    glo: 'allCampuses',
    financing_options: 'financing',
    outcomes: 'careerServices',
    alumni: 'alumni',
};

const i18n = {
    wd: 'web',
    ux: 'uxui',
    da: 'data',
    cy: 'cysec',
    allcourses: 'allCourses',
};

const datoCourses = {
    web: 'WD',
    uxui: 'UX',
    data: 'DA',
    cysec: 'CY',
};

const datoCategoryToWebUrl = (category) => {
    return categories[category.toLowerCase()];
};

const datoCategoryToI18n = (category) => {
    return i18n[category.toLowerCase()];
};

const webCategoryToDato = (category) => {
    return datoCourses[category.toLowerCase()];
};

const languageToDato = (language) => {
    switch (language) {
        case 'br':
            return 'pt-BR';
        default:
            return language;
    }
};

module.exports = {
    datoCategoryToWebUrl,
    datoCategoryToI18n,
    languageToDato,
    webCategoryToDato,
};