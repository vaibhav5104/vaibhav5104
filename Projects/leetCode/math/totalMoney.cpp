#include <iostream>
using namespace std;

int totalMoney(int n){
    int k,count = 0,sum = 0;

    for(int i = 1; i <= n;i++){
        count++;
        sum = sum + count;
        if(i%7 == 0) {
            k = i/7;
            count = k ;}
    }

    return sum;

}


int main() {

    int num;
    cin>>num;

    int res = totalMoney(num);
    cout<<"Result : "<<res<<endl;

    return 0;
}










