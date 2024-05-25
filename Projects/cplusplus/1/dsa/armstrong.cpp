#include <iostream>
using namespace std;
#include <bits/stdc++.h>


bool checkArmstrong(int n){
    int sum = 0,x =log10(n)+1,lastdigit,temp;
    temp = n;
    cout<<x<<endl;

    while(n!=0){
        lastdigit = n%10;
        sum = sum + pow(lastdigit,x);
        n = n/10;
    }

    if(sum == temp) return 1;
    else return 0;

}


int main() {

    int n;
    cin>>n;

    int result = checkArmstrong(n);
    cout<<result<<endl;

    return 0;
}