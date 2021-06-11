/**
 * Question: 
 * Variables named firstInteger, secondInteger, 
 * and firstString are declared for you in the 
 * editor below. You must use the  operator to 
 * perform the following sequence of operations:
 * Convert  to an integer (Number type), then 
 * sum it with  and print the result on a new 
 * line using console.log. 
 * Convert  to a floating-point number (Number type), 
 * then sum it with  and print the result on a new 
 * line using console.log.
 * Print the concatenation of  and  on a new line 
 * using console.log. Note that  must be printed first.
 */

//solution

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    
	const firstDecimal = 4.0;

	const firstString = 'Perform Operation ';

	console.log(firstInteger + Number(secondInteger));

	console.log(firstDecimal + parseFloat(secondDecimal));

	console.log(firstString + secondString);
}

//testing the solution

performOperation(2, 2.5,'function')