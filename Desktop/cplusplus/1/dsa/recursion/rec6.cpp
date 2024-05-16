#include <iostream>
#include <cctype>
#include <chrono>
using namespace std;
//palindrome
bool isPalindrome(const std::string& str) {
    // Make a copy of the input string to perform modifications
    std::string modifiedStr = str;

    // Convert uppercase characters to lowercase
    for (int i = 0; i < modifiedStr.size(); ++i) {
        if (std::isupper(modifiedStr[i])) {
            modifiedStr[i] = std::tolower(static_cast<unsigned char>(modifiedStr[i]));
        }
    }

    // Check if the string contains alphanumeric characters and is a palindrome
    for (int i = 0; i < modifiedStr.size() / 2; ++i) {
        if (!std::isalnum(modifiedStr[i])) {
            return false;
        } else if (modifiedStr[i] != modifiedStr[modifiedStr.size() - 1 - i]) {
            return false;
        }
    }

    return true;
}

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    
    string str;
    cin>>str;
    bool result = isPalindrome(str);
    cout<<result<<endl;
    
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}