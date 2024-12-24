#include <iostream>
#include <vector>
using namespace std;


    int findMin(vector<int>& nums) {

        int low = 0,high = nums.size() -1;

        while(low <= high){
            int mid = (low+high)/2;

            if(nums[low] < nums[high]){
                return low;
            }

            if(nums[low] > nums[mid]){
                if(nums[high] == nums[mid]){
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


    }


int main() {

    vector<int> input = {11,13,15,17,1};

    int result = findMin(input);

    cout<<"result is  : "<<result <<endl;

    return 0;
}