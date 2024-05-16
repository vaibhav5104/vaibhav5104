#include <iostream>
#include <string>
using namespace std;

int main() {

    string str ;
    cout<<"Enter roman integer : "<<endl;
    cin>>str;
    int found ;
     int result = 0;


    if((found = str.find("MMMCM")) != -1){
        result = result + 3900;
    }else if((found = str.find("MMCM")) != -1){
        result = result + 2900;
    }else if((found = str.find("MCM")) != -1){
        result = result + 1900;
    }
    else if((found = str.find("MMM")) != -1){
        result = result + 3000;
    }
    else if((found = str.find("MM")) != -1){
        result = result + 2000;
    }
    else if((found = str.find("CM")) != -1){
        result = result + 900;
    }
    else if((found = str.find("M")) != -1){
        result = result + 1000;
    }



    if((found = str.find("DCCC")) != -1){
        result = result + 800;
    }else if((found = str.find("DCC")) != -1){
        result = result + 700;
    }else if((found = str.find("DC")) != -1){
        result = result + 600;
    }
    else if((found = str.find("CD")) != -1){
        result = result + 400;
    }
    else if((found = str.find("D")) != -1){
        result = result + 500;
    }
    else if((found = str.find("CCCXC")) != -1){
        result = result + 390;
    }
    else if((found = str.find("CCXC")) != -1){
        result = result + 290;
    }
    else if((found = str.find("CXC")) != -1){
        result = result + 190;
    }
    else if((found = str.find("CCC")) != -1){
        result = result + 300;
    }
    else if((found = str.find("CC")) != -1){
        result = result + 200;
    }
    else if((found = str.find("XC")) != -1){
        result = result + 90;
    }
    else if((found = str.find("C")) != -1){
        result = result + 100;
    }
    

    
     if((found = str.find("LXXX")) != -1){
        result = result + 80;
    }else if((found = str.find("LXX")) != -1){
        result = result + 70;
    }else if((found = str.find("LX")) != -1){
        result = result + 60;
    }
    else if((found = str.find("XL")) != -1){
        result = result + 40;
    }
    else if((found = str.find("L")) != -1){
        result = result + 50;
    }else if((found = str.find("XXXIX")) != -1){
        result = result + 39;
    }
    else if((found = str.find("XXIX")) != -1){
        result = result + 29;
    }
    else if((found = str.find("XIX")) != -1){
        result = result + 19;
    }
    else if((found = str.find("IX")) != -1){
        result = result + 9;
    }
    else if((found = str.find("XXX")) != -1){
        result = result + 30;
    }
    else if((found = str.find("XX")) != -1){
        result = result + 20;
    }
    
    else if((found = str.find("XIII")) != -1){
        result = result + 13;
    }
    else if((found = str.find("XII")) != -1){
        result = result + 12;
    }
    else if((found = str.find("XI")) != -1){
        result = result + 11;
    }
    else if((found = str.find("X")) != -1){
        result = result + 10;
    }
    else if((found = str.find("VIII")) != -1){
        result = result + 8;
    }
    else if((found = str.find("VII")) != -1){
        result = result + 7;
    }
    else if((found = str.find("VI")) != -1){
        result = result + 6;
    }
    else if((found = str.find("IV")) != -1){
        result = result + 4;
    }
    else if((found = str.find("V")) != -1){
        result = result + 5;
    }
    else if((found = str.find("III")) !=  -1){
        result = result + 3;
    }
    else if(((found = str.find("II"))) != -1){
        result = result + 2;
    }
    else if((found = str.find("I")) != -1){
        result = result + 1;
    }



    cout<<result<<endl;
    cout<<(found = str.find("XXXIX"))<<endl;


    return 0;
}