/* #include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 5;
    cout<<"C++ code for making a square pattern"<<endl;
    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == 0 || i == (count - 1))
            {
                cout<<sign<<" ";
            }else if (j == 0 || j == (count - 1))
            {
                cout<<sign<<" ";
            }else
            {
                cout<<" ";
            }
            
            
            
            
        }
        cout<<endl;
        
    }
    
    

    return 0;
} */
/* 
#include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 5;
    cout<<"C++ code for making a B "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == 0 || i == (count/2) || i == (count - 1))
            {
                cout<<sign<<" ";
            }else if (j == 0 || j == (count - 1))
            {
                cout<<sign<<" ";
            }else
            {
                cout<<" ";
            }
            
        }
        cout<<endl;
        
    }

    return 0;
} */
/* 
#include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 11;
    cout<<"C++ code for making a P "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == 0 || i == (count/2) )
            {
                cout<<sign<<" ";
            }else if (i > (count/2))
            {
                if (j == 0)
                {
                    cout<<sign<<" ";
                }else
                {
                    cout<<"";
                }
                
                
                
            }else if (j == 0 || j == (count - 1))
            {
                cout<<sign<<" ";
            }
            
            else
            {
                cout<<" ";
            }
            
        }
        cout<<endl;
        
    }

    return 0;
}
*/

/* #include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
                int k{1};

    char sign{'*'};
    count = 11;
    cout<<"C++ code for making a R shape "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == 0 || i == (count/2) )
            {
                cout<<sign<<" ";
            }else if (i > (count/2))
            {

                if (j == 0)
                {
                    cout<<sign<<" ";
                }else if (j == i - (count/2))
                {
                    cout<<sign<<" ";
                    
                }else
                {
                    cout<<"  ";
                }
            }else if (j == 0 || j == (count - 1))
            {
                cout<<sign<<" ";
            }
            
            else
            {
                cout<<" ";
            }
            
        }
        cout<<endl;
    }

    return 0;
} 
*/

/* 
#include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 11;
    cout<<"C++ code for making a S "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == 0 || i == (count/2) || i == (count - 1))
            {
                cout<<sign<<" ";
            }else if (i < (count/2))
            {
                if (j == 0 ){
                cout<<sign<<" ";
                }
            }else if (i > (count/2))
            {
                if (j == (count - 1)){
                cout<<sign<<" ";
                }else
            {
                cout<<" ";
            }
            }
            
            else
            {
                cout<<" ";
            }
            
        }
        cout<<endl;
        
    }

    return 0;
} 
*/

/* 
#include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 5;
    for (i = 0; i < count; i++)
    {
        int k;
            k < j;
            k = i;
        for (j = 0; j < i; j++)
        {
            

            cout<<k;
            k++;
            
        }
        cout<<endl;
        
    }
    
    

    return 0;
}
*/
/* 
#include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 5;
    for (i = count; i > 0; i--)
    {
        int k;
            k < j;
            k = i;
        for (j = 0; j < i; j++)
        {
            

            cout<<k;
            k--;
            
        }
        cout<<endl;
        
    }
    
    

    return 0;
} */

/* #include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 5;
    cout<<"C++ code for making a U pattern"<<endl;
    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == (count - 1))
            {
                cout<<sign<<" ";
            }else if (j == 0 || j == (count - 1))
            {
                cout<<sign<<" ";
            }else
            {
                cout<<" ";
            }
            
            
            
            
        }
        cout<<endl;
        
    }
    
    

    return 0;
}
*/

/* #include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 5;
    cout<<"C++ code for making a L pattern"<<endl;
    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == (count - 1))
            {
                cout<<sign<<" ";
            }else if (j == 0 )
            {
                cout<<sign<<" ";
            }else
            {
                cout<<" ";
            }
            
            
            
            
        }
        cout<<endl;
        
    }
    
    

    return 0;
}
*/

