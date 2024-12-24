#include <iostream>
#include <vector>
using namespace std;

int lowerBound(vector<int> &arr, int n, int x) {
    int low = 0, high = n - 1;
    int ans = n;

    while (low <= high) {
        int mid = low + (high - low) / 2; // Avoid potential overflow
        if (arr[mid] >= x) {
            ans = mid;
            high = mid - 1; // Look for smaller index on the left
        } else {
            low = mid + 1; // Look on the right
        }
    }
    // Check if the found index is valid and contains the target value
    if (ans < n && arr[ans] == x) return ans;
    return -1; // Target not found
}

int upperBound(vector<int> &arr, int n, int x) {
    int low = 0, high = n - 1;
    int ans = n;

    while (low <= high) {
        int mid = low + (high - low) / 2; // Avoid potential overflow
        if (arr[mid] > x) {
            ans = mid;
            high = mid - 1; // Look for smaller index on the left
        } else {
            low = mid + 1; // Look on the right
        }
    }
    return ans; // No need to check bounds as `upperBound` is not used for direct indexing
}

int searchRange(vector<int>& nums, int target) {
    int n = nums.size();
    int lower = lowerBound(nums, n, target);

    // if (lower == -1) return {-1, -1}; // Target not found
    int upper = upperBound(nums, n, target);

    // return {lower, upper - 1}; // Adjust for 0-based indexing
    return {upper-lower}; // Adjust for 0-based indexing
}

int main() {

    vector<int> input = {1,2,3,4,5,6,6,6,6,6,6,7,8,9};
    int target = 6;    

    int result = searchRange(input,target);

    cout<<result<<endl;


    return 0;
}