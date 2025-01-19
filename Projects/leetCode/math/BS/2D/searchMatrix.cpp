#include <iostream>
#include <vector>
using namespace std;

bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int n = matrix.size(),m = matrix[0].size();
    int low = 0,high = (n*m)-1;

    if(target < matrix[n-1][m-1] && target > matrix[0][0]) {
        while(low < high){
        int mid = (low + high)/2;
        int row = mid/m,col = mid % m;
        if(matrix[row][col] == target ) return true;
        else if(matrix[row][col] < target) low = mid + 1;
        else if(matrix[row][col] > target) high = mid - 1;
        }
    }
    return false;
}

int main() {

    vector<vector<int>> matrix = {
        {1,3,5,7},{10,11,16,20},{23,30,34,60}
    };

    cout<<searchMatrix(matrix,600)<<endl;

    return 0;
}