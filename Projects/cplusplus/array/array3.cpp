#include <iostream>
using namespace std;

bool func(int arr[] , int n){
    int k = 1;

        for(int i = 0; i<n;i++){
            if(!(arr[i] <= arr[i+1])){
                // cout<<i<<endl;
                
                    for(int j = i+1; j<n;j++){
                        if(!(arr[j] < arr[j+1])) {k = 0;break;}
                    }

                    if((k == 0) || (arr[n-1] > arr[i])){ k = 0;break;
                    }
                
            }
        }
        return k;
    }


int main() {

    int n;
    cin>>n;

    int arr[n];
    for(int i = 0; i<n;i++){
        cin>>arr[i];
    }

    bool result = func(arr,n);

    cout<<"Result : "<<result<<endl;

    return 0;
}