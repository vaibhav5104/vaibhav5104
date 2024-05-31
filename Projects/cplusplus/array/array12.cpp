#include <iostream>
#include <vector>
using namespace std;


int singleNumber(vector<int>& nums) {
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


    for(int i = 0; i<nums.size();i++){
        // if(nums.size() == 1 || (i == 0 && nums[i] != nums[i+1]) || ((nums[i] == nums[i-1]) && (j == 0) && nums[i+1] != nums[i]) || (i == nums.size() - 1 && nums[i] != nums[i - 1] )){
        if((i == 0 && nums[i] != nums[i + 1]) || 
                (i == nums.size() - 1 && nums[i] != nums[i - 1]) || 
                (i > 0 && i < nums.size() - 1 && nums[i] != nums[i - 1] && nums[i] != nums[i + 1])){
                return nums[i];
            };
    }


    return -1;

}

int main() {

    // Your code here

    return 0;
}