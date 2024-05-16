/*#include <iostream>
#include <ctime>
#include <string>
using namespace std;

int main()
{*/
    /*//Non Const Pointer

        int var{12};
        int* p_var = &var;

        cout<<p_var<<endl;
        */

    /*//pointer to const
        int var{12};
        int num{10};
        const int* p_var = &var;
        cout<<p_var<<endl;
        *p_var = 20;//Error
        p_var = &num;//No Error
        cout<<*p_var<<endl;//10
    */

    /*//const pointer

        int var{12};
        int num{324};
        int* const p_var = &var;
        cout<<*p_var<<endl;//12
        *p_var = 10;
        cout<<*p_var<<endl;//10//No Error
        //p_var = &num;//Error
    */

    /*//const pointer to const int

        int var{12};
        int num{324};
        const int* const p_var = &var;
        cout<<*p_var<<endl;//12
        *p_var = 10;
        cout<<*p_var<<endl;//Error
        //p_var = &num;//Error
    */

    /*  int const var{12};
        int* p_var = &var;//Since int and const int are different types.Error!
    */
//********************************************************//
/*    const char* predictions[] = {
    "a lot of kids running in the backyard!",
    "a lot of empty beer bottles on your work table.",
    "you partying too much with kids wearing weird clothes.",
    "you running away from something really scary.",
    "clouds gathering in the sky and an army standing ready for war.",
    "dogs running around in a deserted empty city.",
    "a lot of cars stuck in a terrible traffic jam.",
    "you sitting in the dark typing lots of lines of code on your dirty computer.",
    "you yelling at your boss. And oh no! You get fired!",
    "you laughing your lungs out. I've never seen this before."
};
predictions[0] = "Vaibhav";
    for(size_t i{0};i<10;i++){
        cout << predictions[i] << endl;
    }*/

    /*//*predictions[0] = 'A';
    for(size_t i{0};i<11;i++){
        cout << predictions[i] << endl;
    }
    //cout << predictions[0] << endl;*/
    
    /*const char * const students{"Vaibhav Sharma"};
    //cout<<students<<endl;
    predictions[9] = students;


for(size_t i{0};i<10;i++){
        cout << predictions[i] << endl;
    }*/

//********************************************************//

/*int scores[10] {11,12,13,14,15,16,17,18,19,20};
    
    int * p_score { scores};
    
    //Print the address
    cout << "scores : " << scores << endl; // Array
    cout << "p_score : " << p_score << endl;// Pointer
    for(int value : scores){
    cout << "&scores[0]  : " << &scores << endl;
    }
    
    //Print the content at that address
	cout << endl;
	cout << "Printing out data at array address : " << endl;
    cout << "*scores : " << *scores << endl;
    cout << "scores[0] : " << scores[0] << endl;
    cout << "*p_score : " << *p_score << endl;
	cout << "p_score[0] : " << p_score[0] << endl;

    int num{21};
    

    p_score = &num;
        cout << "*scores : " << *scores << endl;
    cout << "scores[0] : " << scores[0] << endl;
    cout << "*p_score : " << *p_score << endl;
	cout << "p_score[0] : " << p_score[0] << endl;
    for(int* value : p_score){
    cout << "&scores[0]  : " << value << endl;
    }*/    	

    /*int scores[10] {11,12,13,14,15,16,17,18,19,20};
    
    int * p_score { scores};
    cout<<p_score<<endl;

    int num{21};
    cout<<&num<<endl;

    p_score = &num;

    cout<<p_score<<endl;

    scores = &num;//error
*/
//*******************************************************************//

    /*int arr[3]{12,23,123};
    cout<<arr<<endl;
    for(size_t i{0};i<3;i++){
    cout<<&arr[i]<<endl;
    }*/

    #include <iostream>


int main(){
using namespace std;

//Increment/ decrement pointer addresses manually
	
    int scores[10] {11,12,13,14,15,16,17,18,19,20};

    //scores++;
    
    int * p_score { scores};
    cout<<p_score[5]<<endl;
    /*
    cout << "Values in scores array (p_score pointer increment) : " << endl;
	
    cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	
	cout << "Address : " << p_score << " value : " <<  *(p_score) << endl;
	++p_score; // Moves froward by sizeof(int) : 4 bytes
	cout << endl;
    */

   
	/*cout << endl;
	cout << "Explicit addition of integer : " << endl;
	p_score = scores; // Reset the pointer to the start of the array
	cout << "scores[4] : " << *(p_score + 4) << endl; // Moves forward by 4 * sizeof(int)
	

    //Can use loops to print these things out : easier

    p_score = scores;
    
	cout << endl;
    cout << "Pointer arithmetic on p_scores pointer and a for loop: " << endl;
    for ( size_t i{0} ; i < size(scores) ; ++i){
        cout <<"Value : "<< *(p_score + i) << endl; // scores[i]
    }
    */


    //Can also do arithmetic on the array name
    //just like any pointer.
    /*
    p_score = scores;
    
	cout << endl;
    cout << "Pointer arithmetic on array name: " << endl;
    for ( size_t i{0} ; i < size(scores) ; ++i){
        cout <<"Value : "<< *(scores + i) << endl;
	}
    */

    // Can Print the elements in reverse order
    /*
	cout<< endl;
    cout << "Elements in reverse order with decrementing pointer arithmetic: " << endl;
    for ( size_t i{size(scores)} ; i > 0 ; --i){
        cout <<"Value : "<< *(scores + i -1) << endl;	// Here we do the -1 thing, because
																//scores is already pointing to the first
																//element in the array.
    }
    */

	//Print in reverse order with -- operator on p_score
    /*
	cout<< endl;
    cout << "Elements in reverse order -- arithmetic on the p_scores pointer: " << endl;
    p_score = scores + size(scores) -1;
	for ( size_t i{size(scores)} ; i > 0 ; --i){
        cout <<"Value : "<< *(p_score--) << endl;		// Here we do the -1 thing, because
																//scores is already pointing to the first
																//element in the array.
    }
    */

    // Can Print the elements in reverse order with array index
    /*
	cout<< endl;
    cout << "Elements in reverse order with array index notation: " << endl;
    for ( size_t i{size(scores)} ; i > 0 ; --i){
        cout <<"Value : "<< scores [ i -1] << endl;
    }
    */
/*
    p_score = scores;
    
    scores[0] = 31; // Array index notation
    *(scores + 1) = 32; // Equivalent to scores[1] = 32 . Pointer arithmetic on array name
    *(p_score + 2) = 33; // Equivalent to scores[2] = 33 . Pointer arithmetic on p_score pointer
    
	cout << endl;
	cout << "Printing out the array after modification of 3 first elements: " << endl;
    for ( size_t i{0} ; i < size(scores) ; ++i){
        cout <<"Value : "<< scores[i] << endl;
    }*/
	
	
   
    return 0;
}