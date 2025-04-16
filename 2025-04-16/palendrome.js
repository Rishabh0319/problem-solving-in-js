

//WAP to check string is palendrome or not ?


function isPalendrome(str) {
    let rev = str.split('').reverse().join('').toLowerCase();
    return str.toLowerCase() === rev ? true : false;
}



console.log(isPalendrome('rishabh'));   // false
console.log(isPalendrome('TENET'));     // true
console.log(isPalendrome('MalAYALam'));  // true






