#include <iostream>
using namespace std;

int countOdds(int low, int high) {
        int count = 0;
        for(int i = low; i<=high;i++){
            if(i%2 != 0){ count++;
            /* cout<<i<<endl; */}
            else ;
        }

        return count;
    }


int main() {

    int l,h;
    cin>>l>>h;

    int res = countOdds(l,h);

    cout<<res<<endl;

    return 0;
}