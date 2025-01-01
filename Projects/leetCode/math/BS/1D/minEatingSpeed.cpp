#include <iostream>
#include <math.h>
#include <cmath>
#include <algorithm>
#include <vector>
using namespace std;

int minEatingSpeed(vector<int>& piles, int h) {
    int low = 1, high = *max_element(piles.begin(), piles.end()), ans;

    // If we can only eat 1 pile per hour, the minimum speed is the largest pile
    if (h == piles.size()) return high;                                            

    while (low <= high) {
        int mid = low + (high - low) / 2;
        long long sum = 0; // Use long long to avoid overflow

        // Calculate the total hours needed at speed `mid`
        for (int i = 0; i < piles.size(); i++) {
            sum += ceil((double)piles[i] / mid);
            if (sum > h) break; // No need to continue if hours exceed limit
        }

        if (sum <= h) { // If within `h` hours, try a smaller speed
            ans = mid;
            high = mid - 1;
        } else { // If more hours needed, increase speed
            low = mid + 1;
        }
    }

    return ans; // Return the minimum eating speed found
    }

int main() {

    vector<int> piles = {1,2,5,9};
    int h = 6;

    int result = minEatingSpeed(piles,h);

    cout<<"Result is : "<<result<<endl;

    return 0;
}