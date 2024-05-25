#include <iostream>
using namespace std;

int alternateDigitSum(int n){

    int temp1 = n,count = 0;
    int temp2 = n,sum = 0;

    while (temp1 != 0){

        temp1/= 10;
        count++;

    }


    // if(count%2 == 0){

        for(int i = 1; i<=count;i++){
            if((i %2 == 0 && count%2 == 0) || (i%2 != 0 && count%2 != 0)) {
            sum += temp2 %10;
            temp2/=10;
            }else {
            sum -= temp2 %10;
            temp2/=10;
            }
        }
    // }else 

    return sum;


}


int main() {

    int num;
    cin>>num;

    int res = alternateDigitSum(num);

    cout<<"Result : "<<res<<endl;

    return 0;
}