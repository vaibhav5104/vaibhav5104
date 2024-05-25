#include <iostream>
#include <vector>
using namespace std;

int differenceOfSums(int n, int m) {//how to insert elements in array of unknown size in loop.Will it be a pointer array
        vector<int> vec1;
        vector<int> vec2;
        int sum1 = 0,sum2 = 0;
        for(int i = 1; i<=n;i++){
            if(i == 1) vec1.push_back(0);
            else if(i > m){
                if(i%m == 0) {vec1.push_back(i);
            cout<<"m%i == 0 : "<<i<<endl;
            }}else if((i <= m)) if(m%i == 0) {vec1.push_back(i);
            cout<<"m%i == 0 : "<<i<<endl;
            }
            
        }

        for(int i = 1; i<=n;i++){
            if(i == 1) vec2.push_back(i);
            else if(i > m){
                if(i%m != 0) {vec2.push_back(i);
            cout<<"m%i != 0 : "<<i<<endl;

            }}else if((i < m)) {if(m%i != 0) vec2.push_back(i);
            cout<<"m%i != 0 : "<<i<<endl;
             }
        }

        for(auto it = vec1.begin();it !=vec1.end();it++){
            sum1 = *it + sum1;
        }

        for(auto it = vec2.begin();it !=vec2.end();it++){
            sum2 = *it + sum2;
        }

    cout<<"sum1 : "<<sum1<<endl;
    cout<<"sum2 : "<<sum2<<endl;


        return sum2-sum1;
    }

int main() {

    int n,m;
    cin>>n>>m;

    int result = differenceOfSums(n, m);

    cout<<"result : "<<result<<endl;

    return 0;
}