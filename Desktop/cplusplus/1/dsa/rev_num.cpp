#include <iostream>
using namespace std;

int main() {

    int n;

    cin>>n;
    int lastdigit = 0,k=0;
    while(n>0){
        lastdigit = n%10;

        if(lastdigit != 0) k =1;
        if(k != 0) cout<<lastdigit;

        n = n/10;
    }

    return 0;
}



/* #include <iostream>
using namespace std;


int main() {

    // 
    
    int N,temp;
    cin>>N;

temp=N;

    int Sum=0;

while(N!=0)
{
    int Rem = N%10;
    Sum = (Sum*10)+Rem;
    N=N/10;
}

if(Sum==temp) cout<<"\n\n Palindrome! "<<Sum<<endl<<endl;
else cout<<"\n\n No! "<<Sum;

return 0;
} */