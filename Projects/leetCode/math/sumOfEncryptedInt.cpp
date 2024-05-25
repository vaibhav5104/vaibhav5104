#include <iostream>
#include <vector>
#include <chrono>
#include <math.h>
using namespace std;

int sumOfEncryptedInt(vector<int>& nums) {
        
        vector<int> temp_vec = nums;
        int count ,p,sum,sum1 = 0,temp;
        // cout<<temp_vec[1]<<endl;
        for(auto i = temp_vec.begin(); i != temp_vec.end();i++){
            
            count = 0;
            sum = 0;
            temp = *i;
            p = *i%10;

            while(temp != 0){
                if(temp%10 >= p) p = temp%10;
                else ;
                temp /= 10;
                count++;
            }

            for(int k = 0; k<count;k++){
                sum += pow(10,k);
            }
            sum1 += p*sum;
        }

        return sum1;


    }


int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    vector<int> vec = {50,23,68};
    int result = sumOfEncryptedInt(vec);

    cout<<"Result : "<<result<<endl;


    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}