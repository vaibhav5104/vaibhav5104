#include <iostream>
#include <chrono>
using namespace std;


int countSymmetricIntegers(int low, int high) {
        int count2 = 0,k = 0;
        int temp1 = low,temp2 = high;
    
    // while (temp1 != 0 || temp2 != 0) {
    //     if(temp1 != 0) {
    //         temp1 /= 10;
    //         count1++;
    //         }
    //     // temp2 /= 10; 
    //     // count2++;
    // }
    // cout<<low<<endl;

    for(int i = low; i<=high;i++){
        int temp = i;
        int temp3 = i;
        int sum1 = 0,sum2 = 0;
        int count1 = 0;

while (temp3 != 0 ) {
        // if(temp3 != 0) {
            temp3 /= 10;
            count1++;
            // }
    }
    for(int j = 0; j < count1;j++){
        if(count1%2 != 0 && j == ((count1-1)/2)){
            // sum1 = sum1;
        }
        else if(j < count1/2) {

            sum1 = sum1 + temp%10;
            temp = temp / 10;

            }else {sum2 = sum2 + temp%10;
            temp = temp / 10;
        }
    }
    if(sum1 == sum2 ) {k++;
    cout<<i<<" ";
    }
    }
    

    return k;

    }


int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    int l,h;
    cin>>l>>h;
    int res = countSymmetricIntegers(l,h);

    cout<<"Result : "<<res<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}
