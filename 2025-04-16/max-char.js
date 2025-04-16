

// WAP a string is given, return a character that is most commonly used in string
// Example : maxChar("abccccccccd") ➤ "c",   maxChar("apple 123411111") ➤ "1"


function maxChar(str) {
    const charMap = {};
    let maxChar = '';
    let freq = 0;

    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1;
        } else {
            charMap[char] = 1;
        }
    }

    for (const [key, value] of Object.entries(charMap)) {
        if (value > freq) {
            freq = value;
            maxChar = key;
        }
    }

    return maxChar;
}

console.log(maxChar("Hello Worldddddd"));
console.log(maxChar("Hello World 12344432"));



// ANOTHER WAY

function maxChar2(str) {
    const charMap = {};
    let maxChar = '';
    let freq = 0;

    for (let char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1;
        } else {
            charMap[char] = 1;
        }
    }

    for (let key in charMap) {
        if (charMap[key] > freq) {
            freq = charMap[key];
            maxChar = key;
        }
    }

    return maxChar;
}

console.log(maxChar2("Hello Worldddddd"));        // d
console.log(maxChar2("Hello World 12344432"));    // '4'

