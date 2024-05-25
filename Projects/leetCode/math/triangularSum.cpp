#include <iostream>
#include <vector>
using namespace std;

int triangularSum(vector<int>& nums) {

    vector<int> vec = nums;

        for(int i = 0; i<vec.size();i++){
            

            vec[i] = (vec[i] + vec[i+1]) % 10;
            cout<<"vec["<<i<<"] : "<<vec[i]<<endl;

            if(i == vec.size() - 2) {
                i = -1;
                // vec.size() = vec.size() - 1;
                vec.pop_back();
            if(vec.size() == 1) break;

            }

        }

        return vec[0];

}

int main() {

    vector<int> v = {1,2,3,4,5};

    int res = triangularSum(v);

    cout<<"Result : "<<res<<endl;

    return 0;
}