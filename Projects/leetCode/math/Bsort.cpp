#include <iostream>
using namespace std;

int* Bsort(int arr[] , int n) {
int temp;
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - i - 1; ++j) {
            if(arr[j] > arr[j +1] ) {
                temp = arr[j] ;
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }dvdf 
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

    int* result = Bsort(arr,n);

    cout << "Modified array: ";
    for(int i = 0; i < n; i++) {
        cout << result[i] << " ";
    }

    return 0;
}