/* #include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 7;
    // cout<<"C++ code for making a A "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
                if (i < (count/2))
                {
                    if (j == ((count/2) + i) || j ==  ((count/2) - i))
                    {
                        cout<<sign<<" ";
                    }else
                    {
                    cout<<" ";
                    }
                    
                }else if (i == (count/2))
                {
                    cout<<sign;
                } if (i > (count/2))
                {
                    if(j == 0 || j == (count - 1))
                {
                    cout<<sign<<" ";
                }else
                {
                    cout<<"  ";
                }
                }else
                {
                    cout<<" ";
                }
                
                
                


        }
        cout<<endl;
        
    }

    return 0;
}
 */
/* 
#include <iostream>
using cout,endl,string;

int main() {

    int i,j,count;
    char sign{'*'};
    count = 5;
    // cout<<"C++ code for making some pattern"<<endl;
    for (i = 5; i > 0; i--)
    {
        for (j = 1; j < 6; j++)
        {
        
            if (j == i)
            {
                cout<<sign;
            }else if (j > i)
            {
                cout<<sign;
            }else
            {
                cout<<" ";
            }
        }
        cout<<endl;
        
    }
    return 0;
} 
*/
/* #include <iostream>
#include <memory>

int main() {
    int num = 213;
    unique_ptr<int> p_num = make_unique<int>(num);

    cout << p_num << endl;

    return 0;
}
 */
