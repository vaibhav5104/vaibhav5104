#include <iostream>
#include <chrono>
using namespace std;

int xorOperation(int n, int start) {
        int k = 0,nums[n];

        for(int i = 0; i<n;i++){
            nums[i] = start + 2*i;
            k = k^nums[i];
        }

        return k;
    }

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int n,st;
    cin>>n;
    cin>>st;
    
    int result = xorOperation(n,st);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}