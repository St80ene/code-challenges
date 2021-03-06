/**
 * Question:
 * You are choreographing a circus show with 
 * various animals. For one act, you are given
 *  two kangaroos on a number line ready to 
 * jump in the positive direction (i.e, 
 * toward positive infinity).The first 
 * kangaroo starts at location x1 and 
 * moves at a rate of v1 meters per jump.
 * The second kangaroo starts at location x2
 * and moves at a rate of v2 meters per jump.
 * You have to figure out a way to get both
 * kangaroos at the same location at the
 * same time as part of the show. If it
 * is possible, return YES, otherwise return NO.
 */

//Solution

function kangaroo(x1:number, v1:number, x2:number, v2:number):string {
    // Write your code here
  let n = 0;
  while (n < 10000) {
    if (x1 + n * v1 === x2 + n * v2) {
      return "YES";
    }
    n++;
  }
  return "NO";
}

//Testing our solution
console.log(kangaroo(2,1,1,2));
