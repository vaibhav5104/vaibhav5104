#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        // Initialize the binary search boundaries
        int start = 0, end = arr.size() - 1;
        // Variable to store the answer, initialized to the size of the array
        int ans = arr.size();
        
        // Perform binary search
        while (start <= end) {
            // Calculate the mid-point of the current range
            int mid = start + (end - start) / 2;
            
            // Calculate how many numbers are "missing" from the array up to index mid
            int missing = arr[mid] - (mid + 1);
            
            // If the number of missing numbers is greater than or equal to k
            if (missing >= k) {
                // Update the answer to the current mid (potential position of the kth missing number)
                ans = mid;
                // Move the end pointer to the left to search in the lower half
                end = mid - 1;
            } else {
                // Otherwise, move the start pointer to the right to search in the upper half
                start = mid + 1;
            }
        }
        
        // The kth missing number can be calculated as the position + k
        // (adjusted for how many numbers are already missing)
        return ans + k;
    }
};


int main() {
    Solution kthProblem;
    vector<int> arr = {2,3,4,7,11};

    cout<<"Result is : "<< kthProblem.findKthPositive(arr,5)<<endl;

    return 0;
}