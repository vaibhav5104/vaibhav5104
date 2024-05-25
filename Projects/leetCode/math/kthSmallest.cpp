#include <iostream>
#include <algorithm>
using namespace std;

int kthSmallest(int arr[], int l, int r)
    {
        // int temp_arr[];
        int k = arr[0];
        for(int i = 1; i<r;i++){
            if(arr[i] < k) k = arr[i];
            else ;
        }

        std::sort(arr, arr + r);

        return arr[k];
    }


int main() {

    int l,r;
    cin>>l>>r;
    int arr[r];

    for(int i = 0; i<r;i++){
        cin>>arr[i];
    }


    int res = kthSmallest(arr,l,r);

    cout<<"Result : "<<res<<endl;

    return 0;
}