#include <iostream>
#include <math.h>
using namespace std;

int nthRoot(int n,int m){

    if (n == 0 || n == 1)
        return n; // Base cases: sqrt(0) = 0 and sqrt(1) = 1

    int low = 1, high = n, ans = 0;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (mid * mid == n) {
            return mid; // Perfect square
        } else if ( pow(mid,m) < n) {
            low = mid + 1;
        } else {
            high = mid - 1; // Search in the left half
        }
    }

    return -1; // Return the largest mid such that mid^2 <= n

}

int main() {

    int n = 9,m = 3;
    cout<<"result is : "<<nthRoot(n,m)<<endl;

    return 0;
}