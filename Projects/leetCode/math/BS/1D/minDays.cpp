#include <iostream>
#include <vector>
#include <algorithm>
#include <math.h>
using namespace std;

int minDays(vector<int>& bloomDay, int m, int k) {
    if(m * k > bloomDay.size()) return -1;
    else if(m * k == bloomDay.size() ) return *min_element(bloomDay.begin(), bloomDay.end());
    int low = *min_element(bloomDay.begin(), bloomDay.end()), high = *max_element(bloomDay.begin(), bloomDay.end()),mid,kcount,mcount;
    
    while(low <= high ){

        mid = low + (high - low) /2;

        for(int i = 0; i<bloomDay.size();i++){
            
            if(ceil((double) bloomDay[i]/mid) == 1){

                kcount++;
                if(kcount == k){
                    kcount =0;
                    mcount++;
                }
            }else {
                kcount = 0;
            }

            if(mcount < m) {
                low = mid + 1;
            }else {
            high = mid;
        }

    }

    return low;

    }
}

int main() {

    vector<int> nums = {7,7,7,7,7,12,7,7};
    int res = minDays(nums,2,3);
    cout<<res<<endl;

    return 0;
}