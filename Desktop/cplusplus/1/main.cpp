/* #include <iostream>


int main(){

    /* const char * message {"Hello World!"};
    std::cout << "message : " << message << std::endl;

    //*message = "B"; // Compiler error
    std::cout << "*message : " << *message << std::endl;

    //Allow users to modify the string
    char message1[] {"Hello World!"};
    message1[0] = 'B';
    std::cout << "message1 : " << message1 << std::endl;
     *

    char message{"A"};
    return 0;
} */
/*
#include <iostream>


int main(){

    //Declare array
    char message [6]  {"Hello"};
    //int data[5] {1,2,3,3,3};

    //std::cout << "data : " << data << std::endl;


    //Print out the array through looping

    std::cout << "message : ";
    for( auto c : message){
        std::cout << c ;
    }
    std::cout << std::endl;




    //Change characters in our array
    message[1] = 'a';

    //Print out the array through looping
    std::cout << "message : ";
    for( auto c : message){
        std::cout << c ;
    }
    std::cout << std::endl;




    // Will probably print garbage after your char array

    std::cout << "message : " << message << std::endl;




    //If a character array is null terminated, it's called as C-String

    char message1 [] {'H','e','l','l','o','\0'};
    std::cout << "message1 : " << message1 << std::endl;
    std::cout << "sizeof(message1) : " << sizeof(message1) << std::endl;




    char message2 [6] {'H','e','l','l','o'};
    std::cout << "message2 : " << message2 << std::endl;
    std::cout << "sizeof(message2) : " << sizeof(message2) << std::endl;

    char message3 [] {'H','e','l','l','o'}; // This is not a c string ,
                                            //as there is not null character
    std::cout << "message3 : " << message3 << std::endl;
    std::cout << "sizeof(message3) : " << sizeof(message3) << std::endl;




    //String literal

    char message4 [] {"Hello"};
    std::cout << "message4 : " << message4 << std::endl;
    std::cout << "sizeof(message4) : " << sizeof(message4) << std::endl;




    //Can't safely print out arrays other than those of characters
    int numbers [] {1,2,3,4,5};
    std::cout << "numbers :  " << numbers << std::endl;



    return 0;
}

 */
/*
#include <iostream>
using namespace std;

int main() {

    int nums[2]{1,2};
    cout<<nums<<endl;

    char arr1[3]{'H','I'};
    cout<<"arr1 : "<<arr1<<endl;

    char arr2[9]{"HELLO"};
    cout<<"&arr2 : "<<&arr2<<endl;
    for (size_t i = 0; i < 5; i++)
    {
        cout<<"&arr["<<i<<"] : "<<&arr2[i]<<endl;
    }
 */
