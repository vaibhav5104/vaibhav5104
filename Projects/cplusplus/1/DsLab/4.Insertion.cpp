#include <iostream>
using namespace std;

int main() {   

    int pos,n,i,value;
    cout<<"Enter size of array : ";
    cin>>n;
    int arr[n];
    cout<<"Enter the array : "<<endl;

    for (i = 0; i < n; i++)
    {
        scanf("%d",&arr[i]);
    }

    cout<<"Enter the index of an array : "<<endl;
    cin>>pos;
    cout<<"Enter the value of array : ";
    cin>>value;
    for (i = n - 1; i >= pos - 1; i--)
    {
        arr[i + 1] = arr[i];
    }

    arr[pos] = value;

    cout<<"New array : ";

    for (i = 0; i <= n; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;



    return 0;
}