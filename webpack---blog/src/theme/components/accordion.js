// HACK: Direct copy and paste from Chakra to remove border from not
// resetting CSS - should be deleted once Chakra is fully integrated
const parts = ['container', 'button', 'panel', 'icon'];

const baseStyleContainer = {
    borderBottom: '1px solid #EDEDF1',
};

const baseStyleButton = {
    fontSize: '1rem',
    bg: 'transparent',
    border: 'none',
    _hover: {
        bg: 'blackAlpha.50',
    },
    _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
    },
    px: 4,
    py: 3,
};

const baseStylePanel = {
    pt: 2,
    px: 4,
    pb: 5,
};

const baseStyleIcon = {
    fontSize: '1.25em',
};

const baseStyle = {
    container: baseStyleContainer,
    button: baseStyleButton,
    panel: baseStylePanel,
    icon: baseStyleIcon,
};

export default {
    parts,
    baseStyle,
};