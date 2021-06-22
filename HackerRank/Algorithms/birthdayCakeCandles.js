/**
 * Question
 * You are in charge of the cake for a child's birthday.
 * You have decided the cake will have one candle for
 * each year of their total age. They will only be able
 * to blow out the tallest of the candles. Count how
 * many candles are tallest.
 */

//Solution

function birthdayCakeCandles(candles) {
    let height = Math.max(...candles)
    let heightCount = 0;

    for (let index = 0; index < candles.length; index++) {
        if (candles[index] === height) {
            heightCount++;
		} 
    }
    
    return heightCount;
}

//testing the solution

let candles = [4, 4, 1, 3];


console.log(birthdayCakeCandles(candles));