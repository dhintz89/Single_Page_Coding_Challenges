/*
 * Complete the 'stringShifter' function below. 
 * Break string into array containing all possible combinations of the string with a first letter 'shifted' from first to last position.
 *
 * The function is expected to return an ARRAY.
 * The function accepts STRING s as parameter.
 *
 * Example: "hello" => ["hello", "elloh", "llohe", "lohel", "ohell"]
 */

function stringShifter(s) {
    let ansAry = [];
    for(let i=0; i < s.length; i++) {
        ansAry.push(s.substring(i, s.length)+s.slice(0,i));
    }
    return ansAry;
};


/*
 * Complete the 'countStrings' function below.
 * Count how many times in the shifted string array, the first and last letter are the same
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 *
 * Example: "hello" => 1  (i: 3, val: "lohel")
 */
 
 function stringShifter(s) {
    let counter = 0;
    for(let i=0; i < s.length; i++) {
        let tempVar = s.substring(i, s.length)+s.slice(0,i);
        if(tempVar[0] === tempVar[tempVar.length-1]) {
            counter++;
        }
    }
    return counter;
};
