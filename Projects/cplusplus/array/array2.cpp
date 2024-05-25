#include <iostream>
using namespace std;

int main() {

    int n;
    cin>>n;

    int arr[n];
    for(int i = 0; i<n;i++){
        cin>>arr[i];
    }
    int k = arr[0];
    int t = k;
    for(int i = 0; i<n;i++){
        

        if(k < arr[i]) {t = k;k = arr[i]; }

    }

    cout<<t<<endl;



    return 0;
}