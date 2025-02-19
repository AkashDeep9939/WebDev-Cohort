// for each pollyfills 

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        const originalArr = this; // current Object ki taraf point kerta hai

        for(let i = 0; i < originalArr.length; i++) {
            userFn(originalArr[i], i);
        }
    };
}

const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function does not exist on arr variable

// Real Signature ko samjo - No return, function input, value, index
// call my fn for every value

const ret = arr.myForEach(function (value, index) {
    console.log(`My for Each Value at Index ${index} is ${value}`);
})

console.log(`Ret is `, ret);
