#include <iostream>
using namespace std;

void linear_search(int arr[], int n, int key);

int main() {
    int arr[10], n, key, p = 0;

    cout << "Enter size of an array: ";
    cin >> n;

    cout << "Enter array: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    cout << "Enter key element: ";
    cin >> key;

    linear_search(arr, n, key);

    return 0;
}

void linear_search(int arr[], int n, int key) {
    int p = 0;
    int i = 0;

    for (; i < n; i++) {
        if (arr[i] == key) {
            p = 1;
            break;
        } else {
            p = 0;
        }
    }

    if (p == 1) {
        cout << key << " is found at index " << i << endl;
    } else {
        cout << key << " not found in the given array." << endl;
    }
}
