#include <iostream>
#include <vector>
#include <chrono>
using namespace std;


int countBalls(int lowLimit, int highLimit) {
    // vector<int> vec=  {};
    int temp2 = highLimit,count = 0;
    // while (temp2 != 0)
    // {
        // temp2 /= 10;
        // count++;
    // }

    if(highLimit <= 100 ){
        count = 18;
    }else if(highLimit > 100 && highLimit < 1000){
        count = 30;
    }else count = 50;
    

    int arr[count] = {};    
    int sum;
    for(int i = lowLimit; i<=highLimit;i++){
        sum = 0;
        int temp = i;
        while(temp != 0){
            sum += temp%10;
            temp /= 10;
        }
        arr[sum]++;
    }
    int k ;
    for(int i = 0; i<count;i++){
        if(i == 0) k = arr[i];
        else if(arr[i] > k) k = arr[i];
        else ;
    }

    // cout<<count<<endl;
    return k;

    }


int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int l,h;
    cin>>l>>h;

    int result = countBalls(l,h);

    cout<<"Result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    

    return 0;
}