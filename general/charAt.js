/**
 * 
 * @param {*} string 
 * @param {*} index 
 * @returns string
 */

// Solution

const charAt = (string, index) => {
  let splitString = string.split('');
  let requiredLetter = index

  for (let index = 0; index < splitString.length; index++){
    return splitString[requiredLetter]
  }
}


// Testing our solution

console.log(charAt('string', 1));