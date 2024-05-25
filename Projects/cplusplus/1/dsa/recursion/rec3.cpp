#include <iostream>
#include <vector>
using namespace std;
//Print sum of first n numbers

int sum_func(int n){

//     if(n <=1) return n;
// else 
//     return n+sum_func(n-1);

    if(n <1) return 0;
else 
    return n+sum_func(n-1);


}


int main() {

    int n ;
    cin>>n;

    cout<<sum_func(n)<<endl;

    return 0;
}