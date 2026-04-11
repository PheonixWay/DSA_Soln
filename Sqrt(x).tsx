function mySqrt(x: number): number {
    if (x < 2) return x; // 0 aur 1 ke liye direct return

    let low = 1;
    let high = Math.floor(x / 2); // Sqrt hamesha x/2 se chota ya barabar hota hai (for x >= 2)
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        
        // Overflow se bachne ke liye mid * mid <= x check karein
        // Ya fir TS mein seedha mid <= x / mid bhi likh sakte hain
        if (mid <= x / mid) {
            ans = mid;     // Potential answer mil gaya
            low = mid + 1; // Aur bada answer mil sakta hai kya?
        } else {
            high = mid - 1; // Ye zyada bada ho gaya, piche jao
        }
    }

    return ans;
}

// Test cases
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2 (Binary search 2.8 ko 2 kar dega)