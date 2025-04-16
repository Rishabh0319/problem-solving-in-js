//  WAP to reverse a number

// example: 12345 -> 54321,  90098 -> 89009, 2000 -> 2, -51 -> -15



let int = 16072000;

function reverseInt(num) {
    let reverse = Math.abs(num).toString().split('').reverse().join('');

    return num >= 0 ? parseInt(reverse) : -parseInt(reverse);
}

console.log(reverseInt(int));
console.log(reverseInt(1234));    // ➤ 4321
console.log(reverseInt(-567));    // ➤ -765
console.log(reverseInt(1000));    // ➤ 1
console.log(reverseInt(0));       // ➤ 0



// ANOTHER WAY

function reverseInteger(num) {
    let reverse = 0;
    let isNegative = num < 0;

    while (num > 0) {
        let last_digit = num % 10;
        reverse = reverse * 10 + last_digit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -reverse : reverse;
}

console.log(reverseInteger(1234));    // ➤ 4321
console.log(reverseInteger(-567));    // ➤ -765
console.log(reverseInteger(1000));    // ➤ 1
console.log(reverseInteger(0));       // ➤ 0