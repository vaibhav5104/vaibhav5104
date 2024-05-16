#include <iostream>
using namespace std;

void p1(int n){
    for(int i = 0; i<n;i++){
        for(int j = 0;j<n;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void p2(int n){
    for(int i = 0; i<n;i++){
        for(int j = 0;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void p3(int n){
    for(int i = 0; i<n;i++){
        for(int j = 0;j<=i;j++){
            cout<<j+1;
        }
        cout<<endl;
    }
}
void p4(int n){
    for(int i = 0; i<n;i++){
        for(int j = 0;j<=i;j++){
                cout<<i+1;
        }
        cout<<endl;
    }
}
void p5(int n){
    for(int i = 0; i<n;i++){
        for(int j = n-1;j>=i;j--){
                cout<<"*";
            
            
        }
        cout<<endl;
    }
}
void p6(int n){
    for(int i = 0; i<n; i++){
        for (int j = 1; j <= n - i; j++) {
            cout << j;
        }
        cout<<endl;
    }
}
void p7(int n){
    for(int i = 0; i <n;i++){
        for(int j = 0;j<2*n - 1;j++){
            if (j >= n - i - 1 && j <= n + i - 1) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout<<endl;
    }
}
void p8(int n){
for(int i = n - 1; i >=0;i--){
        for(int j = 0;j<2*n - 1;j++){
            if (j >= n - i - 1 && j <= n + i - 1) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout<<endl;
    }
}
void p9(int n){
    p7(n/2);
    p8(n/2);
}
void p10(int n){
    for(int i = 0; i<=n/2; i++){
        for(int j = 0;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }

    for(int i = 0; i<n/2; i++){
        for(int j = 0;j< (n/2) -i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}
void p11(int n){
    for(int i = 0;i<n;i++){
        for(int j = 0;j<=i;j++){
            if((i+j)%2 == 0)
            cout<<1;
            else cout<<0;
        }
        cout<<endl;
    }
}
void p12(int n){
    for(int i = 0;i<n;i++){
        int k = 0;
        for(int j = 0;j<2*n;j++){
            if(j<=i ){
                cout<<j+1;
            }
            else if(j>=2*n-i-1){
                // cout<<i+1;
                k = 2*n-j;
                cout<<k;
                k--;
            }
            
            else cout<<" ";
            
        }
        cout<<endl;
    }
}
void p13(int n){
    for(int i = 0 , k = 1; i<n;i++){
        for(int j = 0; j<=i;j++){
            cout<<k<<" ";
            k++;
        }
    cout<<endl;
    }
}
void p14(int n){
    for(int i = 0; i<n;i++){
        char c = 'A';
        for(int j = 0; j<=i;j++){
        cout<<c;
        c++;
        }
        cout<<endl;
    }
}
void p15(int n){
    for(int i = 0; i<n;i++){
        char c = 'A';
        for(int j = n; j>i;j--){
        cout<<c;
        c++;
        }
        cout<<endl;
}
}
void p16(int n){
    char c = 'A';
    for(int i = 0; i<n;i++){
        for(int j = 0; j<=i;j++){
        cout<<c;
        }
        c++;
        cout<<endl;
}
}
void p17(int n){
    for(int i = 0; i<n;i++){
        char c = 'A';
        for(int j = 0; j<2*n-1;j++){
        if(j >= n-i-1 && j <= n+i-1){
            cout<<c;
            if(j < n-1) c++;
            else c--;
        }else cout<<" ";
        }
        cout<<endl;
    }
}
void p18(int n){
    char c = 'E';
    for(int i = 1; i<=n;i++){
        for(int j = 0; j<i;j++){
            cout<<c++;
        }
        c = c  - i - 1;
        
        
        cout<<endl;
    }
}
void p19(int n){
    for(int i = 0; i <n/2;i++){
        for(int j = 0;j<2*n - 1;j++){
            if (j > n - i - 1 && j <= n + i - 1) {
                cout << " ";
            } else {
                cout << "*";
            }
        }
        cout<<endl;
    }
    for(int i = n/2 - 1; i >=0;i--){
        for(int j = 0;j<2*n - 1;j++){
            if (j > n - i - 1 && j <= n + i - 1) {
                cout << " ";
            } else {
                cout << "*";
            }
        }
        cout<<endl;
    }
}
void p20(int n){
    for(int i = 0;i<n/2;i++){
        // int k = 0;
        for(int j = 0;j<n;j++){
            if(j<=i ){
                cout<<"*";
            }
            else if(j>=n-i-1){
                // cout<<i+1;
                // k = 2*n-j;
                cout<<"*";
                // k--;
            }
            
            else cout<<" ";
            
        }
        cout<<endl;
    }
    for(int i = n/2-2;i>=0;i--){
        // int k = 0;
        for(int j = 0;j<n;j++){
            if(j<=i ){
                cout<<"*";
            }
            else if(j>=n-i-1){
                // cout<<i+1;
                // k = 2*n-j;
                cout<<"*";
                // k--;
            }
            
            else cout<<" ";
            
        }
        cout<<endl;
    }
}
void p21(int n){
    for(int i = 0; i<n;i++){
        for(int j = 0; j<n;j++){
            if(i == 0 || i == n-1 || j == 0 || j == n-1){
                cout<<"*";
            }
            // else if(i%2 == 1) cout<<" ";
            else cout<<" ";
        }
        cout<<endl;
    }
}
// void p22(int n){
    // int num1 = n/2;
    // int num2 = n/2;
    // for(int i  = 0; i<n;i++){
        // for(int j = 0; j<n;j++){
            // if((j >=  i && j<=n-1-i )) 
            // cout<<num1;
            // else if(j <=  i && j>=n-1-i) cout<<num2;
            // else cout<<" ";
        // }
        // num1--;
        // 
        // cout<<endl;
    // }
// }
void p22(int n){
            int k = n, m = n;

    for(int i = 0;i<n;i++){
        k = n-i;
        for(int j = 0;j<2*n;j++){
            if(j<=i ){
                cout<<m;
                m--;
            }
            else if(j>=2*n-i-1){
                // cout<<i+1;
                
                cout<<k;
                k++;
                
            }
            else cout<<n-i;
            
        }
            // k=k-i;
            m=n;

        cout<<endl;
    }
}



int main() {

    int n;
    cout<<"Enter number of rows: "<<endl;
    cin>>n;
    p12(n);

    return 0;
}