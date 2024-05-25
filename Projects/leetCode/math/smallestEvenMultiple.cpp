#include <iostream>
#include <chrono>
using namespace std;

    int smallestEvenMultiple(int n) {
        if (n % 2 == 0) //return num if it is already odd
       {
           return n;
       } 
       else//if the IF condition is false then return 2* n which would make it even
       {
             return 2 * n;
       }
    }


int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int n;
    cin>>n;
    int result = smallestEvenMultiple(n);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    
    

    return 0;
}
