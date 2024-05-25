#include <iostream>
using namespace std;

bool divisorGame(int n){
int count;
        for(int i = 1; i<n;i++){
            

            if(i<n || n%i == 0){
                n -= i;
            }else {
                cout<<n<<endl;
                count = i%2;
                break;}


        }

            return count;


}


int main() {

        int num;

        cin>>num;
        bool res = divisorGame(num);

        cout<<"Result : "<<res<<endl;


    return 0;
}