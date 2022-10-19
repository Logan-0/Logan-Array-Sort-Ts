/**
* 
* Logan's Simple Array Sorter
* Date Started: 08/12/22
* Date Last Updated: 10/19/22
* Last Updated By: Logan-0
* 
*/


/** 
 * Comparing the string in an Array
 * 
 * compare values and return
 */
function sortStringArray(stringArray: string[]) {
    var tempHoldingVar = stringArray.sort();
    return tempHoldingVar;
}


/** 
 * Comparing numbers
 * A basic comparison function must go into the original array sort;
 * since (2 > 1), standard sort will interpret (2 > 100) so we must implement a function within,
 * to compare numbers as a whole.
 * 
 * compare values and return
 */
function sortNumberArray(numberArray: number[]) {
    var tempHoldingVar = numberArray.sort(function (a, b) { return a - b });
    return tempHoldingVar;
}



/** 
 * Comparing string dates
 * 
 * Take Array of String Dates
 * 
 * Convert String Date to Date Object
 * 
 * Compare values and return most recent Date First
 */
function sortDateArray(dateArray: string[]) {

    var tempHoldingVar: Date[] = [];

    console.log(tempHoldingVar)

    for (let i = 0; i < dateArray.length; i++) {

        tempHoldingVar.push(new Date(dateArray[i]));

    }

    tempHoldingVar = tempHoldingVar.sort(function (a: Date, b: Date) { return a.getTime() - b.getTime() });

    return tempHoldingVar
}

export = { sortDateArray, sortNumberArray, sortStringArray }