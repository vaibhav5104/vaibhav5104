#include <iostream>
#include <vector>
using namespace std;

vector<int> selfDividingNumbers(int left, int right) {
        vector<int> res = {};
        int k,temp,num;

        for(int i = left; i<=right;i++){
            k = 0;
            temp = i;
            num = i;
            while(temp!=0){
                if((temp%10) == 0 || num%(temp%10) != 0){
                    k = 0;
                    break;
                }else {
                    temp = temp/10;
                k = 1;
                }
            }
            if(k == 1) res.push_back(i);
        }

        return res;

    }


int main() {

    int l,r;
    cin>>l>>r;

    vector<int> res = selfDividingNumbers(l,r);

    for(auto it = res.begin();it != res.end();it++){
        cout<<*it<<" ";
    }

    return 0;
}