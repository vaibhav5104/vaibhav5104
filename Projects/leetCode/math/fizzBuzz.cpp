#include <iostream>
#include <vector>
using namespace std;

vector<string> fizzBuzz(int n) {
        vector<string> vec(n);

        for(int i = 1; i<=n;i++){
        if(i%3 == 0 && i%5 == 0 ) vec[i] = "FizzBuzz";
        else if(i%3 == 0) vec[i] = "Fizz";
        else if(i%5 == 0) vec[i] = "Buzz";
        else vec[i] = to_string(i);
        }

            
        
        

        return vec;
    }


int main() {

    

    return 0;
}