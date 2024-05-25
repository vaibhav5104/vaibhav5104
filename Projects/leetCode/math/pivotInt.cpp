#include <iostream>
#include <chrono>
#include <vector>
using namespace std;

int pivotInteger(int n) {
        int k = -1,sum1,sum2;

    if( n == 1) k = 1;
    else {
    for(int i = 1; i<=n;i++){
        sum1 = ((i)*(i+1))/2;
        sum2 = (((n-i + 1))*(i+n))/2;
        if(sum1 == sum2) {k = i;
        break;
        }
    }
    }

        return k;
    }

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int n;
    cin>>n;
    
    int result = pivotInteger(n);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}