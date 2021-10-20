

/**
 * Question:
 * 
 * Write a function called removeVowels 
 * which will accept a string and return 
 * a new string with all the vowels removed. 
 * You should not consider "y" to be a vowel.
 * 
 * @param {*} string 
 * @returns string
 */


// Solution

const removeVowels = (string) => {
  let matchedString = string.match(/[^aeiou]/gi);
  return matchedString.join('');
};


// Testing our solution
console.log(removeVowels('bad looking sexy'));
