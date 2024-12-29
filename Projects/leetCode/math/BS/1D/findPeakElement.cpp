#include <iostream>
#include <vector>
#include <chrono>
using namespace std;

/* int findPeakElement(vector<int>& nums){

    int low=0,high=nums.size()-1;

    while (low<=high){
        
        int mid = (low+high)/2;
        cout<<mid<<endl;

        if(nums[mid] > nums[mid + 1] && nums[mid - 1]){
            return mid;
        }else if(nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]){
            low = mid + 1;
        }

    }

    return -1;
} */

int findPeakElement(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;

        // Check if the peak lies in the right or left part
        if (nums[mid] > nums[mid + 1]) {
            // Peak is on the left side, including mid
            high = mid;
        } else {
            // Peak is on the right side
            low = mid + 1;
        }
    }

    // After the loop, low == high and points to the peak element
    return low;
}

int main() {

    // vector<int> input = {1,2,1,3,5,6,4};
    auto start = std::chrono::high_resolution_clock::now();
    vector<int> input = {1,2,3,1};
    
    int result = findPeakElement(input);

    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    

    return 0;
}