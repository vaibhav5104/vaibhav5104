#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

    int superPow(int a, vector<int>& b) {

        vector<int> vec = b;
        // vec.size() = b.size();
        int s = 0;
        
        for(int i = 0; i<b.size();i++){
            s +=vec[i] * pow(10,b.size()-i-1);
        }
        int result = pow(a,s) ;
        return result%1337;



    }

int main() {

    int num;
    cin>>num;

    bool res = isPowerOfTwo(num);

    cout<<"result : "<<res<<endl;

    return 0;
}