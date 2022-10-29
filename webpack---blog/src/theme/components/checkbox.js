export default {
    baseStyle: {
        control: {
            borderColor: 'darkBlue.40',
            _checked: {
                bg: 'darkBlue.100',
                border: 'none',
            },
        },
        label: {
            _invalid: {
                color: 'critical.100',
            },
        },
    },
    sizes: {
        md: {
            control: {
                h: '2.4rem',
                w: '2.4rem'
            },
            icon: {
                fontSize: '1rem'
            },
            label: {
                fontSize: '1.4rem',
                ml: 2
            },
        },
    },
};