if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(userFn) {
        const result = [];

        for(let i =0; i < this.length; i++) {
            if(userFn(this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    };
}

let arr = [1, 2, 3, 4, 5, 6];

const n3 = arr.filter((e) => e % 2 == 0);
console.log(n3)

// custom pollyfills 
const n4 = arr.myFilter((e) => e % 2 == 0);
console.log(n4)