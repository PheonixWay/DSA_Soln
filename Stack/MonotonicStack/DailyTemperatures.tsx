function dailyTemperatures(temperatures:number[]):number[] {
    const n = temperatures.length;
    const answer: number[] = new Array(n).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        const currentTemp = temperatures[i];

        while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()!;
            answer[prevIndex] = i - prevIndex;
        }

        stack.push(i);
    }

    return answer;
}

// // Brute Force Approach
// function dailyTemperatures(temperatures:number[]):number[] {
//     const answer:number[]=new Array(temperatures.length).fill(0);

//     for (let i = 0; i < temperatures.length; i++) {
//         for (let j = i + 1; j < temperatures.length; j++) {
//             if(temperatures[j]>temperatures[i]){
//                 answer[i]=j-i;
//                 break;
//             }
        
//         }
//     }
//     return answer;
// }

 const temperatures: number[] = [73,74,75,71,69,72,76,73];

 const ans:number[]=dailyTemperatures(temperatures);

 console.log(`Input Temperatures :- ${temperatures}`);
 console.log(`Output Answer :- ${ans}`);