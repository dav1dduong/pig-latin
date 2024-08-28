// const translate = (word) => {
//   //if first letter starts with vowel:
//   const firstLetter = word.charAt(0).toLowerCase();
//   const secondLetter = word.charAt(1).toLowerCase();
//   if (
//     firstLetter === "a" ||
//     firstLetter === "e" ||
//     firstLetter === "i" ||
//     firstLetter === "o" ||
//     firstLetter === "u"
//   ) {
//     return `${word.toLowerCase()}way`;
//   } else if (
//     secondLetter !== "a" ||
//     secondLetter !== "e" ||
//     secondLetter !== "i" ||
//     secondLetter !== "o" ||
//     secondLetter !== "u"
//   ) {
//     return (
//       word.toLowerCase().replace(firstLetter + secondLetter, "") +
//       firstLetter +
//       secondLetter +
//       "ay"
//     );
//   }
//   //else: return (rest of word) + first consonat + "ay"
// };
const translate = (word) => {
  let newString = "";
  let consonants = "";
  let lowerCaseWord = word.toLowerCase();

  if (
    lowerCaseWord.charAt(0) === "a" ||
    lowerCaseWord.charAt(0) === "e" ||
    lowerCaseWord.charAt(0) === "i" ||
    lowerCaseWord.charAt(0) === "o" ||
    lowerCaseWord.charAt(0) === "u"
  ) {
    return lowerCaseWord + "way";
  } else {
    for (let i = 0; i < word.length; i++) {
      if (
        lowerCaseWord.charAt(i) === "a" ||
        lowerCaseWord.charAt(i) === "e" ||
        lowerCaseWord.charAt(i) === "i" ||
        lowerCaseWord.charAt(i) === "o" ||
        lowerCaseWord.charAt(i) === "u"
      ) {
        newString = lowerCaseWord.substring(i);
        break;
      } else {
        consonants += lowerCaseWord.charAt(i);
      }
    }
  }

  return newString + consonants + "ay";
};
module.exports = translate;
