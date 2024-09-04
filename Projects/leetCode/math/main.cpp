/* #include <iostream>
#include <vector>
using namespace std;

int maxSubArray(vector<int>& nums) {

    int el,p=0,sum=0,n = nums.size();

    for (size_t i = 0; i < n; i++)
    {
        
        sum += nums[i];

        if(sum <= 0){
            sum = 0;
            if(el < 0) {
                el = nums[i];
            }
        }else if(sum >0 && nums[i] > 0){
            p = sum;
        }




    }
            



    }




int main() {

    // Your code here
    cout<<"HI";
    return 0;
} */

#include<bits/stdc++.h>
#include <iostream>
using namespace std;

int main() {

    unordered_set<int> var;
    for (int i = 1; i <= 10; i++) {
    var.insert(i);
  }




    return 0;
}