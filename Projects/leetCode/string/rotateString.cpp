#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool rotateString(string s,string goal){

    for(int i = 0; i<s.size();i++){
        rotate(s.begin(), s.begin() + 1, s.end());
        if(s == goal) return true;
    }
    return false;
}

int main() {

    string str = "abcde",goal = "eaecd";
    cout<<"Result is : "<<rotateString(str,goal)<<endl;

    return 0;
}