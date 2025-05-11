


let str = "hello world";
let str2 = "hello friends my name is Rishabh Tripathi and i love to Write Code in javascript"


function replace(sentence, character, index) {
    return sentence.substr(0, index) + character + sentence.substr(index + 1);
}

function removeDuplicateFromString(sentence) {
    let arraySet = new Set([]);
    let writePointer = 0;
    let readPointer = 0;

    while (readPointer < sentence.length) {
        if (!arraySet.has(sentence[readPointer])) {
            arraySet.add(sentence[readPointer]);
            sentence = replace(sentence, sentence[readPointer], writePointer);
            writePointer++;
        }
        readPointer++;
    }
    return sentence.substr(0, writePointer);
}

console.log(removeDuplicateFromString(str));
console.log(removeDuplicateFromString(str2));
