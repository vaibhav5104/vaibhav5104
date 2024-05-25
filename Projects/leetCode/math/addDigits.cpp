#include <iostream>
#include <chrono>
using namespace std;

int addDigits(int num) {
        int sum = 0;
        if(num < 10 ) sum = num;
        else {
int temp = num;
        while(temp != 0){
            if(temp%10 != 0)
            sum += temp%10;
            temp /= 10;
            if(temp == 0 ){
                if(sum >9 ) temp = sum;
            }
        }
        }
        
        return sum;
    }


int main() {


    auto start = std::chrono::high_resolution_clock::now();
    
    int n;
    cin>>n;

    int result = addDigits(n);

    cout<<"Result : "<<result<<endl;

    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;


    
    return 0;
}