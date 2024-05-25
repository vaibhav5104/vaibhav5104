#include <iostream>
using namespace std;

int accountBalanceAfterPurchase(int purchaseAmount) {
        
        int r = 100 - purchaseAmount;

        if(r % 10 < 5 && r % 10 != 5 && r %10 != 0){
            while(r % 10 != 0) {
            r--;
            }
        }else if(r % 10 >= 5 && r %10 != 0){
            while(r % 10 != 0) {
            r++;
            }
        }

        return r;


    }

int main() {

    int p;
    cin>>p;

    int res = accountBalanceAfterPurchase(p);

    cout<<"Result : "<<res<<endl;

    return 0;
}