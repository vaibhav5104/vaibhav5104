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

void  traversalAndLengthOfLL(Node* head){
    // Node* head = convertArrToLL(arr);
    Node* temp = head;
    int cnt = 0;
    while (temp)
    {
        cout<<temp->data<<" ";
        temp = temp->next;
        cnt++;
    }   
    cout<<endl;
    cout<<"Lenght of LL is : " <<cnt<<endl;
}

Node* insertAtEnd(vector<int>& arr,int x){
    Node* head = convertArrToLL(arr);
    Node* mover = new Node(x); // Create a new node with value x

    // If the linked list is empty, return the new node as the head
    if (head == nullptr) {
        return mover;
    }

    Node* temp = head; // Start from the head

    // Traverse to the last node
    while (temp->next != nullptr) {
        temp = temp->next;
    }

    // Link the new node to the end of the list
    temp->next = mover;

    return head;
}

Node* insertAtStart(vector<int>& arr,int x){

    Node*head = convertArrToLL(arr);
    Node* start = new Node(x);
    start->next = head;

    return start;

}

Node* insertAtRandom(vector<int>& arr,Node* x,int k){

    Node*head = convertArrToLL(arr);

    Node* temp = head;

    while(temp->next != nullptr){

        if(temp->data == k){
            x->next = temp->next;
            temp->next = x;
            break;
        }
        temp = temp->next; 

    }

    return head;

}

int main() {

    // Your code here

    return 0;
}