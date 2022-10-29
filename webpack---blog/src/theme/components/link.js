import {
    textDecoration
} from "@chakra-ui/styled-system";

export default {
    baseStyle: {
        color: 'electricBlue.100',
    },
    variants: {
        emphasis: {
            color: 'darkBlue.80',
            fontWeight: 600,
            paddingBottom: 1,
            borderBottomWidth: '1px',
            borderBottomColor: 'darkBlues.64',
            borderBottomStyle: 'solid',
            // TODO: text decoration reset can be removed once
            // Chakra reset is able to be done
            textDecoration: 'none',
            _hover: {
                color: 'darkBlues.100',
                borderBottomColor: 'darkBlues.80',
                textDecoration: 'none',
            },
        },
        darkBlue: {
            color: 'darkBlue.100',
            fontWeight: 700,
            textDecoration: 'underline',
            textDecorationThickness: '1px',
            textDecorationColor: 'bunker.disabled',
            textUnderlineOffset: 6,
            _hover: {
                textDecorationThickness: '2px',
                textDecorationColor: 'bunker.hover',
            },
        },
        unstyled: {
            _hover: {
                textDecoration: 'none'
            }
        }
    },
};