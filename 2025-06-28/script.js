
// QUESTION 1

const input = [
    { key: 'sample 1', data: 'Data 1' },
    { key: 'sample 1', data: 'Data 1' },
    { key: 'sample 2', data: 'Data 2' },
    { key: 'sample 3', data: 'Data 3' }
];


const output = {
    "sample 1": [
        { key: 'sample 1', data: 'Data 1' },
        { key: 'sample 1', data: 'Data 1' }
    ],
    "sample 2": [
        { key: 'sample 2', data: 'Data 2' }
    ],
    "sample 3": [
        { key: 'sample 3', data: 'Data 3' }
    ]
};


//  MY SOLUTION

const myOutput = {

}

input.forEach(item => {
    if (myOutput[item.key]) {
        myOutput[item.key].push(item);
    } else {
        myOutput[item.key] = [item]
    }
})

// console.log(myOutput);





// Question 2

const input1 = {
    "fruit": [
        { key: 'fruit', data: 'apple' },
        { key: 'fruit', data: 'banana' },
        { key: 'fruit', data: 'mango' }
    ],
    "vegetable": [
        { key: 'vegetable', data: 'carrot' },
        { key: 'vegetable', data: 'spinach' }
    ],
    "grain": [
        { key: 'grain', data: 'rice' },
        { key: 'grain', data: 'wheat' }
    ]
};



const output1 = [
    { key: 'fruit', data: 'apple' },
    { key: 'fruit', data: 'banana' },
    { key: 'fruit', data: 'mango' },
    { key: 'vegetable', data: 'carrot' },
    { key: 'vegetable', data: 'spinach' },
    { key: 'grain', data: 'rice' },
    { key: 'grain', data: 'wheat' }
];




// MY Solution

const mydata = [];

for (let key in input1) {
    input1[key].forEach(item => mydata.push(item));
}

console.log(mydata);
