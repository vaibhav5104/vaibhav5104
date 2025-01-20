#include <iostream>
#include <vector>
using namespace std;

string removeOuterParentheses(string s){
    int m = 0,cnt = -1;

    for(int i = 0; i<s.size();i++){
        if(cnt == 0){

            s.erase(i-1,1);
            s.erase(m,1);
            i = i-2;
            m = i;
        }

        if(s[i] == '(') {
            if(cnt == -1) cnt = 1;
            else cnt++;}
        else if(s[i] == ')') cnt--;
    }

    return s;

}

int main() {

    string s = "()(())()";
    string result = removeOuterParentheses(s);
    cout<<"Result is : "<<result<<endl;

    return 0;
}