/* #include <iostream>
using cout,endl,string;

int main() {

    {int i,j,count,k{1};
    char sign{'*'};
    count = 11;
    // cout<<"C++ code for making a V "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
                if (i < (count/2) || i == (count/2))
                {

                    if(j == 0 || j == (count - 1))
                {
                    cout<<sign<<" ";
                }else
                {
                    cout<<"  ";
                }
                }else {
                    
                    // if (j == ((i - (count/2) + 1)) || j ==  ((i - (count/2) + 1)))
                    // if (j == (i - count/2) )
                    if(j == k )
                    {
                        cout<<sign<<" ";
                        
                    }else if (j == (count - 1) - k)
                    {
                        cout<<sign<<" ";
                        k++;
                    }
                    
                    else
                    {
                    cout<<"  ";
                    }
                    
                }

        }
        cout<<endl;
        
    }
    
    }

    int i,j,count;
    char sign{'*'};
    count = 11;
    // cout<<"C++ code for making a A "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
                if (i < (count/2) || i == (count/2))
                {
                    if (j == ((count/2) + i) || j ==  ((count/2) - i))
                    {
                        cout<<sign<<" ";
                    }else
                    {
                    cout<<"  ";
                    }
                    
                }else  if (i > (count/2))
                {
                    if(j == 0 || j == (count - 1))
                {
                    cout<<sign<<" ";
                }else
                {
                    cout<<"  ";
                }
                }else
                {
                    cout<<" ";
                }

        }
        cout<<endl;
        
    }
    

    return 0;
} */
/* 
#include <iostream>
using cout,endl,string;
int nums(int i);

int main() {

    int i{1};
    int result = nums(i);
    cout<<result<<endl;

    return 0;
}
int nums(int i){
    

    if (i < 10)
    {
    cout << i << " ";
    i++;
    return nums(i);
        
    }
    return 10;
    
 
}*/
/* 
#include <iostream>
using cout, endl, string;

int nums(int i);

int main() {
    int i{1};
    int result = nums(i);
    cout << result << endl;

    return 0;
}

int nums(int i) {
    if (i < 11) {
        // Print the current value of i
        cout << i << " ";

        i++; // Increment i before the recursive call
        return nums(i);
    }

    return 0; // Base case: End the recursion
} */
/* 
#include<stdio.h>
int main()
{
    int i,n,pos,a[10];
    
    printf("Enter the limit:");
    scanf("%d",&n);
    
    printf("Enter elment of ratioay:");
    for(i=0;i<n;i++)
    {
        scanf("%d",&ratio[i]);
    }
    
    printf("ratioay:");
    for(i=0;i<n;i++)
    {
        printf("%d",ratio[i]);
    }
    printf("\n");
    
    printf("Enter the position:");
    scanf("%d",&pos);
    
     for(i=pos-1;i<n-1;i++)
    {
        ratio[i]=ratio[i+1];
    }
    printf("New ratioay:");
    for(i=0;i<n-1;i++)
    {
        printf("%d",ratio[i]);
    }
    
}*/
/* 
#include <iostream>
using namespace std;

int main() {

    int n,key;
    n=5;
    int ratio[n];
    cout<<"Enter ratioay : "<<endl;
    for (size_t i = 0; i < n; i++)
    {
        cin>>ratio[i];
    }
    
    cout<<"Enter Key element : ";
    cin>>key;
    for (size_t i = 0; i < n; i++)
    {
        if (ratio[i] == key)
    {
        for (size_t j = i; j < n + 1; j++)
        {
            ratio[j] = ratio[j + 1];
        }
        
    }
    }
    for (size_t i = 0; i < n - 1; i++)
    {
        cout<<"ratio["<<i<<"] : "<<ratio[i]<<endl;
    }

    return 0;
} */
/* 
#include <iostream>
using namespace std;
// Delete an Element
int main() {

    int n,key,p{0};
    n=5;
    int ratio[n];
    cout<<"Enter ratioay : "<<endl;
    for (size_t i = 0; i < n; i++)
    {
        cin>>ratio[i];
    }

    cout<<"Enter the desired number : ";
    cin>>key;
    for (size_t i = 0; i < n; i++)
    {
        if (ratio[i] == key)
    {
        for (size_t j = i; j < n + 1; j++)
        {
            ratio[j] = ratio[j + 1];
        }
        for (size_t i = 0; i < n - 1; i++)
        {
        cout<<"ratio["<<i<<"] : "<<ratio[i]<<endl;
        }
        break;
    }else if (ratio[i] != key)
    {
        p++;
    }
    if (p == n)
    {
        cout<<"Desired number is not found"<<endl;
    }
    
    
    }
    

    return 0;
} */
// #include <stdio.h>
// #include <math.h>
// int p{0};
// void find_num(int ratio[],int i,int n,int key);
// int main() {
/* 
    int ratio[10],i,sum=0,n;
    printf("Enter size of an ratioay  : ");
    scanf("%d",&n);


    printf("Enter ratioay : ");
    for ( i = 0; i < n; i++)
    {
        scanf("%d",&ratio[i]);
    }
    printf("Given ratioay is : ");

    for ( i = 0; i < n; i++)
    {
        printf("%d ",ratio[i]);
        
    }
    printf("\n");
    for (i = 0; i < n; i++)
    {
    sum = sum + ratio[i];

    }

    printf("Sum of given ratioay is : %d \n",sum);
    
 */
/* 
#include <iostream>
#include <vector>
using namespace std;

int main() {

    vector<int> v;
    cout<<"Capacity -> "<<v.capacity()<<endl;
    v.push_back(1);
    cout<<"Capacity -> "<<v.capacity()<<endl;
    v.push_back(2);
    cout<<"Capacity -> "<<v.capacity()<<endl;
    v.push_back(3);
    cout<<"Capacity -> "<<v.capacity()<<endl;
    v.push_back(4);
    cout<<"Capacity -> "<<v.capacity()<<endl;
    v.push_back(5);
    cout<<"Capacity -> "<<v.capacity()<<endl;
    v.push_back(6);
    cout<<"Capacity -> "<<v.capacity()<<endl;
    cout<<"Size -> "<<v.size()<<endl;
    cout<<v.at(4)<<endl;

    v.clear();
    cout<<"Size -> "<<v.size()<<endl;

    return 0;
} */

