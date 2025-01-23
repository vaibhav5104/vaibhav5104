#include <iostream>
#include <vector>
using namespace std;
class Node{
    public: // access modifier
    int data; // the data value
    Node* next; // the pointer to the next value
    public:
    // constructor
    Node (int data1, Node* next1){
        data=data1;  // Initialize data with the provided value
        next=next1;  // Initialize next with the provided
    }
    
    Node (int data1){
        data=data1;  // Initialize data with the provided value
        next=nullptr;  // Initialize next as null since it's the end of the list

    }
};
int main(){
    vector<int> arr={2,5,8,7};
    Node* y;
    for(int i = 0; i<sizeof(arr);i++){
        y = new Node(arr[i]);   
    }
    cout<<y->data<<'\n'; // returns the memory value
    cout<<y->next<<'\n'; // returns the data stored at that memory point
}
/* 
#include <iostream>
#include <vector>
using namespace std;

int main() {

    int x = 12;
    int* y = &x;

    int* z = new int ;//z isa  block of memory is allocated on the heap to store an integer, and the address of this block is stored in z
    z = y; // The original heap-allocated memory for z is lost because you reassign z before storing its address elsewhere. This is a memory leak since the heap memory can no longer be freed.
    *z =  10;

    cout<<&x<<endl;
    cout<<y<<endl;
    cout<<z<<endl;//storing the address(same as y,points to adderss of x), therefore z,y,&x is same
    cout<<&y<<endl;
    cout<<&z<<endl;

    //remember y and z is storing the address 

    delete z;

    return 0;
} */