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

//conversion
Node* convertArrToLL(vector<int>& arr){

    Node* head = new Node(arr[0]);
        Node* mover = head;
        
        for(int i = 1;i < arr.size();i++){
            Node* temp = new Node(arr[i]);
            mover-> next = temp;
            mover = temp;
        }
        return head;

}

bool searchAnElement(vector<int>arr,int target){
    Node* head = convertArrToLL(arr);
    Node* temp = head;
    while (temp)
    {
        if(temp->data == target) return true;
        temp = temp->next;
    }   
    return false;
}


int main() {

    // Your code here

    return 0;
}