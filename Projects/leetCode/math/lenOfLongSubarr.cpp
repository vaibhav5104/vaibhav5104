#include <iostream>
using namespace std;

int lenOfLongSubarr(int A[],  int N, int K) 
    { 
        int sum = 0,c = 0,p=0;
        
        for(int i=0;i<N;i++){
            
            sum = 0,c = 0;
            
            for(int j = i; j < N ; j++){
                
                if(sum+A[j] != K){
                    if(sum + A[j] < K){
                        sum += A[j];
                        c++;
                    }
                }else {
                    if(c >= p) p = c;
                }
                
                
            }
            
        }
        
        
        return p;
        
        
        
    } 

int main() {

    int arr[17] = {-13, 0, 6, 15, 16, 2, 15, -12, 17, -16 ,0, -3, 19, -3, 2, -9, -6};

    int r = lenOfLongSubarr(arr,17,15);
    cout<<r<<endl;

    return 0;
}