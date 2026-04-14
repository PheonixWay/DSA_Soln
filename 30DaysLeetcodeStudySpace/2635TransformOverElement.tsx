function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const returnedArray: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        const transformedValue = fn(arr[i], i);
        
        returnedArray.push(transformedValue);
    }
    return returnedArray;
};

// --- 🧪 TEST SUITE ---

// Test Case 1: Simple Increment (Value transformation)
const arr1 = [1, 2, 3];
const plusOne = (n: number) => n + 1;
console.log("Test 1 (plusOne):", map(arr1, plusOne)); 
// Expected Output: [2, 3, 4]

// Test Case 2: Using Index (Value + Index)
const arr2 = [1, 2, 3];
const plusI = (n: number, i: number) => n + i;
console.log("Test 2 (plusI):", map(arr2, plusI)); 
// Expected Output: [1, 3, 5] (1+0, 2+1, 3+2)

// Test Case 3: Constant Return (Ignoring input)
const arr3 = [10, 20, 30];
const constant = () => 42;
console.log("Test 3 (constant):", map(arr3, constant)); 
// Expected Output: [42, 42, 42]

// Test Case 4: Empty Array (Edge Case)
console.log("Test 4 (Empty):", map([], (n) => n + 1)); 
// Expected Output: []