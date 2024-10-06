#include <iostream>
#include <vector>
using namespace std;


int lowerBound(vector<int> arr,int x){

    int low = 0,high=arr.size()-1;

    while(low<=high){
        int middle = low + (high - low) / 2;
        if(arr[low]<x && arr[high]>x){

            if(arr[middle]>x){
                high = middle;
            }    else{
                low = middle+1;
            }


        }else if(arr[low]>=x){
            return low;
        }else if(arr[high] < x){
            return -1;
        }


        /* 
        int low = 0, high = arr.size() - 1;

while (low <= high) {
    int middle = low + (high - low) / 2;
    
    // Adjust low and high based on the middle element
    if (arr[middle] == x) {
        return middle;  // Found the exact element
    }
    if (arr[middle] < x) {
        low = middle + 1;  // Search in the right half
    } else {
        high = middle - 1;  // Search in the left half
    }
}

// After the loop, low will point to the smallest element greater than x
// and high will point to the largest element smaller than x
return high;  // If x is not found, this returns the position of the closest smaller element

 */



    }


}


int main(){

    
    vector<int> arr = {1,3,5,7,9,11,14,18,20};
    int result = lowerBound(arr,10);

    cout<<"Result is : "<<result<<endl;


    return 0;
}