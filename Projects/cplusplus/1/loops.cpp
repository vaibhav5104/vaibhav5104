/*#include<iostream>
using namespace std;

int main(){
    
    //size_t row{1};
    //size_t col{1};
    char dash{'-'};
    char danda{'|'};
    int n{0};

    for(size_t i{6};i>1;i-- ){
        for(size_t j{1};j<i;j++){
            if (j%2 == 0)
            {
                cout<<"|  |  |  |  |  |  |";
            }else{
                cout<<" __ __ __ __ __ __";
            }
            cout<<endl;
            
        }
        n++;
        i = 6;
        if(n == 3){
            break;
        }
    }*/    

    /*while(row<4){
        while(col<4){
            cout<<"row: "<<row<<"\tcol"<<col<<endl;
            col++;
        }
        cout<<endl;
        col = 1;
        row++;
        
    }*/

    /*do{
        do{
            cout<<"row: "<<row<<"\tcol"<<col<<endl;
            col++;
        }while(col<4);
        cout<<endl;
        col = 1;
        row++;
    }while(row<4);
*/

/*#include <iostream>
#include <string>

int main() {
    std::string sentence;
    std::cout << "Enter a sentence: ";
    std::getline(std::cin, sentence);

    int count[256] = {0}; // Array to store the character frequency

    // Loop through each character in the string
    for (size_t i = 0; i < sentence.length(); ++i) {
        char ch = sentence[i];
        count[ch]++;
    }

    // Display the character frequency
    for (int i = 0; i < 256; ++i) {
        if (count[i] > 0) {
            std::cout << "Character '" << static_cast<char>(i) << "' appears " << count[i] << " times" << std::endl;
        }
    }

    return 0;
}
*/
#include <iostream>
using namespace std;

int main() {
    /*const int size = 8; // Size of the chessboard

    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            // Check if the sum of row and column indices is even
            if ((i + j) % 2 == 0) {
                std::cout << "□ "; // Print a white square
            } else {
                std::cout << "■ "; // Print a black square
            }
        }
        std::cout << std::endl; // Move to the next line
    }*/
    /*char bag_of_values[]{'a','b','c'};

    for(int any : bag_of_values){
        cout<<any<<endl;
    }*/
    
    //int scores[10];

    //scores[0] = 1;
    //scores[1] = 2;

    //cout<<"Done!"<<endl;
    //scores[12] = 18;
    //cout<<scores[12]<<endl;
    //cout<<"Very well!"<<endl;

    //const int any[]{12,23,3,4};
    //any[0] = 11;
    
    //int sum{0};
    //int scores[]{1,2,3,4,5};

    /*for(int result : scores){
        sum += result;
    }
    cout<<"Sum: "<<sum<<endl;
    */

   //cout<<size(scores)<<endl;
   //cout<<(sizeof(scores)/sizeof(scores[1]))<<endl;



    return 0;
}