#include <iostream>
#include <vector>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {

    if(strs.size() == 1) return strs[0];
    string cmn = "",m = strs[0],n;

    for(int i = 0; i<strs.size()-1;i++){
        
        n = strs[i+1];
        cmn = "";
        if(m.size() > n.size()){
            m.swap(n);
        }

        for(int j = 0; j<m.size();j++){
            if(m[j] == n[j] ) cmn.push_back(m[j]);
            else {
                m = cmn;
                break;
            }
        }
    }

    return cmn;

}

int main() {

    vector<string> str = {"flower","flow","flight"};

    string result = longestCommonPrefix(str);

    cout<<result<<endl;

    return 0;
}