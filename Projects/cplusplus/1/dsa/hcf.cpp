#include <iostream>

using namespace std;

int AllDivisors(int arr){
	int facts[][];

    for(int i = 1; i<= n;i++){
        for(int j = 1; j<=i;j++){
        if(i%j == 0) facts[i] = facts[i];
        }
    }

    return sum;
}


int main() {

    int arr[4] = {4,6,5,7};

    // for (size_t i = 0; i < sizeof(arr)/4; i++)
    // {
    //     /* code */
    // }

    for(int i = 0; i<sizeof(arr)/4;i++){
    int result = AllDivisors(arr[i]);
    cout<<result<<endl;
    }



    return 0;
}


