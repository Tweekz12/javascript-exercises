const caesar = function(text, key) {
  if (key > 26 || key < -26) {
    key = key % 26;
  }
  let encryptedText = '';
  for (let char of text) {
    let asciiCode = char.charCodeAt(0);
    if (asciiCode >= 65 && asciiCode <= 90) {
      if (key > 0) {
        asciiCode += key;
        if (asciiCode > 90) {
            asciiCode = asciiCode - 90 + 64;
        }
      } else {
        asciiCode += key;
        if (asciiCode < 65) {
            asciiCode = asciiCode + 90 - 64;
        }
      }
      
      encryptedText += String.fromCharCode(asciiCode);
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      if (key > 0) {
        asciiCode += key;
        if (asciiCode > 122) {
            asciiCode = asciiCode - 122 + 96;
        }
      } else {
        asciiCode += key;
        if (asciiCode < 97) {
            asciiCode = asciiCode + 122 - 96;
        }
      }
      encryptedText += String.fromCharCode(asciiCode);
    } else {
      encryptedText += char;
    }
  }

  return encryptedText;
};

// Do not edit below this line
module.exports = caesar;
