#include <iostream>
#include <math.h>
using namespace std;

bool isPowerOfTwo(int n){

    bool result;
    for(int i = 0; i<n;i++){
        if(pow(4,i) == n) {result =  true;
        break;}
        else if(pow(4,i) > n) {result = false;
        break;}
        else ;
    }

    return result;

}


int main() {

    int num;
    cin>>num;

    bool res = isPowerOfTwo(num);

    cout<<"result : "<<res<<endl;

    return 0;
}