#include <iostream>
#include <vector>
using namespace std;

vector<int> sumZero(int n){
    int temp=n;
    vector<int> vec[n] = {};

    for(int i = 0; i<n;i++){
        if(i < n/2 ){
            vec->push_back(-temp);
            temp--;
        }else if(i > n/2){
            temp++;
         vec->push_back(temp);
         

        }else if(n%2 == 0) {
            temp++;
            vec->push_back(temp);}
        else vec->push_back(0);
    }

    return *vec;

}

int main() {

    int n;
    cin>>n;

    vector<int> res = sumZero(n);

    for(int i = 0; i<n;i++){
        cout<<res[i]<<" ";
    }

    return 0;
}