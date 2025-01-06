#include <iostream>
#include <vector>
using namespace std;

vector<int> rotate(vector<int>& nums) {

    int l = nums[0];

    for(int i = 0; i<nums.size() - 1;i++){
        nums[i] = nums[i+1];
    }

    nums[nums.size() - 1] = l;

    return nums;

    }


int main() {

    vector<int> nums = {1,2,3,4,5,6,7};

    vector<int> res = rotate(nums);

    for(int i = 0; i<nums.size();i++){
        cout<<nums[i]<<" ";
    }

    return 0;
}