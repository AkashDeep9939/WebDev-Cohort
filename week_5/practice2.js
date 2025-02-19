// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

const teas = {
    name: "Lemon tea",
    type: "Green",
    caffine: "low"
}

//Problem: Access and print the name and type of the tea objects

console.log(teas.name);
console.log(teas["type"]);


//Problem: Add a new property origin to the tea object
teas.origin = "Assam"

// Problem: change the caffine level of teas to "Medium".
teas.caffine = "Medium"

// Problem: Remove the type property from the tea objects
delete teas.type

// Problem: Check if the tea object has property origin
console.log("origin" in teas); // bataye ga origin exist kerta hai ya nahi

// Problem: Use a for...in loop to print all properties of the tea objects
for(let key in teas) {
    console.log(key + ": " + teas[key]);
}

// Problem: Create a nested object representating different types of teas and their properties.

const myTeas = {
    greenteas: {
        name: "Green Tea",
        cups: {
            one: "1",
            two: "2"
        }
    },
    blackTea: {
        name: "Black tea"
    }
}

// Problem : Create a copy of the tea objects

const teaCopy = {...teas} // shallow copy only first level copy
const anotherCopy = myTeas // refrence




