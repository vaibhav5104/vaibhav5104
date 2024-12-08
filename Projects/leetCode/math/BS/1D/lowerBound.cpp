#include <iostream>
#include <vector>
#include <chrono>
using namespace std;

// lowerbound : smallest index such that arr[index] >= x
    // example: arr [] = {1,2,4,6,8,12,12,12,15} target=12
    // answer is index: 5


int lowerBound(vector<int> arr, int n, int x) {
    int low = 0, high = n - 1;
    int ans = n;

    while (low <= high) {
        int mid = (low + high) / 2;
        // maybe an answer
        if (arr[mid] >= x) {
            ans = mid;
            //look for smaller index on the left
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
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
    

int main(){
    
    auto start = std::chrono::high_resolution_clock::now();
    
    vector<int> arr = {1,3,5,7,9,11,14,18,20};
    int result = lowerBound(arr,9,10);

    cout<<"Result is : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;
    return 0;
}