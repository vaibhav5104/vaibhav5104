#include <iostream>
#include <vector>
using namespace std;


int findMaxConsecutiveOnes(vector<int>& nums) {
        int j=0,k=0;

        for(int i = 0; i<nums.size();i++){
            if(nums[i] == 1){
                j++;
                if(j > k) k = j;
            }else {
                j = 0;
            }
        }

        return k;

    }



int main() {

    // Your code here

    return 0;
}