#include <iostream>

void rotateArray(int arr[], int n, int length) {
    // Modulo operation to handle cases where n is greater than length
    int rotations = n % length;

    // Print the rotated array
    for (int i = 0; i < length; ++i) {
        std::cout << arr[(i + rotations) % length] << " ";
    }
    std::cout << std::endl;
}

void ArrayChallenge(int arr[], int arrLength) {
    // Check if array length is non-negative
    if (arrLength < 0) {
        std::cout << "Array length cannot be negative." << std::endl;
        return;
    }
    
    // Check if array is empty
    if (arrLength == 0) {
        std::cout << "Array is empty." << std::endl;
        return;
    }

    // Determine N as the first element of the array
    int n = arr[0];

    // Rotate the array and print the result
    rotateArray(arr, n, arrLength);
}

int main() {
    int arr[] = {};
    int arrLength = sizeof(arr) / sizeof(arr[0]);
    ArrayChallenge(arr, arrLength);
    return 0;
}
