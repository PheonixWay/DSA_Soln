type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentCount = init;

    return {
        increment: () => {
            return ++currentCount; 
        },
        decrement: () => {
            return --currentCount;
        },
        reset: () => {
            currentCount = init;
            return currentCount;
        }
    };
};


 const counter = createCounter(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset()); // 5
 console.log(counter.decrement()); // 4
