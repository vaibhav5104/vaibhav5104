#include <iostream>
#include <vector>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
        

        int s = matrix.size();
    vector<vector<int>> m(s, vector<int>(s));

        // m.size() = matrix.size();


        for(int i = 0; i<s;i++){
            for(int j = 0; j<s;j++){
                m[i][j] = matrix[s-j-1][i];
            }
        }


        for(int i = 0; i<s;i++){
            for(int j = 0; j<s;j++){
                // m[i][j] = matrix[s-j][i];
                cout<<m[i][j];
            }

        }
        cout<<endl;
        
        


    }

int main() {

        // vector<vector<int>> m = [[1,2,3],[4,5,6],[7,8,9]];
        // int s = m.size();
        // cout<<m[1][2]<<endl;
        vector<vector<int>> m = {{1,2,3},{4,5,6},{7,8,9}};

        // rotate(m);

        

        cout<<m.begin()<<endl;
        cout<<m.end()<<endl;


    return 0;
}