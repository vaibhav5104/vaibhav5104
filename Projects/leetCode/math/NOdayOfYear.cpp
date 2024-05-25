#include <iostream>
using namespace std;
//1154
void dayOfYear(string date) {
        

        //2019-02-23
        int d = 0, m = 0;
        for(int i = 5; i<=6;i++){
            m = m*10 + date[i];
        }

        for(int i = 8; i<=9;i++){
            d = d*10 + date[i];
        }

        cout<<"date : "<<d<<endl;
        cout<<"month : "<<m<<endl;
        int sum = 0;
/* 
        switch(m){
            case 01 : 
            sum = 0;
            break;
            case 02 : 
            sum = 31;
            break;
            case 3 : 
            sum = 59;
            break;
            case 4 : 
            sum = 90;
            break;
            case 5 : 
            sum = 120;
            break;
            case 6 : 
            sum = 151;
            break;
            case 7 : 
            sum = 181;
            break;
            case 8 : 
            sum = 212;
            break;
            case 9 : 
            sum = 243;
            break;
            case 10 : 
            sum = 273;
            break;
            case 11 : 
            sum = 304;
            break;
            case 12 : 
            sum = 334;
            break;
            default : ;
            }

            sum = sum +  */


    }

int main() {

    string date;
    cin>>date;

    cout<<date<<endl;

    dayOfYear(date);

    return 0;
}