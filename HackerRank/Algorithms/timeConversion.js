/**
 * Question:
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 */

//Solution

function timeConversion(s) {
	// checking if it's PM or AM

	const stringArray = s.slice(0, 8).split(':');
	//split the string
	//add 12 to index 0 of the array if it is present
	//else add 00 if it is absent
	stringArray[0] = (s.indexOf('PM') > -1) ?
		(stringArray[0] == 12 ? '12' : Number(stringArray[0]) + 12) :
		(stringArray[0] == 12 ? '00' : stringArray[0])
	return stringArray.join(':')
}

//testing solution

console.log(timeConversion('01:02:03PM'));
