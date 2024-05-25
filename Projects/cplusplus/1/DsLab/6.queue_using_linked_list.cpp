#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node* next;
};

Node* front = nullptr;
Node* rear = nullptr;

void enqueue(int d)
{
    Node* new_n = new Node;
    new_n->data = d;
    new_n->next = nullptr;

    if (front == nullptr && rear == nullptr) {
        front = rear = new_n;
    }
    else {
        rear->next = new_n;
        rear = new_n;
    }
}

void display()
{
    Node* temp = front;
    if (front == nullptr && rear == nullptr) {
        cout << "\nQueue is Empty";
    }
    else {
        while (temp) {
            cout << " " << temp->data << " ";
            temp = temp->next;
        }
    }
}

void dequeue()
{
    if (front == nullptr && rear == nullptr) {
        cout << "\nQueue is Empty";
    }
    else {
        Node* temp = front;
        front = front->next;
        delete temp;
    }
}

int main()
{
    enqueue(5);
    enqueue(10);
    enqueue(15);
    enqueue(20);
    enqueue(25);
    cout << "Queue:";
    display();
    cout << "\nQueue After Dequeue:";
    dequeue();
    display();
    cout<<endl;

    return 0;
}
