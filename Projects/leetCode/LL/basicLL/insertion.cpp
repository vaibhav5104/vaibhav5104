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

Node* insertAtEnd(Node* head, int x) {
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
    Node* start = new Node(x,head);
    // start->next = head;
 
    return start;
}
Node* insertAtRandom(Node* head, int value, int k) {
    if (head == nullptr) {
        if(k == 1) return new Node(value);
        else return nullptr;
    }

    if(k == 1) {
        Node* temp = new Node(value,head);
        return temp;
    }

    Node* temp = head;

    // Traverse the list to find the node with value k
    while (temp != nullptr) {
        if (temp->data == k) {
            // Insert the new node after the current node
            Node* newNode = new Node(value); // Create the new node
            newNode->next = temp->next;      // Link the new node to the next node
            temp->next = newNode;            // Update the current node's next pointer
            return head;                     // Return the head of the list
        }
        temp = temp->next; // Move to the next node
    }

    // If k is not found, return the unchanged list
    cout << "Key " << k << " not found in the list.\n";
    return head;
}

Node* insertBeforeVal(Node* head,int k,int val){//insert val before k
    if(head == NULL) return head;
    if(head->data == k) return new Node(val,head);
    Node* temp = head;
    Node* valNode = new Node(val);
    Node* mover ; 
    while(temp->next != nullptr){
        temp = temp->next;
        if(temp->data == k){
            mover->next = valNode;
            valNode->next = temp;
            // return head;
        }
        mover = temp;
    }
    return head;
}



int main() {

    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrToLL(arr);
    Node* newHead = insertBeforeVal(head,4,22);
    traversalAndLengthOfLL(newHead);

    return 0;
}