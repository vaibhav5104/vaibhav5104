#include <iostream>
#include <vector>
using namespace std;

string largestOddNumber(string str){

    int num = stoi(str);

    while(num != 0){
        if(num %2 == 1){
            return to_string(num);
        }else{
            num /=10;
        }
    }



    return "-1";

}

int main() {

    string str ="123128";
    string result = largestOddNumber(str);

    cout<<"Result is : "<<result<<endl;

    return 0;
}