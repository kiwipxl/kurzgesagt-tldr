module.exports.isUrl = (string) => {
  const urlRegex = /(http[s]?:\/\/[a-zA-Z0-9\-\*\?\=\&\.\/]+)/g;
  return urlRegex.test(string);
};
