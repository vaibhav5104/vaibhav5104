#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> generate(int numRows) {
        vector<vector<int>> nums(numRows);

        for(int i = 0; i<numRows;i++){
            int n = i+1;
            nums[i].resize(i+1);
            for(int j = 0; j<n;j++){
                if(j == 0 || j == n-1) nums[i][j] = 1;
                else nums[i][j] = nums[i-1][j] + nums[i-1][j-1];
            }
        }

        return nums;

}


int main() {


    vector<vector<int>> result = generate(5);

    for(int i = 0; i<5;i++){
        for(int j = 0; j<i+1;j++){
            cout<<result[i][j]<<" ";
        }
    }





    return 0;
}