#include <iostream>
using namespace std;

int* InsSort(int arr[] , int n) {
int key;
    for (int i = 0; i < n ; ++i) {

        for (int j = 0; j <= i ; ++j) {
            // if(i == j) break;
            if(arr[i] < arr[j]) {
                key = arr[i];
                for(int k = i; k>j;k--){
                    arr[k] = arr[k-1];
                }
                arr[j] = key;
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

    int* result = InsSort(arr,n);

    cout << "Modified array: ";
    for(int i = 0; i < n; i++) {
        cout << result[i] << " ";
    }

    return 0;
}


/* // Modified by GPT
#include <iostream>
using namespace std;

int* InsSort(int arr[], int n) {
    int key, j;
    for (int i = 1; i < n; ++i) {
        key = arr[i];
        j = i - 1;
        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

int main() {
    int n;
    cin >> n;

    int arr[n];

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int* result = InsSort(arr, n);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << result[i] << " ";
    }

    return 0;
}

 */