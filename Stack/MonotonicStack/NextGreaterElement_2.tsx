// 1. Aapka function (Jo aapne likha hai)
function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n).fill(-1);
    const stack: number[] = [];

    for (let i = 2 * n - 1; i >= 0; i--) {
        const currentVal = nums[i % n];

        while (stack.length > 0 && stack[stack.length - 1] <= currentVal) {
            stack.pop();
        }

        if (i < n) {
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }
        }
        stack.push(currentVal);
    }
    return result;
}

const inputData = [1,2,3,4,3];
const output = nextGreaterElements(inputData);


console.log("Input: ", inputData);
console.log("Next Greater Elements: ", output);