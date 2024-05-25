#include <iostream>
#include <vector>
using namespace std;
//Print number 1 to n
vector<int> nums ;
vector<int> printNos(int x) {
    if(x == 0) return nums;
    nums.insert(nums.begin(), x);
    x = x - 1;

    printNos(x);

    return nums;

}

int main() {

    int n ;
    cin>>n;

    vector<int> result = printNos(n);

    for(auto it = result.begin(); it != result.end() ; it++){
        cout<<*(it)<<" ";
    }
    cout<<endl;

    return 0;
}