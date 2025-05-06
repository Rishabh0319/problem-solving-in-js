// Q-> Write a function that return a number of vowels used in a string
// vowels are the characters 'a', 'e', 'i', 'o', 'u'

// example
// vowels('Hi there!')  ->   // 3
// vowels('How are you?')  ->   // 5
// vowels('Coding Money!')  ->   // 4
// vowels('why?')  ->   // 0


// first way to approach the problem is by using regular expression
function checkVowels(str) {
    let result = str.match(/[aeiou]/gi);
    return result ? result.length : 0;
}
console.log(checkVowels("How are You!"));





// another way 

function checkVowels2(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }

    return count;
}

console.log(checkVowels2('I love to write code in javascript !!!'));
