#include <iostream>

// Function to get the nth bit of a number
int getBit(int number, int n) {
    return (number >> n) ;
}

int main() {
    int number = 14; // Binary: 1010
    int bitPosition = 4;
    
    std::cout << "The " << bitPosition << "th bit of " << number << " is " << getBit(number, bitPosition) << std::endl;

    return 0;
}
