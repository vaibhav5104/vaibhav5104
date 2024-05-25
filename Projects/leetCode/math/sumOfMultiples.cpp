#include <iostream>
#include <chrono>
#include <vector>
using namespace std;

int sumOfMultiples(int n) {
        vector<int> vec = {};
        int sum = 0;
        for(int i = 1; i<=n;i++){
           if(i % 3 == 0 || i % 5 == 0|| i % 7 == 0) {vec.push_back(i);
            sum = sum + vec[vec.size() - 1];
            }
            
        }
        for(auto it = vec.begin(); it !=vec.end();it++){
            cout<<*it<<endl;
        }
        // for(int i = 0; i<vec.size();i++){
        //     sum = sum + vec[i];
        // }

        return sum;
    }

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int n;
    cin>>n;
    
    int result = sumOfMultiples(n);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}