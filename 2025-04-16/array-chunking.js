

// WAP given an array and chunk size, divide the arrays into many subarrays where each array is of length size.

// Example:-     chunk([1,2,3,4], 2)  ->   [[1,2],[3,4]]
//               chunk([1,2,3,4,5], 2)  ->   [[1,2],[3,4],[5]]
//               chunk([1,2,3,4,5,6,7,8], 3)  ->   [[1,2,3],[4,5,6],[7,8]]



function chunk(arr, size) {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        const chunk = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            chunk.push(arr[j]);
        }
        result.push(chunk);
    }

    return result;
}

console.log(chunk([1, 2, 3, 4], 2));                    // ➤ [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2));                 // ➤ [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));        // ➤ [[1, 2, 3], [4, 5, 6], [7, 8]]




// ANOTHER WAY

function chunk2(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunk2([1, 2, 3, 4], 2));                    // ➤ [[1, 2], [3, 4]]
console.log(chunk2([1, 2, 3, 4, 5], 2));                 // ➤ [[1, 2], [3, 4], [5]]
console.log(chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3));        // ➤ [[1, 2, 3], [4, 5, 6], [7, 8]]