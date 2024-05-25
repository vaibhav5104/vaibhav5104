#include <iostream>
#include <vector>
// #include <sort>
#include <bits/stdc++.h>


using namespace std;

int splitNum(int num) {
        

        int temp = num;
        vector<int> vec;

        while(temp != 0){
            vec.push_back(temp%10);
            temp/=10;
        }

        sort(vec.begin(), vec.end());

        int num1 = vec[0];int i = 0;
        int num2 = vec[1] ;
        // int num2;

        while((vec.size()%2 == 0 && i+2 < vec.size()) || (vec.size()%2 != 0 && i+1 < vec.size() - 1)){
            // cout<<vec.size()<<endl;
            if(i+2 < vec.size()){
                num1 = num1*10 + vec[i+2];
                if(i+3 < vec.size()) num2 = num2*10 + vec[i+3];
            i = i+2;
            // cout<<"num1 : "<<num1<<" "<<"num2 : "<<num2<<endl;
            }
            else break;
            
        }

        // if(vec.size()%2 == 0 && vec[i+2] < vec.size()){
            // num1 = num1*10 + vec[i+2];
            // num2 = num2*10 + vec[i+1];
            // cout<<"num1 : "<<num1<<" "<<"num2 : "<<num2<<endl;
        // }


        // if(vec.size()%2 != 0 && vec[i+1] < vec.size() - 1){
            // num1 = num1*10 + vec[i+2];
            // num2 = num2*10 + vec[i+1];
            // cout<<"num1 : "<<num1<<" "<<"num2 : "<<num2<<endl;
        // }

        return num1 + num2;

    }


int main() {

    int n;
    cin>>n;
    int result = splitNum(n);

    cout<<"Result : "<<result;

    return 0;
}