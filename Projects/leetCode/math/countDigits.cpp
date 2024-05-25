#include <iostream>
#include <chrono>
#include <vector>
using namespace std;

int countDigits(int num){
    int ld,count = 0;
    vector<int> vec = {};
        int temp = num;


    while(temp > 0){

        ld = temp%10;

        if(num%ld == 0){
            count++;
            
            for(int i = 0; i<vec.size();i++){
                if(ld == vec[i]) {count--;
                vec.pop_back();
                break;
                }else vec.push_back(ld);
            }
        }
        temp = temp/10;
    }

    return count;

}

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int n;
    cin>>n;
    
    int result = countDigits(n);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}