/*
In this code, you have a character array arr2 of size 9, initialized with the string "HELLO". Then,
you iterate over the array and print the memory addresses of its individual elements using the cout statement.
Let's analyze the behavior:

char arr2[9]{"HELLO"};: This line declares an array arr2 of char type with a size of 9 elements and initializes it
with the characters 'H', 'E', 'L', 'L', 'O', and the remaining elements will be filled with the null character ('\0')
since the provided string has fewer characters than the array size.

for (size_t i = 0; i < 5; i++) { ... }: This is a for loop that iterates five times,
from i = 0 to i = 4. The loop will execute five iterations.

cout << "&arr2[" << i << "] : " << &arr2[i] << endl;: Inside the loop, you are printing
the memory address of each element in the arr2 array.

Now, let's understand the behavior of the cout statement:

When you use &arr2[i], you are taking the address of the i-th element in the arr2 array. Since the array is of type char,
&arr2[i] will give you a char* (pointer to char), which represents the memory address of that specific element.

In each iteration of the loop, the memory address of the i-th element is printed. However, due to the nature of C-style
strings, cout interprets the memory address as the starting address of a null-terminated character array (a string) and
keeps printing characters until it encounters a null character ('\0') in memory.

The first iteration (i = 0): &arr2[0] points to the memory address of the 'H' character. When printed, cout will interpret
the memory from that address and print characters until it reaches the null character, effectively printing the entire string
"HELLO" from the 'H' to the null character.

The second iteration (i = 1): &arr2[1] points to the memory address of the 'E' character. When printed, cout will interpret
the memory from that address and print characters until it reaches the null character, effectively printing "ELLO" from the
'E' to the null character.

The third, fourth, and fifth iterations (i = 2, i = 3, i = 4): These iterations follow the same pattern as the second
iteration, each printing a substring of "ELLO" starting from the respective character and ending at the null character.

So, the final output will be as follows:

&arr2[0] : HELLO
&arr2[1] : ELLO
&arr2[2] : LLO
&arr2[3] : LO
&arr2[4] : O

Keep in mind that this behavior is specific to cout treating the memory as a null-terminated string.
Printing memory addresses directly can be useful for debugging purposes but must be done with caution,
as different environments or compilers might interpret and display memory addresses differently.

*/
/* char arr2[5]{'H','I','N','D','I'};
for (size_t i = 0; i < 5; i++)
{
    cout<<"&arr["<<i<<"] : "<<&arr2[i]<<endl;
} */
/*
The output you are seeing is a result of how `cout` treats character arrays (including C-style strings) when you pass
their addresses to it.

Even though `arr2` is not explicitly null-terminated (i.e., it doesn't have a `'\0'` character at the end), the `cout`
statement treats it as if it were a C-style string and continues to print characters from the address until it
encounters a null character (`'\0'`) in memory.

However, it's important to understand that this behavior is not guaranteed and can lead to undefined behavior. Relying
on this behavior is not recommended, as it can lead to unexpected results if the memory layout changes or in different
environments. The null-terminated behavior of `cout` is specific to its implementation and may not hold in all cases.

The loop iterates over the `arr2` array and prints the memory addresses of each element using `cout`. When you print
`&arr2[i]`, `cout` interprets it as a pointer to a C-style string and starts printing characters from the memory address
it points to until it encounters a null character (`'\0'`) or reaches the end of the allocated memory. In this case,
since there is no explicit null character, `cout` will continue to print characters until it finds a null character by chance,
or it reaches an inaccessible memory location.

Although you might see similar output to a null-terminated C-style string, it is crucial to understand that this
behavior is not guaranteed, and the code is not conforming to the definition of a C-style string. It's essential to
always null-terminate character arrays if you intend to use them as C-style strings to ensure predictable and consistent behavior.
*/
/*
    char arr3[4]{'a','b','c','\0'};

    char *arr4{arr3};
    cout<<arr4<<endl;//This line prints the entire C-style string starting from the address pointed to by arr4,
                    //which is the first element of arr3 ('a').

    return 0;} */
/*
#include <iostream>
#include <fstream>
using namespace std;

int main() {

    // string line = "Vaibhav Sharma";
    fstream obj;
    obj.open("myFile.txt");

    // obj << line <<endl;

    int n = 5;
    int arr[n];



    obj.open("myFile.txt",ios::in);


    for (size_t i = 0; i <= n; i++)
    {
            obj >> arr[i];

    }

    obj.close();


    for (size_t i = 0; i <= n; i++)
    {
            obj << "  "<< arr[i];

    }


    return 0;
} */
/*
#include <iostream>
#include <fstream>
using namespace std;

int main() {

    fstream obj;
    obj.open("myFile.txt");

    int n = 5;
    int arr[n];

    // Check if the file was opened successfully
    if (!obj.is_open()) {
        cout << "Error opening file." << endl;
        return 1;
    }

    for (size_t i = 0; i < n; i++)
    {
        obj >> arr[i];
    }

    obj.close();

    obj.open("myFile.txt", ios::in);

    // Check if the file was opened successfully
    if (!obj.is_open()) {
        cout << "Error opening file." << endl;
        return 1;
    }

    for (size_t i = 0; i < n; i++)
    {
        obj << "  " << arr[i];
    }

    obj.close();

    return 0;
}
 */
/*
#include <iostream>
using namespace std;
int i = 0,j = 0;
void func(int n){
    if (n > 0)
    {
    cout<<"i : "<<i<<endl;
    func(n-1);
    i++;
    cout<<"j : "<<j<<endl;
    j++;
    func(n-1);
    }


}


int main() {

    int n = 5;
    func(n);

    return 0;
} */

