#include <iostream>
#include <vector>
#include <math.h>
using namespace std;

vector<int> /* void */ plusOne(vector<int>& digits) {
        // vector<int> temp = digits;
        // if(temp.back() != 9) (temp.back())++;
        // else {
            // temp.push_back(0);
            // temp[temp.size() - 2] = 1;
        // }
        // return temp;
        vector<int> temp;
        int sum = 0;
        for(int i = 0;i<digits.size();i++){
            sum += digits[i]*(pow(10,digits.size() - i - 1));
        }

        sum += 1;
        cout<<sum<<endl;

        while(sum != 0){

            temp.insert(temp.begin(),sum%10);
            sum /= 10;

        }
        return temp;
    }

int main() {


    vector<int> digits = {9,9};
    vector<int> res = plusOne(digits);

    for(auto it = res.begin();it != res.end(); it++){
        cout<<*it<<" ";
    }

    return 0;
}