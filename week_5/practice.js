const { ChangeCircle, CleanHands } = require("@mui/icons-material");

// create array containing different type of array
 const teas = [
    "Green tea",
    "Black tea",
    "oolang tea",
    "white tea",
    "Herbal tea",
 ];

 console.log(teas)

 // Problem Add "Chamomile Tea" to the existing list of teas
 teas.push("Chamomile Tea")

 // Problem: Remove "Oolang tea " from the list of teas.

 const index = teas.indexOf("oolang tea");
 if(index > -1) {
    teas.splice(index, 1);
 }

 // Problem : Filter the list to only include teas that are caffinated.
 const caffinated = teas.filter((teas) => teas !== "Herbal tea");

 // Problem: Sort the list of teas in alphabetical order.
 const ans = teas.sort();
 console.log(ans);

// Problem: use a for loop to print each type of tea in the array
for(let i = 0; i < teas.length; i++) {
    console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffinated (excluding "Herbal Tea").

let caffinatedTeas = 0;
for(let i = 0; i < teas.length; i++) {
    if(teas[i] !== "Herbal tea") {
        caffinatedTeas++;
    }
}

//Problem: Use a for loop to crete a new array with all tea names in uppercase

const uppercaseTea = []
for(let i = 0; i < teas.length; i++) {
    uppercaseTea.push(teas[i].toUpperCase())
}

// Problem: Use a for loop to find the tea name with the most character

let longestTea = ""
for(let i = 0; i < teas.length; i++) {
    if(teas[i],length > longestTea.length) {
        longestTea = teas[i]
    }
}

// Problem: Use a for loop to reverse the order of teas in the array.
const reverseArray = [] 
for(let i = teas.length; i > 0; i--) {
    reverseArray.push(teas[i]);
}

