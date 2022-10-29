const getColorVar = (color) =>
    `var(--chakra-colors-${color.replace('.', '-')})`;

const buttonBase = {
    backgroundColor: 'electricBlue',
    fontFamily: 'body',
    fontWeight: 'normal',
    color: 'white',
    px: '4.8rem',
    borderRadius: 'button',
    cursor: 'pointer',
    _disabled: {
        opacity: 1
    },
};

const colorSchemes = {
    primary: {
        color: 'electricBlue.100',
        hover: 'electricBlue.hover',
        active: 'electricBlue.active',
        disabled: 'electricBlue.disabled',
    },
    secondary: {
        color: 'darkBlue.100',
        hover: 'darkBlue.100',
        active: 'darkBlue.100',
        disabled: 'darkBlue.disabled',
    },
    terciary: {
        color: 'orange.100',
        hover: 'orange.hover',
        active: 'orange.active',
        disabled: 'orange.disabled',
    },
    bunker: {
        color: 'bunker.100',
        hover: 'bunker.hover',
        active: 'bunker.active',
        disabled: 'bunker.disabled',
    },
    white: {
        color: 'white',
        hover: 'white',
        active: 'white',
        disabled: 'white',
    },
    quaternary: {
        color: 'green.100',
        hover: 'green.100',
        active: 'green.100',
        disabled: 'green.100',
    },
    linkedinBlue: {
        color: 'linkedinBlue',
        hover: 'linkedinBlue',
        active: 'linkedinBlue',
        disabled: 'linkedinBlue',
    },
};

export default {
    baseStyle: buttonBase,
    variants: {
        solid: ({
            colorScheme
        }) => {
            const {
                color,
                hover,
                active,
                disabled
            } =
            colorSchemes[colorScheme] || colorSchemes.primary;
            return {
                backgroundColor: color,
                _hover: {
                    backgroundColor: hover,
                    _disabled: {
                        backgroundColor: disabled,
                    },
                },
                _active: {
                    backgroundColor: active,
                },
                _disabled: {
                    backgroundColor: disabled,
                },
            };
        },
        outline: ({
            colorScheme
        }) => {
            const {
                color,
                hover,
                active,
                disabled
            } =
            colorSchemes[colorScheme] || colorSchemes.primary;
            return {
                backgroundColor: 'transparent',
                color: color,
                boxShadow: `inset 0px 0px 0px 2px ${getColorVar(color)}`,
                border: 'none',
                _hover: {
                    color: hover,
                    boxShadow: `inset 0px 0px 0px 2px ${getColorVar(hover)}`,
                    _disabled: {
                        color: disabled,
                        boxShadow: `inset 0px 0px 0px 2px ${getColorVar(disabled)}`,
                    },
                },
                _active: {
                    color: active,
                    boxShadow: `inset 0px 0px 0px 2px ${getColorVar(active)}`,
                },
                _disabled: {
                    color: disabled,
                    boxShadow: `inset 0px 0px 0px 2px ${getColorVar(disabled)}`,
                },
            };
        },
        unstyled: {
            bg: 'none',
            color: 'inherit',
            display: 'inline',
            lineHeight: 'inherit',
            fontSize: 'inherit',
            h: 'inherit',
            w: 'inherit',
            m: 0,
            py: 0,
            px: 0,
        },
        link: ({
            colorScheme
        }) => {
            const {
                color,
                hover,
                active,
                disabled
            } =
            colorSchemes[colorScheme] || colorSchemes.primary;
            return {
                backgroundColor: 'transparent',
                color: color,
                border: 'none',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
                _hover: {
                    color: hover,
                    _disabled: {
                        color: disabled,
                    },
                },
                _active: {
                    color: active,
                },
                _disabled: {
                    color: disabled,
                },
            };
        },
    },
    sizes: {
        xs: {
            fontSize: ['1.4rem', null, '1.6rem', '1.8rem'],
            h: 'initial',
            py: 1,
            minW: 'auto',
        },
        sm: {
            fontSize: ['1.5rem', null, null, '1.8rem'],
            px: '4.8rem',
            py: ['1rem', null, null, '1.4rem'],
            h: ['4rem', null, null, '5rem'],
            w: ['100%', null, null, 'auto'],
        },
        md: {
            fontSize: ['1.5rem', null, null, '2rem'],
            px: '4.8rem',
            py: ['1rem', null, null, 2],
            h: ['4rem', null, null, '8rem'],
            w: ['100%', null, null, 'auto'],
        },
        lg: {
            fontSize: ['1.5rem', null, null, '2rem'],
            py: ['1rem', null, null, 3],
            h: ['4rem', null, null, '8rem'],
            w: '35.7rem',
        },
        xl: {
            fontSize: ['1.5rem', null, null, '2rem'],
            py: ['1rem', null, null, '2.4rem'],
            h: ['4rem', null, null, '8rem'],
            w: '42.6rem',
        },
    },
    defaultProps: {
        colorScheme: 'primary',
        variant: 'solid',
        size: 'sm',
    },
};