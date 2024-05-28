#include <iostream>
#include <vector>
using namespace std;


/* std::vector<int> */ void InsSort(std::vector<int>& arr) {
    int n = arr.size();
    int key;
    for (int i = 1; i < n; ++i) {  // Start from 1 since the first element is trivially sorted
        key = arr[i];
        int j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    // return arr;
}



int missingNumber(vector<int>& nums) {
        InsSort(nums);
        int k = 0;

        for(int i = 0; i<nums.size();i++){
            

            if(nums[i+1] != nums[i] + 1) {k = nums[i] + 1; break;}
            else if(i == nums.size() - 1){
                k = nums[i] + 1;
            }

        }

        return k;
    }

int main() {

    vector<int> nums = {1,2,3,6,7,8};

    int result = missingNumber(nums);

    cout<<"Result : "<<result<<endl;

    return 0;
}