#include <iostream>
#include <vector>
#include <bits/stdc++.h>
using namespace std;
// #include <stack>
// #include <queue>
// #include <c++/10/bits/stl_deque.h>
/*
void printpriorityqueue(priority_queue<int> pq)
{
    priority_queue<int> pq2=pq;
    while(!pq.empty())
    {
        cout<<pq.top()<<"\n";
        pq.pop();
    }
}

void explainPair(){
    pair<int,int> p = {2,3};
    cout<<"p.first : "<<p.first<<"\np.second : "<<p.second<<endl;
    pair<int,int> arr[] = {{2,1},{2,3}};
    cout<<arr[1].second<<endl;
//
    int arr[5] = {1,2,3};
    cout<<sizeof(arr)<<endl;
    cout<<arr[3]<<endl;
    cout<<arr[4]<<endl;
//
    cout<<sizeof(p.first)<<endl;
}
void explainVectors(){
    vector<int> v(2,100) ;
    // cout<<sizeof(v[4])<<endl;
    v.insert(v.end(), {10, 20, 30});//{100,100,10, 20, 30, 40, 50}
    v.push_back(60);//{100,100,10, 20, 30, 60}
    // v.emplace_back(60);//{100,100,10, 20, 30, 60,60}

    // cout<<v[6]<<endl;

    // vector<int>::iterator in = v.begin();//works on address of elements
    // in++;
    // cout<<*(in)<<" ";
    // in = in + 7;
    // cout<<*(in)<<" ";
    // cout<<v.back()<<endl;
    // cout<<v[5]<<endl;

    // v.erase(v.begin() + 5);

    // for(vector<int>::iterator in = v.begin(); in != v.end(); in++){
        // cout<<*(in)<<" ";
    // }

    cout<<endl;


    v.insert(v.begin(),300);//{300,100,100,10,20,30,60,60}

    v.insert(v.begin()+1,2,10);//{300,10,10,100,100,10,20,30,60,60}

    for(auto in = v.begin(); in != v.end(); in++){
        cout<<*(in)<<" ";
    }
    cout<<endl;
    cout<<v.size()<<endl;//10
    vector<int> v2(2,300);
    v2.swap(v);
    for(auto in = v.begin(); in != v.end(); in++){
        cout<<*(in)<<" ";
    }
    cout<<endl;

    v.clear();

    if (v.empty()) {
    cout << "Vector is empty" << endl;
    } else {
        cout << "Vector is not empty" << endl;
    }
}
void explainStack(){
    stack<int> st;
    st.push(1);//{1}
    st.push(2);//{1,2}
    st.push(3);//{1,2,3}
    // st.emplace(4);//{1,2,3,4}

    cout<<st.top();//4
    st.pop();//{1,2,3}
    cout<<st.top();//3
    cout<<st.size();//3
    cout<<endl;
    cout<<st.empty();//false
}
void explainQueue(){
    queue<int> q;
    q.push(1);//{1}
    q.push(2);//{1,2}
    // q.emplace(4);//{1,2,4}

    cout<<q.back()<<endl;//4
    cout<<(q.back() += 5);//9
    cout<<endl;
    cout<<q.front()<<endl;
}
void explainPriority_queue(){
    priority_queue<int> pq;
    for(int i=1;i<=5;i++)
    pq.push(i);

    cout<<"The elements of the priority queue are:"<<endl;
    printpriorityqueue(pq);

    cout<<"The size of the priority queue: "<<pq.size()<<endl;
    cout<<"The top element of the priority queue: "<<pq.top()<<endl;
    cout<<"Pop the top element: "<<endl;
    pq.pop();
    printpriorityqueue(pq);
}
//min-heap
void printpriorityqueue(priority_queue<int,vector<int>,greater<int>> pq)
{
    priority_queue<int,vector<int>,greater<int>> pq2=pq;
    while(!pq.empty())
    {
        cout<<pq.top()<<"\n";
        pq.pop();
    }
}
void explainPriority_queue(){
    priority_queue<int,vector<int>,greater<int>> pq;
    for(int i=1;i<=5;i++)
    pq.push(i);

    cout<<"The elements of the priority queue are:"<<endl;
    printpriorityqueue(pq);

    cout<<"The size of the priority queue: "<<pq.size()<<endl;
    cout<<"The top element of the priority queue: "<<pq.top()<<endl;
    cout<<"Pop the top element: "<<endl;
    pq.pop();
    printpriorityqueue(pq);
}


 */

