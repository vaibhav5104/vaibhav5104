/* #include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
        

    vector<int> res = {};
    int x,k;

    for(int i = 0; i<nums.size();i++){
        for(int j = 0; j<nums.size();j++){
            x = nums[i]*nums[j+1];
            cout<<"x : "<<x<<endl;
            for(int k = 0; k<nums.size();k++){
            if(x == nums[k]) k=0;
            if(k )
            res.push_back(x);

            }

        }

    }

    return res;
    }



int main() {

    vector<int> input_vec = {1,2,3,4};

    vector<int> result = productExceptSelf(input_vec);

    for(auto it = result.begin() ; it != result.end(); it++){
        cout<<*it<<" ";
    }


    return 0;
}

 */
#include <bits/stdc++.h>
#include <iostream>
using namespace std;

int main() {
    int basic;
    char grade;

    cin>>basic>>grade;

    double hra = (basic/100)*20;
    double da = (basic/100)*50;
    double pf = (basic/100)*11;
    double allow;
    if(grade == 'A') allow = 1700;
    else if(grade == 'B') allow = 1500;
    else allow = 1300;

    double total =/*  static_cast<int> */(basic + hra + da + allow - pf);

    cout<<total<<endl;
    return 0;
}