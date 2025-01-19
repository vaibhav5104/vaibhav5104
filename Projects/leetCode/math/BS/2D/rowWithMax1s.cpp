#include <iostream>
#include <vector>
using namespace std;

int lowerBound(vector<int> arr, int n, int x) {
    int low = 0, high = n - 1;
    int ans = n;

    while (low <= high) {
        int mid = (low + high) / 2;
        // Maybe an answer
        if (arr[mid] >= x) {
            ans = mid;
            // Look for a smaller index on the left
            high = mid - 1;
        } else {
            low = mid + 1; // Look on the right
        }
    }
    return ans;
}

int rowWithMax1s(vector<vector<int>> &arr) {
    int n = arr.size();
    if (n == 0) return -1; // Handle empty matrix

    int m = arr[0].size();
    int cnt_max = 0, index = -1;

    for (int i = 0; i < n; i++) {
        int cnt_ones = m - lowerBound(arr[i], m, 1); // Pass `m`, not `n`
        if (cnt_ones > cnt_max) {
            cnt_max = cnt_ones;
            index = i;
        }
    }

    return index;
}

int main() {

    vector<vector<int>> matrix = {
        {0,0,1,1,1},
        {0,0,0,0,1},
        {0,0,1,1,1},
        {1,1,1,1,1}
    };

    cout<<"Result is : "<<rowWithMax1s(matrix)<<endl;

    return 0;
}