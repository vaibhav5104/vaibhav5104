#include <iostream>
using namespace std;

int p;

int search(double ratio[], double k, int n) {
    for (int i = 0; i < n; i++) {
        if (ratio[i] == k) {
            return i;
        }
    }
    return -1;
}

int max(double ratio[], int n) {
    double k = ratio[0];
    for (int i = 1; i < n; i++) {
        if (ratio[i] > k) {
            k = ratio[i];
        }
    }

    int p = search(ratio, k, n);
    cout << "Maximum number in the given ratio is " << k << " at index " << p << endl;

    return p;
}
/* 
int totl(int arr[],int n,double profit[]){
    

} */

/* 
// Remaining Weight Funciton

void rm(int arr[] , double weight[] , int n , double w , double rm[]){

    
    for (int i = 0; i < n; i++)
    {
        if (i == 0)
        {
            rm[i] = w - weight[arr[i]];
        }else
        {
            rm[i] = rm[i-1] - weight[arr[i]];
        }
        
        
        
    }

    for (size_t i = 0; i < n; i++)
    {
        cout<<rm[i]<<" ";
    }
    

} */


int main() {
    
    
    int n;
    cout<<"Enter number of items"<<endl;
    cin>>n;

    double object[n],profit[n], weight[n] , w , sum = 0;
    double rm[n];

    cout<<"Enter values of objects"<<endl;
    for (size_t i = 0; i < n; i++)
    {
        cin>>object[i];
    }
    
    cout<<"Enter values of profit"<<endl;
    for (size_t i = 0; i < n; i++)
    {
        cin>>profit[i];
    }
    
    cout<<"Enter values of weight"<<endl;
    for (size_t i = 0; i < n; i++)
    {
        cin>>weight[i];
    }
    cout<<endl;

    cout<<"Enter Weight of Knapsack : "<<endl;
    cin>>w;

    double ratio[n];

    for (size_t i = 0; i < n; i++)
    {
        ratio[i] = profit[i]/weight[i];
    }


    
    
    double result[n];

    int q  = n;
    int arr[n];
    for (size_t i = 0; i < n; i++)
    {
        int p = max(ratio,n);
        ratio[p] = 0;
        arr[i] = p;

    }

    double total[n];

    for (size_t i = 0; i < n; i++)
    {
        total[i] = profit[arr[i]]; 
    }

    cout<<"profit array in decending order : ";

    for (size_t i = 0; i < n; i++)
    {
        cout<<total[i]<<" ";
    }
    

    int j;
    
    for (int i = 0; i < n; i++)
    {
        j = i;

        // Initialize rm[0] outside the loop
    rm[0] = w - weight[arr[0]];

    // Loop over the remaining elements
    for (int i = 1; i < n; i++) {
    // Check if rm[i-1] is zero, if it is, exit the loop
    if (rm[i - 1] == 0)
        break;

    // Calculate rm[i] using the formula
    rm[i] = rm[i - 1] - weight[arr[i]];
    if (rm[i] < 0)
    {
        j = j -1;
        break;
    }
    
    }

    }

    cout<<endl;

    for (size_t i = 0; i < j; i++)
    {
        sum = sum + total[i];
    }

    cout<<"Total profit is "<<sum<<endl;

    return 0;
 }
