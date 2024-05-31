#include <iostream>
#include <vector>
using namespace std;

int majorityElement(vector<int>& nums) {

        int temp,j=0;
    for (int i = 0; i < nums.size() - 1; ++i) {
        for (int j = 0; j < nums.size() - i - 1; ++j) {
            if(nums[j] > nums[j +1] ) {
                temp = nums[j] ;
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }

    if(nums.size() == 1) return nums[0];

    for(int i = 0; i<nums.size();i++){
        if(i != 0) {
        if(nums[i] == nums[i-1]) j++;
        else if(j > nums.size() / 2) return nums[i];
        }
    }

    return -1;

    }


int main() {

    // Your code here

    return 0;
}