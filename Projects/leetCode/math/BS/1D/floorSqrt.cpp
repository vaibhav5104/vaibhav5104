#include <iostream>
using namespace std;

int floorSqrt(int n) {
    if (n == 0 || n == 1)
        return n; // Base cases: sqrt(0) = 0 and sqrt(1) = 1

    int low = 1, high = n, ans = 0;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (mid * mid == n) {
            return mid; // Perfect square
        } else if (mid * mid < n) {
            ans = mid;  // Update answer and search in the right half
            low = mid + 1;
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    return ans; // Return the largest mid such that mid^2 <= n
}



int main() {

    int ip = 35;

    int result = floorSqrt(ip);

    cout<<result<<endl;

    return 0;
}