#include <iostream>
#include <vector>
#include <chrono>
using namespace std;

// upperBound : smallest index such that arr[index] > x
    // example: arr [] = {1,2,4,6,8,12,12,12,15} target=12
    // answer is index: 8
    
int upperBound(vector<int> &arr, int x, int n) {
    int low = 0, high = n - 1;
    int ans = n;

    while (low <= high) {
        int mid = (low + high) / 2;
        // maybe an answer
        if (arr[mid] > x) {
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

int main(){
    
    auto start = std::chrono::high_resolution_clock::now();
    
    vector<int> arr = {1,3,5,7,9,11,14,18,20};
    int result = upperBound(arr,13,10);

    cout<<"Result is : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}