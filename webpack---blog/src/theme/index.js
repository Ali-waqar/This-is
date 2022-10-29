import foundations from './foundations';

export default {
    ...foundations,
    styles: {
        global: {
            html: {
                fontFamily: 'body',
                fontSize: '10px',
            },
            body: {
                color: 'darkBlue.100',
            },
        },
    },
    layout: {
        desktop: {
            width: '128rem',
            padding: '8rem',
            marginTop: 7,
        },
        mobile: {
            width: '100%',
            padding: '2.4rem',
            marginTop: 6,
        },
    },
    sizes: {
        desktopWidth: '1280px',
    },
    shadows: {
        active1: '0px 2px 6px rgba(0, 0, 0, 0.06)',
        active2: '0px 4px 8px rgba(0, 0, 0, 0.08)',
        active3: '0px 4px 10px rgba(0, 0, 0, 0.08)',
        inactive1: '0px 2px 2px rgba(0, 0, 0, 0.04)',
        inactive2: '0px 2px 4px rgba(0, 0, 0, 0.04)',
        inactive3: '0px 2px 5px rgba(0, 0, 0, 0.05)',
        outlineBlue: 'inset 0px 0px 0px 2px #2DC5FA',
        outlineGray: 'inset 0px 0px 0px 2px snow',
    },
    radii: {
        sm: '4px',
        md: '6px',
        card: '6px',
        button: '4px',
        full: '99999px',
    },
};