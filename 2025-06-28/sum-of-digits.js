
let number = 24133;

function sumOfDigits(num) {
    let numberInString = num.toString();
    let splitedNumberArr = numberInString.split("");
    let sumOfDigits = 0;
    splitedNumberArr.forEach(item => sumOfDigits += parseInt(item))
    return sumOfDigits;
}

console.log(sumOfDigits(number));



function sumOfDigits2(num) {
    let sumOfDigit = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        sumOfDigit += lastDigit;
        num = Math.floor(num / 10);
    }

    return sumOfDigit;
}

console.log(sumOfDigits2(number));
