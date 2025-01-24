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




int main(){
    vector<int> arr={3,4,0};

    Node* x = new Node(100);
    Node* result = convertArrToLL(arr);
    traversalAndLengthOfLL(result);
    
    return 0;
}