// objects use to group things in key value pair
const person = {
    x: 10,
    firstName: 'Akash',
    lastName: "Deep",
    nobbies: ['Coding', 'Gym'], // can use arrray
    isMarried:false, // boolen key value pair
    // can use function inside objects
    getFullName: function() {
        return 'Akash Deep'
    },
    // objects inside objects
    address : {
        hno: 1,
        street: 1,
        countryCode: 'IN',
        state: 'JH'
    }
}

console.log(person.address.state)

const remote = {
    color: 'black',
    brand: 'XYZ',
    dimension: {height:1, weidth:1},
    turnOff: function() {

    },
    volumeUp: function() {
        
    }
}