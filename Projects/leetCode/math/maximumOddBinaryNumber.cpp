#include <iostream>
using namespace std;

string maximumOddBinaryNumber(string s){

    string s1 = s;
    int n = s.size(),count = 0;
    // s1.size() = n;

    for(int i = 0; i<n;i++){
        if(s[i] == '1'){
            count++;
        }
    }
        cout<<"count : "<<count<<endl;
        for(int i = 0; i<n-1;i++){
            if(count > 1){
                s1[i] = '1';
                count--;
            }else s1[i] = '0';
        }

        s1[n - 1] = '1';

        return s1;
}

int main() {

    string s ;
    getline(cin,s);

    string result = maximumOddBinaryNumber(s);

    cout<<"result : "<<result<<endl;



    return 0;
}