#include <iostream>
#include <math.h>
using namespace std;

bool isFascinating(int n) {
        // n = n*1000000 + 2*n*1000 + 3*n;
        int temp1 = 2*n,count1 = 0,count2 = 0;
        while(temp1 != 0){
            temp1/=10;
            count1++;
        }
        temp1 = 3*n;
        while(temp1 != 0){
            temp1/=10;
            count2++;
        }
        cout<<"count1 : "<<count1<<"count2 : "<<count2<<endl;
        cout<<__INT_MAX__<<endl;
        if((n*(pow(10,(count1+count2))) + 2*n*(pow(10,count2)) + 3*n) > __INT_MAX__) return false;
        n = n*(pow(10,(count1+count2))) + 2*n*(pow(10,count2)) + 3*n;


        
        cout<<n<<endl;
    int count = 1 , t = 0,temp;
        for(int i = 1;i<=9;i++){
            if(count == 0){
                t = 0;
                 break;}
            if(count = 34) t++;
            temp = n;
            count = 0;
            // for(int j = 0;j<n;j++){
                while(temp != 0){
                    if(temp%10 == i) count++;

                    if(temp%10 == 0 || count >1){
                        count = 0;
                        break;
                    }
                    if(count == 1 && temp/10 == 0){ 
                        cout<<"done"<<endl;
                        count = 34;
                    }

                        temp/= 10;

                }
            // }
        }
        // cout<<"t : "<<t<<endl;

        if(t >= 9) return true;
        else return false; 
    }


int main() {

    int n;
    cin>>n;

    bool result = isFascinating(n);

    cout<<"Result : "<<result<<endl;

    return 0;
}