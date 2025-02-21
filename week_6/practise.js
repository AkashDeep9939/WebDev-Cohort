// define a new function inside a Function.prototype jiska name function hai which took name and console log log name took from function
Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`);
}

function greet(name) {
    return 'Akash';
}

greet.describe(); // jo function call kare ga describe ushi ko execute kare ga O/P: Function name is greet

function add(a, b) { // function decleration
    return a+b;
}

const substract = function(a, b) { // function expression
    return a-b;
}

const multiply = (a, b) => a*b; // arrow function

function applyOperation(a, b, operation) { // first class function function can go to parameter and funtion and return function
    return operation(a, b) // function signature
}

const result = applyOperation(5,4, (x, y) => x/y) 

/*****************************************************/

function createCounter(){
    let count = 0;
    return function() { // can acess out side variable because of closure
        count++;
        return count
    }
}

(function(){
    console.log("Akash"); // IIFE function;
})()

const counter = createCounter()
console.log(counter());

function onef() {
    let myName = "hitesh"
}

console.log(myName) // my name is not in scope

