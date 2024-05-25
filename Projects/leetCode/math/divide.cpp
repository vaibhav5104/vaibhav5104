#include <iostream>
using namespace std;

int main() {

    int dividend = 2147483648,divisor = 1;
    if(dividend == 2147483648) dividend = dividend - 1;
    // if(dividend == -(__INT_MAX__)) dividend += 1;
    int res =  dividend/divisor;

    cout<<res<<endl;

    return 0;
}