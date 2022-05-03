const stringLength = (string) => {
  if (string.length > 0 && string.length < 11) {
    return true;
  } else {
    console.log('ERROR');
    return false;
  }
};
module.exports = stringLength;
