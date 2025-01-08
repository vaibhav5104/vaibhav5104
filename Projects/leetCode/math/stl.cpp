#include <iostream>
#include<bits/stdc++.h>
#include <map> 
// #include <pair> 
using namespace std;



int main() {

//set : sorted and unique
    // in set every operation runs by logarithmic time complexity (logN) 
    set<int> s;
    s.insert(5);
    s.insert(1);
    s.insert(2);
    s.insert(3);
    s.insert(4);

    auto it1 = s.find(2); 
    auto it2 = s.find(4); 

    s.erase(it1,it2);

    for(auto i = s.begin(); i !=s.end() ;i++){
        cout<<(*i)<<endl;
        // 1
        // 4   
        // 5
    }

        auto it = s.find(10);
    cout<<endl<<"it : "<<*it<<endl;// it : 3 since index right after end is 3.(find() operation return end() index if element doesnot found)

    // int cnt = s.count(2);//if element exist it will return 1 and if it doesnt it'll return 0 since set contains unique elem

    // auto it1 = s.find(2);
    // auto it2 = s.find(4);

    // s.erase(it1,it2);// erase {1,4,5} [first, last)



// multiset : sorted but store duplicate items

    multiset<int> ms;
    ms.insert(1);
    ms.insert(1);
    ms.insert(1);

    // ms.erase(1);//will erase all 1's

    int cnt = ms.count(1);//will return no. of 1's

    ms.erase(ms.find(1));//will erase single 1

    // ms.erase(ms.find(1) , ms.find(1) + 1);//will erase single 1

    // rest all function 



//unordered_set : unique but not sorted (can be in any order) 
    //all operations same but upperbound or lowerbound doesnot work
//time complexity is O(1) most of the time

// map : map store key in sorted and unique(no duplicate key) order

    map<int,int> mpp;
    map<int,pair<int,int>>mpp;
    map<pair<int,int>,int>mpp;

    mpp[1] = 3;
    // mpp.emplace({3,1});
    mpp.insert({2,3});
    mpp.insert({2,1});
    mpp.insert({3,3});

    for(auto it : mpp) {
        cout<<it.first<<" "<<it.second;
        cout<<endl;
    } 
    //or
    for(auto i = mpp.begin(); i != mpp.end();i++){
        cout<<*it<<endl;
    }
    //or 
    cout<<mpp[1];//3
    cout<<mpp[2];//3
    cout<<mpp[3];//3

    // auto it = mpp.find(4);//return mpp.end()

    auto it = mpp.lower_bound(2);
    auto it = mpp.lower_bound(3);

    // other operations like erase , swap, size , empty are same 


// multimap : same as map but can store duplicate keys

//unordered_map : diffrence is same as between set and unordered_set which is : unique but not sorted (can be in any order) 
    //all operations same but upperbound or lowerbound doesnot work

    // sort(start,end);[start,end) 
    

    return 0;
}