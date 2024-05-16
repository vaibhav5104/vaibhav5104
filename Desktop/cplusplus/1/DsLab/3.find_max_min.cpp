#include <iostream>
#include <fstream>
using namespace std;

void max(int arr[], int n);
void min(int arr[], int n);
int search(int arr[], int k, int n);

int i = 0;

int main() {
    int n, p = 1;
    int max_min;

    cout << "Enter size of an array  : ";
    cin >> n;
    int arr[n];

    cout << "Enter array : ";
    for (i = 0; i < n; i++) {
        cin >> arr[i];
    }

    cout << "Enter   1.Maximum\n\t2.Minimum\n\t3.Both \n";
    cin >> max_min;

    switch (max_min) {
        case 1:
            max(arr, n);
            break;

        case 2:
            min(arr, n);
            break;

        case 3:
            max(arr, n);
            i = 0; // Reset i
            min(arr, n);
            break;

        default:
        cout<<"Invalid Option"<<endl;
    }
    return 0;
}

void max(int arr[], int n) {
    int k = arr[0];
    for (i = 1; i < n; i++) {
        if (arr[i] > k) {
            k = arr[i];
        }
    }

    int index = search(arr, k, n);
    cout << "Maximum number in the given array is " << k << " at index " << index << endl;
}

void min(int arr[], int n) {
    int k = arr[0];
    for (i = 1; i < n; i++) {
        if (arr[i] < k) {
            k = arr[i];
        }
    }

    int index = search(arr, k, n);
    cout << "Minimum number in the given array is " << k << " at index " << index << endl;
}

int search(int arr[], int k, int n) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == k) {
            return i;
        }
    }
    return -1;
}
