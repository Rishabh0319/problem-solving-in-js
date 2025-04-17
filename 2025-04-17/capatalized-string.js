// WAF that accept a string the function should capatilized the first latter of each world in the string then return the capatalized string

// Example:-          capatalized("hello programmers my name is rishabh and i love coding")  -> Hello Programmers My Name Is Rishabh And I Love Coding


function Capatalize(str) {
    let capatalized = str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return capatalized;
}

console.log(Capatalize("hello programmers my name is rishabh and i love coding"));





// ANOTHER WAY


function CapatilizeWithoutPredefineMethods(str) {
    let result = "";
    let nextCapatilize = true;    // flag to track next word need to capitilize after space

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ') {
            nextCapatilize = true;
            result += char;
        } else {
            if (nextCapatilize && (char >= 'a' && char <= 'z')) {
                let capitalChar = String.fromCharCode(char.charCodeAt(0) - 32);
                result += capitalChar;
                nextCapatilize = false;
            } else {
                result += char;
                nextCapatilize = false;
            }
        }
    }
    return result;
}


console.log(CapatilizeWithoutPredefineMethods("hello programmers my name is rishabh and i love coding"));
