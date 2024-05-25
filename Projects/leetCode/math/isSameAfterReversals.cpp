#include <iostream>
#include <math.h>
#include <climits>
using namespace std;

// int isSameAfterReversals(int n){
    // 
// }

bool isSameAfterReversals(int num) {
        int temp= num;


    int64_t rev_num=0;
    int64_t rev_num2=0;

while(temp!=0)
{
    int ld = temp%10;//last_digit
    rev_num = (rev_num*10)+ld;
    temp=temp/10;
}
cout<<"rev_num : "<<rev_num<<endl;
while(rev_num!=0)
{
    int ld = rev_num%10;//last_digit
    rev_num2 = (rev_num2*10)+ld;
    rev_num=rev_num/10;
}

    cout<<rev_num2<<endl;
    if (rev_num2 > INT_MAX || rev_num2 < INT_MIN || rev_num2 <0) return 0;
    else if(num==rev_num2) return 1;
    else return 0;
    }


int main() {

    int n;
    cin>>n;

    bool result = isSameAfterReversals(n);
    cout<<result<<endl;

    return 0;
}