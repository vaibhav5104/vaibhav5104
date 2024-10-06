#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {

    int low = 0,high =  nums.size()-1;

    while(low <=high){
        int middle = (low+high)/2;
        if(nums[middle] > target) {
            high = middle-1;
        }else if(nums[middle] < target) {
            low = middle+1;
        }else {
            return middle;
        }
    }
    return -1;

    }

int main() {

    vector<int> nums = {12,23,324,522,1099};

    int result = search(nums,324); 

    cout<<"result : "<<result<<endl;



    return 0;
}