#include <iostream>
#include <limits>
using namespace std;
    
    /*void any(){
        int random_num = (rand()%7);
        switch(random_num){
            case 1:
            cout<<"One"<<endl; 
            break;

            case 2:
            cout<<"two"<<endl; 
            break;

            case 3:
            cout<<"three"<<endl; 
            break;

            case 4:
            cout<<"four"<<endl; 
            break;

            case 5:
            cout<<"five"<<endl; 
            break;

            case 6:
            cout<<"Yey! Six! "<<endl;
            cout<<"Again!"<<endl; 
            break;
        }
        
        
    
    }*/ 

int main(){

    /*char message[]{'H','e','l','l','o','\0'};

    cout<<size(message)<<endl;
    //cout<<message[5]<<message[6]<<endl;
    for(size_t i{5};i<10;i++){
        cout<<message[i]<<endl;
    }*/

    /*char message[]{"He"};
    cout<<size(message)<<endl;*/

    /*int message[]{1,2,3,4};
    cout<<message[12]<<endl;
    message[12] = 12;
    cout<<message[12]<<endl;*/

//******************************************************//    

    /*int array[4][3];
    cout<<sizeof(array)<<endl;

    for(size_t i{0};i<4;i++){
        for(size_t j{0};j<3;j++){
            cout<<"["<<i<<","<< j<<"]"<<array[i][j]<<endl;
        }
    }*/


    int house_block [7] [5] [3] {
        {
            {1,2,3},{4,5,6},{7,8,9},{10,11,12},{13,14,15} 
        },
        {
            {16,17,18},{19,20,21},{22,23,24},{25,26,27},{28,29,30}  
        },
        {
            { 31,32,33},{34,35,36},{37,38,39},{40,41,42},{43,44,45} 
        },
        {
             {46,47,48},{49,50,51},{52,53,54},{55,56,57},{58,59,60}  
        },
        {
             {61,62,63},{64,65,66},{67,68,69},{70,71,72},{73,74,75} 
        },
        {
            {76,77,78},{79,80,81},{82,83,84},{85,86,87},{88,89,90}  
        },
        {
             {91,92,93},{94,95,96},{97,98,99},{100,101,102},{103,104,105} 
        }
    };


    for(size_t i{0}; i < std::size(house_block) ; ++i){

        for(size_t j{0} ; j < std::size(house_block[i]) ; ++j){

            for(size_t k{0} ; k < std::size(house_block[i][j]) ; ++k){

                std::cout << house_block[i][j][k] << "  ";
            }
        }
    }

    return 0;
}
/*#include <iostream>
#include <random>
using namespace std;

void random() {
    random_device rd;  // Create a random device for seeding the generator
    mt19937 gen(rd()); // Create a Mersenne Twister pseudo-random generator
    uniform_int_distribution<int> dis(1, 6); // Define the range of random numbers

    int random_num = dis(gen); // Generate a random number using the generator

    switch (random_num) {
        case 1:
            cout << "One" << endl;
            break;

        case 2:
            cout << "Two" << endl;
            break;

        case 3:
            cout << "Three" << endl;
            break;

        case 4:
            cout << "Four" << endl;
            break;

        case 5:
            cout << "Five" << endl;
            break;

        case 6:
            cout << "Yey! Six!" << endl;
            cout << "Again!" << endl;
            break;
    }

    if (random_num != 6) {
        random(); // Call the function recursively until a 6 is generated
    }
}

int main() {
    random();

    return 0;
}
*/

