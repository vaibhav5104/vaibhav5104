#include <iostream>
using std::cout,std::endl,std::string;

int main() {

    {
        int i,j,count;
    char sign{'*'};
    count = 7;
    // cout<<"C++ code for making a B "<<endl;

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
                cout<<"  ";
            }
            
        }
        cout<<endl;
        
    }
    }
    cout<<endl;
    {
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
    }
    cout<<endl;


    {
        int i,j,count;
    char sign{'*'};
    count = 7;
    // cout<<"C++ code for making a L pattern"<<endl;
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
    }
    cout<<endl;

    {
        int i,j,count;
    char sign{'*'};
    count = 7;
    // cout<<"C++ code for making a L pattern"<<endl;
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
    }
    cout<<endl;

    {
        int i,j,count;
    char sign{'*'};
    count = 7;
    // cout<<"C++ code for making a U pattern"<<endl;
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
                cout<<"  ";
            }
            
            
            
            
        }
        cout<<endl;
        
    }
    }

    return 0;
} 
/* 
#include <iostream>
using std::cout,std::endl,std::string;

int main() {

    int i,j,count;
                int k{1};

    char sign{'*'};
    count = 21;
    cout<<"C++ code for making a R shape "<<endl;

    for (i = 0; i < count; i++)
    {
        for (j = 0; j < count; j++)
        {
            if (i == 0 || i == (count/2) )
            {
                cout<<sign<<"";
            }else if (i > (count/2))
            {

                if (j == 0)
                {
                    cout<<sign<<" ";
                }else if (j == i - (count/2))
                {
                    cout<<sign<<"  ";
                    
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
}*/

