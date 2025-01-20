#include <iostream>
#include <vector>
using namespace std;

vector<int> strtoint(string str){

    vector<int> vec;

    for(int i = 0; i<str.size();i++){
        vec.push_back(str[i] - '0');
    }

    return vec;

}

int main() {

    string s = "123456";

    vector<int> res = strtoint(s);


    for(auto it = res.begin();it != res.end();it++){
        cout<<*it<<" ";
    }
    
    // cout<<"Result : "<<res<<endl;
    cout<<endl;
    cout<<"Done"<<endl;

    return 0;
}
