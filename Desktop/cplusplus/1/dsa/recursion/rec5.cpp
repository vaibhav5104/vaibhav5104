#include <iostream>
#include <vector>
#include <chrono>
using namespace std;

//Reverse array
vector<int> reverseArray(int n, vector<int> &nums)
{
    int i = 1;
    while (i <= n)
    {
        nums.push_back(*(nums.end() - i));
        i++;
        nums.erase((nums.end() - i));
        if(i == n+1) break;
    }

    return nums;
    

}

int main() {

    auto start = std::chrono::high_resolution_clock::now();
    int n;
    cin>>n;

    vector<int> input_vec ;

    for (int i = 0; i < n; ++i) {
        int num;
        cin >> num;
        input_vec.push_back(num);
    }

    vector<int> res = reverseArray(n, input_vec);

    for(auto it = res.begin();it != res.end();it++ ){
        cout<<*it<<" ";
    }

    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> duration = end - start;
    std::cout << "Elapsed time: " << duration.count() << " seconds" << std::endl;

    return 0;
}