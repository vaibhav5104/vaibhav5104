#include <iostream>
#include <chrono>
#include <vector>
using namespace std;

int numberOfSteps(int num) {
    int count = 0;
        while(num > 0){
            if(num % 2 == 0) {num = num / 2;
            count++;
            }
            else {num = num - 1;count++;}

        }

        return count;
    }

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int n;
    cin>>n;
    
    int result = numberOfSteps(n);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}