/* 
#include <iostream>
using namespace std;

class  Smartphone
{ //Abstract Class
    public:
    virtual void TakeASelfie() = 0;
    virtual void MakeACall() = 0;

};
class Android: public Smartphone { 
    public:
     void TakeASelfie() {
        cout<<"Android"<<endl;
    }
    void MakeACall() {
        cout<<"Android Calling"<<endl;
    }
};
class IPhone: public Smartphone {
    void TakeASelfie() {
        cout<<"Iphone selfie"<<endl;
    }
    void MakeACall() {
        cout<<"Iphone Calling"<<endl;
    }
};

int main() {

    Smartphone* s1 = new Android();
    Smartphone* s2 = new IPhone();
    s1->TakeASelfie();
    s2->TakeASelfie();
    s1->MakeACall();
    s2->MakeACall();

    // system("pause>0");
    return 0;
}
 */
/* 
#include <iostream>
using namespace std;

void func(int& x , int& y);

int main() {//Call by Reference

    int a,b;
    a = 12 , b = 1321;
    cout<<"&a : "<<&a<<endl;

    func(a ,b);
    cout<<"a : "<<a<<endl;
    

    return 0;
}

void func(int& x , int& y){
    cout << "x : "<<x<<endl<<"y : "<<y<<endl;
    cout<<"&x : "<<&x<<endl;
    x++;

}
 */
/* 
#include <iostream>
using namespace std;

void max(double a);
void max(int a);

int main() {

    int a=123;
    double b=123.12;
    
    max(a);
    max(b);

    return 0;
}

void max(double a){
    cout<<"This is function with double parameters : "<<a<<endl;
}

void max(int a){
    cout<<"This is function with int parameter : "<<a<<endl;
} */

/* 
#include <iostream>
using namespace std;

class College{
public:
    int a = 231;

    void func(){
        cout<<"Hello "<<endl;
    }

private: 
    int x;
};

int main() {
    College obj;
    int* ptr = new int(obj.a); // Dynamically allocate an int

    cout << "Value of dynamically allocated int: " << *ptr << endl;

    delete ptr; // Remember to free the allocated memory

    return 0;
}
 */

/* 
#include <iostream>
using namespace std;

int main() {

    int n;
    cout<<"Enter size of ratioay ";
    cin>>n;
    int ratio[n];
    cout<<"Enter ratioay ";
    for (size_t i = 0; i < n; i++)
    {
        cin>>ratio[i];
    }

    cout<<"Given ratioay is : ";
    for (size_t i = 0; i < n; i++)
    {
        cout<<ratio[i];
    }
    cout<<endl;
    int k;
    cout<<"Enter key element ";
    cin>>k;

    int x = 0;
    for (size_t i = 0; i < n; i++)
    {
       for (size_t j = i; j < n; j++)
       {
            if (ratio[i] + ratio[j] == k)
            {
                cout<<"Sum of "<<ratio[i]<<" and "<<ratio[j]<<" is equal to "<<k<<endl;
                x++;
            }
            
       }
       
    }
    if (x == 0)
    {
        cout<<"There are no combinations"<<endl;
    }else if (x == 1)
    {
        cout<<"There is only one combination"<<endl;
    }else
    {
        cout<<"There are total of "<<x<<" combinations"<<endl;
    }
    
    
    return 0;
} */

/* 


#include <iostream>
using namespace std;

int main() {

    int n,m;
    int ratio1[n],ratio2[m];

    cout<<"Enter number of elements for 1st ratioay"<<endl;
    cin>>n;
    cout<<"Enter 1st ratioay : ";
    for (size_t i = 0; i < n; i++)
    {
        cin>>ratio1[i];
    }
    cout<<endl;
    
    cout<<"Enter number of elements for 2nd ratioay"<<endl;
    cin>>m;
    cout<<"Enter 2nd ratioay : ";
    for (size_t i = 0; i < m; i++)
    {
        cin>>ratio1[i];
    }

    cout<<endl;
    
    for (size_t i = 0; i < m; i++)
    {
        cout<<ratio1[i];
    }
    for (size_t i = 0; i < m; i++)
    {
        cout<<ratio1[i];
    }
    


    return 0;
} */
