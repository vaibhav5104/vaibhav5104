#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;

        // Maps to store character mappings
        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;

        for (int i = 0; i < s.length(); i++) {
            char c1 = s[i];
            char c2 = t[i];

            // Check if the mapping is consistent for both directions
            if ((sToT.count(c1) && sToT[c1] != c2) || 
                (tToS.count(c2) && tToS[c2] != c1)) {
                return false;
            }

            // Establish the mapping
            sToT[c1] = c2;
            tToS[c2] = c1;
        }

        return true;
    }

int main() {

    cout<<isIsomorphic("asder","lkjiu")<<endl;

    return 0;
}