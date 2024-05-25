#include <iostream>
#include <vector>
using namespace std;

bool searchMatrix(vector<vector<int>> matrix, int target) {
        int r = matrix.size();
        int c = matrix[0].size();
        int mid = matrix[r/2][c/2];
        bool result = false; 

        if(mid == target) result = true;
        else if(mid > target) {
            // matrix.erase(matrix[r/2][c/2] ,matrix[r-1][c-1]);
            matrix.erase(matrix.begin() + r/2, matrix.end()); // Erase from r/2 to end of rows

        for(auto& row : matrix) {
            row.erase(row.begin() + c/2, row.end()); // Erase from c/2 to end of columns in each row
        }

            searchMatrix(matrix,target);
        }else if(mid < target) {
            // matrix.erase(matrix[0][0],matrix[r/2][c/2] );
            matrix.erase(matrix.begin(), matrix.begin() + (r/2) + 1); // erase rows

        for (auto& row : matrix) {
            row.erase(row.begin(), row.begin() + (c/2) + 1); // erase columns in each row
        }

            searchMatrix(matrix,target);}
        else ;

        return result;

    }   

int main() {

    vector<vector<int>> m = {{1,2,3},{4,5,6},{7,8,9}};
    int target = 3;
        bool res = searchMatrix(m,target);

        cout<<res<<endl;

    return 0;
}