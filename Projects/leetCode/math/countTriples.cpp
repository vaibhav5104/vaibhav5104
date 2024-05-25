#include <iostream>
#include <math.h>
using namespace std;

int countTriples(int n){

    int count = 0,j;

    for(int i = 1; i<=n;i++){
        j = 1;

        while(i+j <= n){
            
            cout<<"i : "<<i<<endl;
            cout<<"j : "<<j<<endl<<endl;
            if(n - i + 1 == sqrt(pow(i,2) + pow((i+j),2))) count += 2;
        j++;
        }
    
    }

    return count;



}

int main() {

    int num;
    cin>>num;

    int result = countTriples(num);

    cout<<"Result : "<<result<<endl;

    return 0;
}