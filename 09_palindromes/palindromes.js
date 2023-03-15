const palindromes = function (word) {
  word = word.replaceAll(' ', '')
             .replaceAll(',', '')
             .replaceAll('?', '')
             .replaceAll('!', '')
             .replaceAll('.', '')
             .toLowerCase();
  reverseWord = word.split('').reverse().join('');

  return word === reverseWord;
};


// Do not edit below this line
module.exports = palindromes;
