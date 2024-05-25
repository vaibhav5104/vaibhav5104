#include <iostream>
using namespace std;

// Function to perform some operation on the array and return the modified array
int* Ssort(int arr[] , int n) {
int key,k = 0,temp;
    for(int i = 0; i<n - 1;i++){
         key =  arr[i];

        for(int j = i; j < n;j++){
            if(key > arr[j] ) {key = arr[j];  k = j;}  
            cout<<"Key : "<<key<<endl;

            if(j == n-1 && i != k) {
                temp = arr[i] ;
                arr[i] = arr[k];
                arr[k] = temp;
            }
        }


    }



    return arr;
}

int main() {
    int n;
    cin >> n;

    int arr[n];

    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int* result = Ssort(arr,n);

    cout << "Modified array: ";
    for(int i = 0; i < n; i++) {
        cout << result[i] << " ";
    }

    return 0;
}
