#include <iostream>
#include <vector>
#include <chrono>
using namespace std;

void checkZeroes(vector<int>& nums,int i,int j){

    // int j = i;
    // int k = i;
    if (j + 1 >= nums.size()) return; 

    if(nums[j+1] != 0){
        nums[i] = nums[j+1];
        nums[j+1] = 0;
    }else {
        if(j+1 < nums.size() - 1) checkZeroes(nums,i,++j);
        else ;
    }
    
}

vector<int> moveZeroes(vector<int>& nums) {
        int n = nums.size();

        for(int i = 0; i<n;i++){
            if(nums[i] == 0) checkZeroes(nums,i,i);
            // cout<<"i : "<<i<<endl;
        }

        return nums;
    }

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    vector<int> nums = {0,0,0,0,0,8,10,9,0};

    vector<int> result =  moveZeroes(nums);

        for(int i = 0; i<result.size();i++){
        cout<<result[i];
    }
    cout<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    

    return 0;
}