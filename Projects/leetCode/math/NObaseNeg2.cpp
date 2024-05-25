#include <iostream>
#include <math.h>
#include <bitset>
using namespace std;


string baseNeg2(int n){

    int sum = 0;
    for(int i = 0; i<n;i++){
        sum += pow(-2,i);
    }

    cout<<std::bitset<sizeof(int)*8>(sum)<<endl;

    return to_string(sum);

}

int main() {

    int num;

    string result = baseNeg2(3);

    cout<<result<<endl;

    return 0;
}