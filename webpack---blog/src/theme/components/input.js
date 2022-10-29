export default {
    sizes: {
        md: {
            field: {
                fontSize: '1.6rem',
            },
        },
    },
    variants: {
        flushed: {
            field: {
                borderBottom: '0.2rem solid',
                borderColor: 'darkBlue.100',
            },
        },
    },
    defaultProps: {
        variant: 'flushed',
    },
};