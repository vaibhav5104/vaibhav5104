/* #include <iostream>
using namespace std;
int mySqrt(int x) {
        if (x == 0 || x == 1) 
            return x;

        int k = 0;
        for (int i = 0; i <= x; i++) {
            if ((long long)i * i == x) { 
                k = i;
                break;
            } else if ((long long)i * i > x) {
                k = i - 1;
                break;
            }
        }
        return k;
    }
int main() {

    int x;
    cin>>x;

    int res  = mySqrt(x);

    cout<<res<<endl;

    return 0;
} */
#include <iostream>
using namespace std;

int func(int a){
    cout<<a<<endl;

    return a;
}

int main() {

    double x;
    cin>>x;
    int result = func(x);

    cout<<"Result : "<<result<<endl;

    return 0;
}