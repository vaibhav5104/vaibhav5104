#include <iostream>
#include <vector>
using namespace std;
//print string n times
vector<string> printNTimes(int n) {

    vector<string> vec_str = {"Coding Ninjas "};
	int x = 1;

    while(x < n){
        
        vec_str.push_back("Coding Ninjas ");
        x++;
    }

    return vec_str;
}

int main() {

    int n;
    cin>>n;

    vector<string> result = printNTimes(n);
    for(auto it = result.begin();it != result.end();it++ ){
        cout<<*it<<" ";
    }

    return 0;
}