const obj1 = {
    lname: 'Deep',
    getFullname: function() {
        if(this.lname !== undefined) return `${this.fname} ${this.lname}`;
        return this.fname;
    },
};

const obj2 = {
    fname: 'Anirudh',
    lname: 'Jwala',
    getFullname: function() {
        if(this.lname !== undefined) return `${this.fname} ${this.lname}`;
        return this.fname; 
    },
};

// DRY - Do not repeat yourself
console.log(obj1.getFullname());
console.log(obj2.getFullname());