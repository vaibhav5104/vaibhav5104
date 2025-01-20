#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

string reverseWords(string s) {
        // Step 1: Trim leading and trailing spaces
        int start = 0, end = s.size() - 1;
        while (start <= end && s[start] == ' ') start++;
        while (end >= start && s[end] == ' ') end--;
        
        // Step 2: Collect words into a vector
        string word;
        vector<string> words;
        while (start <= end) {
            char c = s[start];
            if (c != ' ') {
                word += c;
            } else if (!word.empty()) {
                words.push_back(word);
                word = "";
            }
            start++;
        }
        if (!word.empty()) words.push_back(word); // Add the last word

        // Step 3: Reverse the order of words
        reverse(words.begin(), words.end());

        // Step 4: Combine words into a single string
        string result;
        for (int i = 0; i < words.size(); i++) {
            result += words[i];
            if (i < words.size() - 1) result += ' ';
        }
        
        return result;
    }


int main() {

    string s = "I am a boy";
    cout<<reverseWords(s)<<endl;

    return 0;
}