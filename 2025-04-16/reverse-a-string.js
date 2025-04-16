

// WAP to reverse a string


let str = "I LOVE JAVASCRIPT AND LOVE TO CODE";

function reverseString1(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

console.log(reverseString1(str));


//  ANOTHER WAY

let str1 = "I LOVE JAVASCRIPT AND LOVE TO CODE";

function reverseString2(str) {
    let revStr = '';
    for (let char of str) {
        revStr = char + revStr;
    }
    return revStr;
}

console.log(reverseString2(str1));


//  ANOTHER WAY

let str3 = "I LOVE JAVASCRIPT AND LOVE TO CODE";

function reverseString3(str) {
    let strToArr = str.split('').reverse().join('');
    return strToArr;
}

console.log(reverseString3(str3));
