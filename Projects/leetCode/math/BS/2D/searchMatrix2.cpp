#include <iostream>
#include <vector>
using namespace std;

//Better soln
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int n = matrix.size();

    for (int i = 0; i < n; i++) {
        // Perform binary search in the current row
        int low = 0, high = matrix[i].size() - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (matrix[i][mid] == target) {
                return true; // Target found
            } else if (matrix[i][mid] < target) {
                low = mid + 1; // Search on the right side
            } else {
                high = mid - 1; // Search on the left side
            }
        }
    }

    return false; // Target not found in any row
}

// Optimul solution

bool searchElement(vector<vector<int>>& matrix, int target) {
    int n = matrix.size();
    int m = matrix[0].size();
    int row = 0, col = m - 1;

    //traverse the matrix from (0, m-1):
    while (row < n && col >= 0) {
        if (matrix[row][col] == target) return true;
        else if (matrix[row][col] < target) row++;
        else col--;
    }
    return false;
}


int main() {

    vector<vector<int>> matrix = {
        {1,3,5,7},{4,5,9,10},{2,4,7,9}
    };

    cout<<searchMatrix(matrix,10)<<endl;
    return 0;
}