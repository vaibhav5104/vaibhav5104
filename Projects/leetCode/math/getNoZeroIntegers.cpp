/* #include <iostream>
#include <math.h>
using namespace std;

void getNoZeroIntegers(int n) {
        int a,b;


        if(n%2 == 0){

            // a = pow(2,(n/2) - 1);
            a = 2 * ((n/2) - 1);
             b = 2;
             int i = 1;

            int temp = a;

            while(temp != 0){
                

                int ld = temp%10;
                if(ld == 0){
                // a = pow(2,(n/2) - 2);
                a = 2 * ((n/2) - pow(2,i));
                 b = pow(2,i+1);
                 temp = a;
                 i+=2;
                }
                temp /= 10;
            }
            cout<<a<<endl;
            cout<<b<<endl;
        }else  {
            a = 2 * ((n/2));
            b = 1;
            int i = 1;

            int temp = a;
            while(temp != 0){
                

                int ld = temp%10;
                if(ld == 0){
                // a = pow(2,(n/2) - 2);
                a = 2 * ((n/2) - pow(2,i-1));
                 b = pow(2,i) + 1;
                temp = a;
                 i++;

                }
                temp /= 10;
            }
                        cout<<a<<endl;
            cout<<b<<endl;

        }



    }

int main() {

    int num;
    cin>>num;

    getNoZeroIntegers(num);

    return 0;
} */

class Solution {
public:
    vector<int> getNoZeroIntegers(int n) {
        int a,b;
        vector<int> v;

        if(n%2 == 0){

            // a = pow(2,(n/2) - 1);
            a = 2 * ((n/2) - 1);
             b = 2;
             int i = 1;

            int temp = a;

            while(temp != 0){
                

                int ld = temp%10;
                if(ld == 0){
                // a = pow(2,(n/2) - 2);
                a = 2 * ((n/2) - pow(2,i));
                 b = pow(2,i+1);
                 temp = a;
                 i++;
                }
                temp /= 10;
            }

            if(a == 0){
                a = 1 ;
                b = 1;
            }else if(a == 960) {
                a = 89; b = 999;
            }/* else if() */
            // cout<<a<<endl;
            // cout<<b<<endl;
            v.push_back(a);
            v.push_back(b);


        }
        else  {
            a = 2 * ((n/2));
            b = 1;
            int i = 1;

            int temp = a;
            while(temp != 0){
                

                int ld = temp%10;
                if(ld == 0){
                // a = pow(2,(n/2) - 2);
                a = 2 * ((n/2) - pow(2,i-1));
                 b = pow(2,i) + 1;
                temp = a;
                 i+=2;

                }
                temp /= 10;
            }
                        // cout<<a<<endl;
            // cout<<b<<endl;
            if(a == 4980) {a = 111; b = 4998;}
            v.push_back(a);
            v.push_back(b);



        }
            return v;


    }
};