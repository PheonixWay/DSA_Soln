function lengthOfLastWord(s: string): number {
    let length = 0;
    let i = s.length - 1;

    // Step 1: Piche se saare extra spaces ko skip karo
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Step 2: Ab jab tak letters mil rahe hain, count badhao
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}

// Test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4