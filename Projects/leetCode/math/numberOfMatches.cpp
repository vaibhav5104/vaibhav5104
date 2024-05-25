#include <iostream>
#include <chrono>
using namespace std;

int numberOfMatches(int n) {
        int M,sum = 0;
        while(n>1){
        if(n%2 == 0){
                M = n/2;
                sum = sum+M;
                n = n/2;
            
        }else {
            
            M = (n-1)/2;
            sum = sum+M;
            n = ((n-1)/2) + 1;
            
        }
        }
        return sum;
    }

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int n;
    cin>>n;
    int result = numberOfMatches(n);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}