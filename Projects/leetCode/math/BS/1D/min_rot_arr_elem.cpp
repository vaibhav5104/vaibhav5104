#include <iostream>
#include <vector>
using namespace std;


    /* int findMin(vector<int>& nums) {

        int low = 0,high = nums.size() -1;

        while(low <= high){
            int mid = (low+high)/2;

            if(nums[low] < nums[high]){
                return low;
            }

            if(nums[low] > nums[mid]){
                if(nums[high] == nums[mid]){//11,13,15,0,1
                    return mid + 1;
                }else{
                high = mid;
                }
            }else if(nums[low] < nums[mid]){
                if(nums[mid + 1] < nums[mid]){
                    return mid + 1;
                }
                else {
                    low = mid + 1;
                }
            }
        }

        return -1;


    } */

   int findMin(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;

    while (low < high) { // Use low < high for binary search
        int mid = low + (high - low) / 2; // To avoid overflow

        if (nums[mid] > nums[high]) { 
            // Minimum must be in the right part
            low = mid + 1;
        } else {
            // Minimum could be at mid or in the left part
            high = mid;
        }
    }

    // After the loop, low == high and points to the smallest element
    return nums[low];
}

int main() {

    vector<int> input = {1,13,15,17,1};

    int result = findMin(input);

    cout<<"result is  : "<<result <<endl;

    return 0;
}