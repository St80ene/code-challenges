/**
 * Given an integer array, print all distinct elements in array.
 * The given array may contain duplicates and the output should 
 * print every element only once. The given array is not sorted. 
*/

// solution

const testArray = [1, 2, 2, 1, 1, 3, 3, 4, 2, 9, 9];


// Method I: using Javascript Set Class
const uniqueNumbers = (array) => {
    return [...new Set(array)]
}


// Mehod II: using Array.prototype.filter method

const filterUniqueValues = (array) => {
    let filteredValue = array.filter((value, index, array) => {
        return    array.indexOf(value) === index
    })
    
    return filteredValue;
}

// Testing the solutions

// method I
console.log(uniqueNumbers(testArray));

// method II
console.log(filterUniqueValues(testArray));