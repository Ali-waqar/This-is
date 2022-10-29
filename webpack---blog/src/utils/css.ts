export const hexStringToRGB = (hexString: string) => {
  const result = hexString.match(/([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i) || [
    '',
    'FF',
    'FF',
    'FF'
  ];
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
    result[3],
    16
  )}`;
};
