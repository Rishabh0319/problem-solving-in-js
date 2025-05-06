/*

Problem Statement – Print Steps Pattern with Right-Side Padding
Write a JavaScript function named step(n) that takes a positive integer n as input.

The function should console log n strings, each representing a step in a left-aligned staircase pattern of # characters, where each string: Has exactly n characters, Begins with one or more # characters, And is padded with spaces ' ' on the right side to make the total length exactly n.

Example

step(5)           

'#    '
'##   '
'###  '
'#### '
'#####'

step(3)

'#    '
'##   '
'###  '

*/






function step(num) {
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 1; j <= num; j++) {
            if (j <= i)
                str += '#';
            else
                str += ' ';
        }
        console.log(`'${str}'`);
    }
}

step(3);
step(5);