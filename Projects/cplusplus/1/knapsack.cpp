#include <iostream>
#include <math.h>
using namespace std;

class knapsack {

public : 

// Function to Search
    int search(double ratio[], double k, int n) {
    for (int i = 0; i < n; i++) {
        if (ratio[i] == k) {
            return i;
        }
    }
    return -1;
}

// Function to find Maximum
int max(double ratio[], int n) {
    double k = ratio[0];
    for (int i = 1; i < n; i++) {
        if (ratio[i] > k) {
            k = ratio[i];
        }
    }

    int p = search(ratio, k, n);
    // cout << "Maximum number in the given ratio is " << k << " at index " << p << endl;

    return p;
}


// Constructor
    knapsack(double object[],double profit[],double weight[] ,double w ,int n){

// To found ratio : 
    double ratio[n];
    for (size_t i = 0; i < n; i++)
    {
        ratio[i] = profit[i]/weight[i];
    }


// To make new array of maximum numbers in array of ratio
    int arr[n];
    for (size_t i = 0; i < n; i++)
    {
        int p = max(ratio,n);
        ratio[p] = 0;
        arr[i] = p;
    }


// To make profit array in decending order 
    double total[n];
    for (size_t i = 0; i < n; i++)
    {
        total[i] = profit[arr[i]]; 
    }



// To find remaining weight and make array of it.
    double rm[n];
    for (int i = 0; i < n; i++)
    {
        j = i;

    rm[0] = w - weight[arr[0]];

    for (int i = 1; i < n; i++) {

    /* if (rm[i - 1] == 0)
        break; */

    rm[i] = rm[i - 1] - weight[arr[i]];
    if (rm[i] == 0)
        break;
    if (rm[i]<0)
    {
        rm[i] = (rm[i - 1]/weight[arr[i]]);
        break;
    }
    }
    /* if (rm[i] < 0)
    {
        j = j -1;
        break;
    } */
    }

/*     cout<<"Array of remaining weight is : ";
    for (size_t i = 0; i < j; i++)
    {
        cout<<rm[i]<<" ";
    }
 */
// To find the sum of profit array in decending order to the index when remaining weight is zero.
    cout<<endl;
    // cout<<"Sums are : ";
    for (int i = 0; i < j; i++)
    {   
        // cout<<"i : "<<i<<" , "<<j<<"  "<<endl;

        if (i == j - 1)
        {
            total[j - 1] = rm[j - 1] * total[j - 1];
            // cout<<"total : "<<total[j - 1]<<endl;
        }
        
        sum = sum + total[i];
        // cout<<sum<<" ";
    }
    // cout<<endl<<endl;
    cout<<"Total profit is "<<sum<<endl;

    }

    private: 

    double sum = 0;
    int j;

};

// Knapsack using greedy approach 

int main() {

    int n;
    cout<<"Enter number of items"<<endl;
    cin>>n;

    double object[n],profit[n], weight[n] , w , sum = 0;
    

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

    knapsack obj(object,profit, weight , w ,n);

    return 0;
}






