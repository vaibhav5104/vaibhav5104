#include <iostream>
using namespace std;

int countEven(int num){

    int temp,count = 0,sum;

    for(int i = 1; i<=num;i++){
        sum = 0;
        // if( i == 1) sum = i;
        // else sum = 0;
        temp = i;
        while(temp != 0){
            
            sum += temp%10;
            temp /= 10;
        }
        if(sum % 2 == 0) count++;
    }

    return count;

}


int main() {

    int n;
    cin>>n;

    int res = countEven(n);

    cout<<"result : "<<res<<endl;

    return 0;
}