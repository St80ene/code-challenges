/**
 * Question: 
 * First, print each vowel in s on a new line. 
 * The English vowels are a, e, i, o, and u, and 
 * each vowel must be printed in the same order as it appeared in s.
 * Second, print each consonant (i.e., non-vowel) in s on a new line 
 * in the same order as it appeared in s.
 */

//Solution

function vowelsAndConsonants(s) {
    //seperating the vowels and consonants
    let vowels = s.match(/[aeiou]/gi),
        consonants = s.match(/[^aeiou$]/gi);
    
    //join, loop and print both consonants and vowels
    vowels.concat([], consonants).forEach(element => {
        console.log(element);
    });
}

// Testing the function

vowelsAndConsonants('The quick brown fox jumped over the lazy dog');