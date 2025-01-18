#include <iostream>
#include <algorithm>
#include<numeric>  
#include <vector>
using namespace std;
//same as allocMinNoOfPages
int func(vector<int>& nums, int k) {
        
    int n = nums.size(); //size of numsay.
    int students = 1;
    long long pagesStudent = 0;
    for (int i = 0; i < n; i++) {
        if (pagesStudent + nums[i] <= k) {
            //add pages to current student
            pagesStudent += nums[i];
        }
        else {
            //add pages to next student
            students++;
            pagesStudent = nums[i];
        }
    }
    return students;

}


int splitArray(vector<int>& arr, int m) {
    //book allocation impossible:
    int n = arr.size();
    if (m > n) return -1;

    int low = *max_element(arr.begin(), arr.end());
    int high = std::accumulate(arr.begin(), arr.end(), 0);
    while (low <= high) {
        int mid = (low + high) / 2;
        int students = func(arr, mid);
        if (students > m) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return low;
}

int main() {

    vector<int> nums = {7,2,5,10,8};
    int n = 5;
    int m = 2;
    int ans = splitArray(nums, m);
    cout << "The answer is: " << ans << "\n";
    return 0;

    return 0;
}