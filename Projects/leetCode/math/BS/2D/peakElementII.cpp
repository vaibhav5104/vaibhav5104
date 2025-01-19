#include <iostream>
#include <vector>
using namespace std;

vector<int> findPeakGrid(vector<vector<int>>& mat) {
        int n = mat.size(), m = mat[0].size();
        int low = 0, high = m - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            // Find the row with the maximum value in the current column
            int maxRow = 0;
            for (int i = 1; i < n; i++) {
                if (mat[i][mid] > mat[maxRow][mid]) {
                    maxRow = i;
                }
            }

            // Check peak conditions
            int left = (mid > 0) ? mat[maxRow][mid - 1] : -1;
            int right = (mid < m - 1) ? mat[maxRow][mid + 1] : -1;

            if (mat[maxRow][mid] > left && mat[maxRow][mid] > right) {
                return {maxRow, mid}; // Peak found
            } else if (mat[maxRow][mid] < left) {
                high = mid - 1; // Move to the left half
            } else {
                low = mid + 1; // Move to the right half
            }
        }

        return {-1, -1}; // No peak found (should not happen in valid input)
    }

int main() {

    vector<vector<int>> mat = {
        {10,20,20},{10,20,40},{12,12,12}
    };

    vector<int> result = findPeakGrid(mat);
    cout<<result[0]<<" "<<result[1]<<endl;

    return 0;
}