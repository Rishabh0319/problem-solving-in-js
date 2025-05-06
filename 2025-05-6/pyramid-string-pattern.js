/*

✅ Problem Statement – Print Pyramid Pattern with Centered # Characters

Write a JavaScript function called pyramid(n) that takes a positive integer n as input.

The function should console log n strings, where each string forms one level of a centered pyramid using the # character.


🔸 Rules & Structure:
Pyramid will have n levels (rows).

Each level will be a center-aligned row of # characters.
On both left and right sides, add spaces ' ' to keep the pyramid symmetrical.
The width of each row is always 2 * n - 1 characters.


Example

pyramid(3);

'  #  '
' ### '
'#####'

*/





function pyramid(n) {
    const mid = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let line = '';

        for (let col = 0; col < 2 * n - 1; col++) {
            if ((col >= mid - row) && (col <= mid + row))
                line += '#'
            else
                line += ' '
        }
        console.log(`'${line}'`);
        
    }
}

pyramid(5);
pyramid(8);