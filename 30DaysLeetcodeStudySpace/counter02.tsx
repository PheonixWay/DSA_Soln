/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n:number) {
    
    return function():number {
        return n++;
    };
};


const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11

