/**
 * Question: 
 * Implement a function named factorial 
 * that has one parameter: an integer, n!. 
 * It must return the value of  (i.e.,  factorial).
 */

//Solution using recursion method

function factorial(n) {
    if (n === 0 || n === 1 ) return 1
    return n * factorial(n - 1)
}

//Testing the solution

console.log(factorial(5));