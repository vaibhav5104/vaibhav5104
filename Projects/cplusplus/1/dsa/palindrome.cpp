#include <iostream>
using namespace std;



int main() {
    int N ,temp;
    cin>>N;

    temp=N;

    int rev_num=0;

while(N!=0)
{
    int ld = N%10;//last_digit
    rev_num = (rev_num*10)+ld;
    N=N/10;
}

    cout<<rev_num<<endl;
if(rev_num==temp) cout<<"\n\n Palindrome! "<<rev_num<<endl<<endl;
else cout<<"\n\n No! "<<rev_num;

return 0;
}