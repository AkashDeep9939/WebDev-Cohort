class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullname() {
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person('Piyush', 'Garg');
const p2 = new Person('Akash', 'Kadlag');

console.log(p1.getFullname());
console.log(p2.getFullname());

