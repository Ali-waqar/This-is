const campusToCode = (campus) => {
    switch (campus) {
        case 'Amsterdam':
            return 'ams';
        case 'Barcelona':
            return 'bcn';
        case 'Berlin':
            return 'ber';
        case 'Bordeaux':
            return 'bod';
        case 'Dusseldorf':
            return 'dus';
        case 'Lisbon':
            return 'lis';
        case 'London':
            return 'lon';
        case 'Madrid':
            return 'mad';
        case 'Mexico City':
            return 'mex';
        case 'Miami':
            return 'mia';
        case 'New York City':
            return 'nyc';
        case 'Paris':
            return 'par';
        case 'Sao Paulo':
            return 'sao';
        case 'Tampa':
            return 'tpa';
        default:
            return '';
    }
};

module.exports = campusToCode;