const capitalizeString = (string) => {
  const array = string.split('');
  const char = array[0].toUpperCase();
  array[0] = char;
  const capitalizedString = array.join('');
  return capitalizedString;
};
module.exports = capitalizeString;
