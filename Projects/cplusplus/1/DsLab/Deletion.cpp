#include <iostream>
using namespace std;

int main() {


    int arr[10],pos,n,i,value;
    cout<<"Enter size of an array: ";
    cin>>n;
    cout<<"Enter array : ";
    for (i = 0; i < n; i++) {
        cin>>arr[i];
    }

    cout<<"Enter the index of array: ";

    scanf("%d",&pos);
    for (i = pos; i < n; i++)
    {
        arr[i] = arr[i + 1];
    }


    // arr[pos] = value;

    cout<<"New array : ";

    for (i = 0; i < n - 1; i++)
    {
        // printf("%d",arr[i]);
        cout<<arr[i]<<"  ";
    }
    cout<<endl;

    return 0;

}    
   