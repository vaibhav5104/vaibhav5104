#include <iostream>
#include <chrono>
#include <vector>
using namespace std;
//Print factorial n 

vector<long long> factorialNumbers(long long n) {
    vector<long long> result;

    long long fact = 1;
    int i = 1;
    while (fact <= n) {
        result.push_back(fact);
        ++i;
        fact *= i;
    }

    return result;
}



int main() {
    auto start = std::chrono::high_resolution_clock::now();

    long long n ;
    cin>>n;

    vector<long long> res = factorialNumbers(n);

    for(auto it = res.begin();it != res.end();it++ ){
        cout<<*it<<" ";
    }

    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    

    return 0;
}