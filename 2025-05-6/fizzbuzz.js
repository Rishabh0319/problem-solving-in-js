/*
🧾 Problem Statement:

Write a JavaScript function that prints numbers from 1 to N.
- But for multiples of 3, print "fizz" instead of the number.
- For multiples of 5, print "buzz".
- For numbers which are multiples of both 3 and 5, print "fizzbuzz".
- For all other numbers, just print the number itself.

📌 Input: 
  A number N (end range of loop)

📌 Output:
  Console logs:
    - "fizz" for 3, 6, 9...
    - "buzz" for 5, 10, 20...
    - "fizzbuzz" for 15, 30...
    - Regular numbers for others

📊 Example: For N = 15
Output should be:

1
2
fizz        // 3 is multiple of 3
4
buzz        // 5 is multiple of 5
fizz        // 6 is multiple of 3
7
8
fizz        // 9 is multiple of 3
buzz        // 10 is multiple of 5
11
fizz        // 12 is multiple of 3
13
14
fizzbuzz    // 15 is multiple of both 3 and 5

🎯 Key Conditions to Check (in order):
1. If number is divisible by both 3 and 5 → "fizzbuzz"
2. If number is divisible only by 3 → "fizz"
3. If number is divisible only by 5 → "buzz"
4. Else → number itself

💡 Logic Tip:
Always check for both 3 and 5 **first**, because if you check 3 or 5 first,
they’ll catch numbers like 15 before you get a chance to label them as "fizzbuzz".

*/






function fizzbuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            console.log("fizzbuzz");
        else if (i % 3 === 0)
            console.log("fizz");
        else if (i % 5 === 0)
            console.log("buzz");
        else
            console.log(i);
    }
}

fizzbuzz(15);