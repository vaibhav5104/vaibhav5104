#include <iostream>
using namespace std;

int gcd(int a,int b){

    int i = 2,gcd = 1,lcm = 1;
    while(i < (a>b) ? b/2:a/2 ){

        if(a%i == 0 && b%i == 0){
 
            if(gcd == 1) lcm = i;
            gcd = i;

        }
        i++;

    }

}

int main() {

    // Your code here

    return 0;
}