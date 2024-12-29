#include <iostream>
#include <vector>
using namespace std;

    /* int findMin(vector<int>& arr) {

        int low = 0,high = arr.size() -1;

        while(low <= high){
            int mid = (low+high)/2;

            if(arr[low] < arr[high]){
                return low;
            }

            if(arr[low] > arr[mid]){
                if(arr[high] == arr[mid]){//11,13,15,0,1
                    return mid + 1;
                }else{
                high = mid;
                }
            }else if(arr[low] < arr[mid]){
                if(arr[mid + 1] < arr[mid]){
                    return mid + 1;
                }
                else {
                    low = mid + 1;
                }
            }
        }

        return -1;


    } */

   int findKRotation(vector<int>& arr) {
    int low = 0, high = arr.size() - 1;

    while (low < high) { // Use low < high for binary search
        int mid = low + (high - low) / 2; // To avoid overflow

        if (arr[mid] > arr[high]) { 
            // Minimum must be in the right part
            low = mid + 1;
        } else {
            // Minimum could be at mid or in the left part
            high = mid;
        }
    }

    if((arr.size() - low ) > arr.size()/2){
        return low;
    }else {
        return arr.size() - low ;
    }
}



int main() {

    vector<int> input = {5,1,2,3,4};

    int result = findKRotation(input);

    cout<<"result is  : "<<result <<endl;

    return 0;
}