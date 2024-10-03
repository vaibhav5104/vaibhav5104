/* #include <iostream>
#include <vector>
using namespace std;

vector<int> getConcatenation(vector<int>& nums){
    int n = nums.size();
    vector<int> ans;
    ans.resize(2 * n); 

    
    

    for(auto in = nums.begin(); in != nums.end(); in++){
        ans[*(in)] = nums[*(in)];
        ans[n + *(in)] = nums[*(in)];
    }

    return ans;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums;
    nums.resize(n); // Resize the vector to have n elements

    for(auto it = nums.begin(); it != nums.end(); it++){
        cin>>*(it);
    }
    vector<int> result = getConcatenation(nums);

    for(auto in = result.begin(); in != result.end(); in++){
        cout<<*(in)<<" ";
    }

    // delete[] result; 

    return 0;
} */
#include<iostream>
#include<bits/stdc++.h>
#include<vector>
#include <string>
using namespace std;

// int Divisor(int num){

//     int counts[num],count,sum=0;

//     for(int i = 1; i<= num;i++){
//         count = 0;
//         for(int j = 1; j<=i;j++){
//         if(i%j == 0) count = count+j;
//         }
//         counts[i] = count;
//     }

//     for(int i = 1; i<=num;i++){
//         sum = sum + counts[i];
//     }

//     return sum;
// }

/* 
int Divisor(int n){
	int counts[n],count,sum=0;

    for(int i = 1; i<= n;i++){
        // count = 0;
        for(int j = 1; j<=i;j++){
        if(i%j == 0) sum = sum+j;
        }
        // counts[i] = count;
    }

    // for(int i = 1; i<=n;i++){
    //     sum = sum + counts[i];
    // }

    return sum;
}

int main() {
    
    int num;
    cin>>num;
    int result = Divisor(num);
    cout<<result<<endl;
    

}
 */
/* 
#include <iostream>
using namespace std;

int countDigits(int n){
	string str = to_string(n);
    int x = size(str);
    int arr[x],count = 0;

    for(int i=0;i<x;i++){
        arr[i] = str[i] - '0';
    }
    for(int i =0;i<x;i++){
        if(n%arr[i] == 0){
            count++;
        }
    }

    return count;

}


int main() {

    int n;
    cin>>n;
    int result = countDigits(n);
    cout<<result<<endl;

    return 0;
} */



#include <iostream>
using namespace std;

// int countDigits(int n){
    

//     return count;

// }


int main() {

    int n;

    cin>>n;
    // int result = countDigits(n);
    // cout<<result<<endl;
    int lastdigit = 0,k=0;
    while(n>0){
        lastdigit = n%10;

        // if(lastdigit == 0) count = count;
        // else if(c_n%lastdigit == 0) count++;
        // else count = count;

        if(lastdigit != 0) k =1;
        if(k != 0) cout<<lastdigit;

        n = n/10;
    }



    return 0;
}