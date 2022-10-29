import {
    extendTheme
} from '@chakra-ui/react';

import baseTheme from './index';
import components from './components/index';

const theme = Object.assign({}, baseTheme, {
    components
});

export default extendTheme(theme);