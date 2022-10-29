import _ from 'lodash/fp';

const cohortFormatColor = {
    inPerson: 'orange',
    hybrid: 'purple',
    online: 'electricBlue',
};

export default {
    parts: ['container', 'label'],
    baseStyle: {
        container: {
            fontWeight: 600,
            py: 0.5,
        },
    },
    variants: {
        cohort: ({
            bg,
            colorScheme
        }) => {
            const cohortColor = _.getOr('', colorScheme, cohortFormatColor);

            return {
                container: {
                    bg: bg || `${cohortColor}.10`,
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    px: 2,
                }
            };
        },
        mainFomo: {
            container: {
                bg: '#EC398A',
                color: 'white',
                h: '24px',
                px: '6px',
                py: '2px'
            },
        },
        secondaryFomo: {
            container: {
                bg: '#F19B38',
                color: 'white',
                h: '24px',
                px: '8px',
                py: '2px'
            },
        },
        light: {
            container: {
                bg: 'darkBlue.8',
                color: 'darkBlue.100',
                minHeight: '24px',
                px: '6px',
            },
        },
        dark: {
            container: {
                bg: 'darkBlue.100',
                color: 'darkBlue.8',
                minHeight: '24px',
                px: '6px',
            },
        },
        campusBadge: {
            container: {
                bg: 'electricBlue',
                color: 'white',
                minHeight: '2.2rem',
                p: 1,
                // REFACTOR - ENG-2060 - https://app.clickup.com/t/2461218/ENG-2060
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1rem',
                fontHeight: '1.4rem',
            },
        },
        financingOption: {
            container: {
                borderRadius: 'sm',
                bg: 'electricBlue.100',
                color: 'white',
                minHeight: '2.9rem',
                p: '6px',
                fontFamily: 'Roboto',
                fontWeight: 500,
                fontSize: '1.3rem',
            },
        },
    },
};