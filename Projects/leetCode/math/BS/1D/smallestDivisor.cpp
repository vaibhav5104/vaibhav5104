#include <iostream>
#include <vector>
#include <math.h>
#include <algorithm>
using namespace std;

int smallestDivisor(vector<int>& nums, int threshold) {
    int low = 1, high = *max_element(nums.begin(), nums.end()), ans;

    // If we can only eat 1 pile per hour, the minimum speed is the largest pile
    if (threshold == nums.size()) return high;                                            

    while (low <= high) {
        int mid = low + (high - low) / 2;
        long long sum = 0; // Use long long to avoid overflow

        // Calculate the total hours needed at speed `mid`
        for (int i = 0; i < nums.size(); i++) {
            sum += ceil((double)nums[i] / mid);
            if (sum > threshold) break; // No need to continue if hours exceed limit
        }

        if (sum <= threshold) { // If within `h` hours, try a smaller speed
            ans = mid;
            high = mid - 1;
        } else { // If more hours needed, increase speed
            low = mid + 1;
        }
    }

    return ans; // Return the minimum eating speed found
    }

int main() {

    // Your code here

    return 0;
}