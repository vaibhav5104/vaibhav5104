#include <iostream>
#include <chrono>
#include <vector>
using namespace std;

int differenceOfSum(vector<int>& nums) {
    int ld,sum1 = 0,sum2 = 0;
    // vector<int> copied;

    // for (int elem : nums) {
    //     copied.push_back(elem);
    // }
        // for(int i = 0; i<copied.size();i++){
        //     while(copied[i] > 0){
        //     if(copied[i]%10 >= 1){
        //         // ld = ;
        //         sum = sum + copied[i]%10;
        //         copied[i] = copied[i] / 10;
        //     }else sum = sum + copied[i];
        //     }
        //     cout<<"sum  : "<<sum<<endl;
        // }

        for (int i = 0; i < nums.size(); i++) {
        int num = nums[i];

        sum2 = sum2 + nums[i];


        while (num > 0) {
            sum1 += num % 10; // Add the last digit to the sum
            num /= 10; // Remove the last digit from the number
        }
        }
    

        return abs(sum2-sum1);
    }

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    vector<int> input_vec(4);
    for (int i = 0; i < 4; ++i) {
        cin >> input_vec[i];
    }

    int result = differenceOfSum(input_vec);
    cout<<"result : "<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}