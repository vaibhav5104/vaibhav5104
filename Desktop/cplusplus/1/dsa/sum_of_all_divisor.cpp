#include <iostream>
using namespace std;

int sumOfAllDivisors(int n){
	int counts[n],count,sum=0;

    for(int i = 1; i<= n;i++){
        for(int j = 1; j<=i;j++){
        if(i%j == 0) sum = sum+j;
        }
    }


    return sum;
}

int main() {

    int n;
    cin>>n;
    int result = sumOfAllDivisors(n);
    cout<<result<<endl;

    return 0;
}