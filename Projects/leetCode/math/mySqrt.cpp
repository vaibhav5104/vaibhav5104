#include <iostream>
#include <vector>
using namespace std;

int main() {

    int res = 0,x = 5;
        vector<int> vec;
        for(int i = 1; i <= x;i++){
            if(x%i == 0)  vec.insert(vec.end(),i);
        }

        for(int i = 0; i < vec.size() ;i++){
                        if(vec[i]*vec[i] == x) {res =  vec[i];break;}

            else if(vec[i]*vec[i] > x) {res =  vec[i - 1];break;}
        }

        for(auto it = vec.begin();it<vec.end();it++){
            cout<<*it<<" ";
        }
        cout<<endl;
        cout<<res<<endl;

    return 0;
}