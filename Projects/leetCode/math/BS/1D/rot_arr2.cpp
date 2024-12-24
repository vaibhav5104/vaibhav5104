#include <iostream>
#include <vector>
using namespace std;

bool search(vector<int>& nums, int target) {
    
    int low = 0, high = nums.size() - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (nums[mid] == target) {
            // cout<<mid<<endl;
            return true; // Target found
        }

        // Handle duplicates by skipping them
        while (low < mid && nums[low] == nums[mid]) {
            low++;
        }
        while (high > mid && nums[high] == nums[mid]) {
            high--;
        }

        // Check if the left half is sorted
        if (nums[low] <= nums[mid]) {
            // Check if target lies within the sorted left half
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1; // Move to the left half
            } else {
                low = mid + 1; // Move to the right half
            }
        } 
        // Otherwise, the right half is sorted
        else {
            // Check if target lies within the sorted right half
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1; // Move to the right half
            } else {
                high = mid - 1; // Move to the left half
            }
        }
    }

    return false; // Target not found
}

int main() {

    vector<int> input = {4,5,6,7,0,1,2};

    int result = search(input,0);

    cout<<"result is  : "<<result <<endl;

    return 0;
}