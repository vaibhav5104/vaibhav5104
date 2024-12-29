#include <iostream>
#include <vector>
using namespace std;

/* int lowerBound(vector<int> &arr, int n, int x) {
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

int singleNonDuplicate(vector<int>& nums){

    for(int i = 0; i<nums.size();i++){
        
        int occurences = searchRange(nums,nums[i]);

        if(occurences == 1){
            return nums[i];
        }else{
            i += occurences - 1;
        }

    }

    return -1;

} */

int singleNonDuplicate(vector<int>& arr) {
    int n = arr.size(); //size of the array.

    //Edge cases:
    if (n == 1) return arr[0];
    if (arr[0] != arr[1]) return arr[0];
    if (arr[n - 1] != arr[n - 2]) return arr[n - 1];

    int low = 1, high = n - 2;
    while (low <= high) {
        int mid = (low + high) / 2;

        //if arr[mid] is the single element:
        if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
            return arr[mid];
        }

        //we are in the left:
        if ((mid % 2 == 1 && arr[mid] == arr[mid - 1])
                || (mid % 2 == 0 && arr[mid] == arr[mid + 1])) {
            //eliminate the left half:
            low = mid + 1;
        }
        //we are in the right:
        else {
            //eliminate the right half:
            high = mid - 1;
        }
    }

    // dummy return statement:
    return -1;
}



int main() {

    vector<int> input = {1,1,1,2,2,2,3,3,3,4,4,5,5,5,6,6,7,7};

    int result = singleNonDuplicate(input);

    cout<<"result is number  : "<<result<<endl;

    return 0;
}