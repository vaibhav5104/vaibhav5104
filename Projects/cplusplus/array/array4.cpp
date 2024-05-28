#include <iostream>
#include <vector>
using namespace std;


/* vector<int> */ void Delete(vector<int>& nums,int i){
for (int k = i; k < nums.size(); k++)
    {
        nums[k] = nums[k + 1];
    }
        // nums[ nums.size() - 1] = i*2;
            nums.pop_back();




    // return nums;

}


int  removeDuplicates(vector<int>& nums) {
        // int k = 0;
        for(int i = 0; i<nums.size();i++){

            for(int j = 0; j<i;j++){
                if(nums[i] == nums[j]) {Delete(nums,i); 
                // if(i != nums.size() - 1)
                i = i - 1;}
            // }
                // if(nums[i] == nums[j]) {Delete(nums,i);k++;}
            }

        }

        return nums.size();
        // return k;

    }

int main() {

    vector<int> nums = {0,0,1,1,1,2,2,3,3,4};
    // vector<int> nums = {1,1,2};
    // nums.size() = 8;

    // for(int i = 0; i<nums.size();i++){
        // 
    // }

    int result = removeDuplicates(nums);
    // int result = removeDuplicates(nums);


    // cout<<"Result : "<<result<<endl;
    // for(int i = 0; i<result.size();i++){
        // cout<<result[i];
    // }
    // cout<<result<<endl;

    return 0;
}