void explainVectors(){
    vector<int> v(2,100) ;
    vector<int> vec;
    // cout<<sizeof(v[4])<<endl;
    v.insert(v.end(), {10, 20, 30});//{100,100,10, 20, 30, 40, 50}
    v.push_back(60);//{100,100,10, 20, 30, 60}
    // v.emplace_back(60);//{100,100,10, 20, 30, 60,60}

    // cout<<v[6]<<endl;

    // vector<int>::iterator in = v.begin();//works on address of elements
    // in++;
    // cout<<*(in)<<" ";
    // in = in + 7;
    // cout<<*(in)<<" ";
    for(auto in = v.begin(); in != v.end(); in++){
        cout<<*(in)<<" ";
    }

    for(int i = 0; i<n;i++){
        cout<<vec[i];
    }
    auto vi = v.front();
    cout<<"v.back() : "<<v.back()<<endl;
    cout<<"v.end() : "<<vi<<endl;
    // cout<<"v.at(3) : "<<v.at(v.back())<<endl;
    

    v.erase(v.begin() + 5);

    for(vector<int>::iterator in = v.begin(); in != v.end(); in++){
        cout<<*(in)<<" ";
    }



    v.insert(v.begin(),300);//{300,100,100,10,20,30,60,60}

    v.insert(v.begin()+1,2,10);//{300,10,10,100,100,10,20,30,60,60}

    
    cout<<endl;
    cout<<v.size()<<endl;//10
    vector<int> v2(2,300);
    v2.swap(v);
    for(auto in = v.begin(); in != v.end(); in++){
        cout<<*(in)<<" ";
    }
    cout<<endl;

    v.clear();

    if (v.empty()) {
    cout << "Vector is empty" << endl;
    } else {
        cout << "Vector is not empty" << endl;
    }
}

int main()
{
    // https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/

    //  queue<int> q;
    //     q.push(1);//{1}
    //     q.push(2);//{1,2}
    //     // q.emplace(4);//{1,2,4}

    //     cout<<q.back()<<endl;//4
    //     cout<<(q.back() += 5);//9
    //     cout<<endl;
    //     cout<<q.front()<<endl;

    // deque:same as vector , have similar functions e.g. oush_back,emblace_back,push_front,emblace_front,pop_back,pop_front,back(),front();

    // set: Sorted and unique
    // willnot insert same value again!
    //  operations : insert,emplace,find,count,erase,lower_bound,upper_bound
    // watch recommended video for lower_bound,upper_bound;

    // multiset : same as set,only stores duplicate eements

    // unordered_set : lower_bound,upper_bound doesnot work,rest all functions are same
    // it has better complexity than in most cases , except some when collision happens

    // map : map stores unique key in sorted order in similar to set data structure
    // map<int, int> mpp; // map with int keys and int values
    // mpp[1] = 23;       // inserting key-value pair {1, 23} into mpp
    // mpp.insert({2, 4});
    // cout << "size : " << mpp.size() << endl;
    // for (auto it : mpp)
    // { // sorted
        // cout << it.first << " , " << it.second << endl;
    // }
    // cout << mpp[1] << endl; // accessing value associated with key 1 (outputs 23)

    // map<int, pair<int, int> > mpp2; // map with int keys and pair<int, int> values
    // mpp2.insert({1, {2, 3}});       // inserting key-value pair {1, {2, 3}} into mpp2
    // accessing value associated with key 1 (which is a pair)
    // cout << mpp2[1].first << ", " << mpp2[1].second << endl; // outputs 2, 3

    // map<pair<int, int>, int> mpp3;
    // mpp3[{2, 4}] = 13;
    // cout << mpp3.size() << endl;

    // auto it = mpp2.find(3);
    // cout<< *(it).first;

    // auto it = mpp2.lower_bound(3);
    // auto it = mpp2.upper_bound(3);

    // multimap : it can store multiple keys
    // only mpp[key] cannot be used here

    // unorderedmap : same as set and unordered_set

    //sort 
    // int a[] = {4,3,5,6,2};
    // sort(a[1],a[4]);


    explainVectors();


    return 0;
}