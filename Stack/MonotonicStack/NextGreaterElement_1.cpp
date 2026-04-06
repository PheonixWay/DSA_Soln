#include <iostream>
#include <vector>
#include <stack>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        stack<int> st;
        unordered_map<int, int> ngeMap;

        // 1. Nums2 ko peeche se scan karke sabka Next Greater nikal lo
        // Time Complexity: O(M) jahan M nums2 ka size hai
        for (int i = nums2.size() - 1; i >= 0; i--) {
            int curr = nums2[i];

            // Stack se chote elements ko hatao (kyunki wo NGE nahi ho sakte)
            while (!st.empty() && st.top() <= curr) {
                st.pop();
            }

            // Agar stack khali hai toh koi bada nahi mila (-1)
            if (st.empty()) {
                ngeMap[curr] = -1;
            } else {
                ngeMap[curr] = st.top();
            }

            // Current ko stack mein daalo taaki wo aage kaam aa sake
            st.push(curr);
        }

        // 2. Nums1 ke liye map se answer collect karo
        // Time Complexity: O(N) jahan N nums1 ka size hai
        vector<int> ans;
        for (int x : nums1) {
            ans.push_back(ngeMap[x]);
        }

        return ans;
    }
};

int main() {
    Solution sol;

    // Test Case:
    // nums1 ke elements nums2 mein kahan hain aur unka next greater kya hai
    vector<int> nums1 = {4, 1, 2};
    vector<int> nums2 = {1, 3, 4, 2};

    /* Dry Run Logic:
       4 in nums2 -> right mein 2 hai (chota hai) -> Result: -1
       1 in nums2 -> right mein 3, 4, 2 hain -> Pehla bada: 3
       2 in nums2 -> right mein kuch nahi hai -> Result: -1
    */

    vector<int> result = sol.nextGreaterElement(nums1, nums2);

    cout << "Next Greater Elements: [ ";
    for (int x : result) {
        cout << x << ", ";
    }
    cout << "]" << endl;

    return 0;
}