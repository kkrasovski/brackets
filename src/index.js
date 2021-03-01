module.exports = function check(str, bracketsConfig) {
  let couples = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    couples.push(bracketsConfig[i].join(''))
  }
  for (let i = 0; i < couples.length; i++) {
    if (str.includes(couples[i])) {
      str = str.replace(couples[i], '');
      i = -1;
    }
  }
  return str.length === 0 ? true : false;

}
