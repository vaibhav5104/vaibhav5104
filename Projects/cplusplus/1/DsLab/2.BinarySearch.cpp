// #include <iostream>
// using namespace std;

// int main() {
//     int arr[1000];
//     int n, key ,i;
//     int p = 0;
    
//     cout<<"Enter size of an array: ";
//     cin>>n;
//     cout<<"Enter array : ";
//     for (i = 0; i < n; i++) {
//         cin>>arr[i];
//     }

//     cout<<"Enter key element : ";
//     cin>>key;

//     int first_num, last_num, mid_num;
//     first_num = 0;
//     last_num = n - 1;

//     while (first_num <= last_num) {
//         mid_num = (first_num + last_num) / 2;

//         if (key < arr[mid_num]) {
//             last_num = mid_num - 1;
//         } else if (key == arr[mid_num]) {
//             p = 1;
//             break;
//         } else {
//             first_num = mid_num + 1;
//         }
//     }

//     if (p == 1) {
//         cout<<key<<" is found at index "<<mid_num<<endl;
//     } else {
//         cout<<key<<" is not found"<<endl;
//     }
//     return 0;
// }

#include <iostream>
#include <vector>
using namespace std;

// class Solution {
// public:
//     int searchInsert(vector<int>& arr, int key) {
//     int p = 0;

//     int first_num, last_num, mid_num;
//     first_num = 0;
//     last_num = arr.size() - 1;
//     while (first_num <= last_num) {
//         mid_num = (first_num + last_num) / 2;
//         if (key < arr[mid_num]) {
//             last_num = mid_num - 1;
//         } else if (key == arr[mid_num]) {
//             p = 1;
//             break;
//         } else {
//             first_num = mid_num + 1;
//         }
//     }

//     cout<<"first_num : "<<first_num<<endl;
//     cout<<"last_num : "<<last_num<<endl;

//     if (p != 1) {
//         cout<<mid_num<<endl;

//         if(last_num == -1) mid_num = 0;
//         else if(first_num == arr.size()) mid_num = arr.size();
//         else if(first_num > mid_num) mid_num = first_num;
        
//     }    
//     return mid_num;
//     }
// };

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int low=0;
        int high=nums.size();
        int mid;
        if(target>nums[high-1]){
            return high;
        }
        while(low<=high){
              mid=(low+high)/2;
            if(nums[mid]==target){  
                return mid;
            }
          
            if(target<nums[mid]){     
            high=mid-1;    
            }else{
            low=mid+1;        
            }
          
        }
         return  low;
    }
};

int main() {

    Solution solution;
    // vector<int>  arr  = {1,3,5,6};
    vector<int>  arr  = {3,6,7,8,12,14,15,56};
    int target = 4;
    int result = solution.searchInsert(arr,target);
    cout<<result<<endl;


    return 0;
}