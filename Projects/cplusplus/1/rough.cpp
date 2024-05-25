/* #include <iostream>
//We can make our own type w.t.h of classes.
const double PI {3.1415926535897932384626433832795};

class Cylinder {
    public : 
        //Functions (methods)
        double volume(){
            return PI * base_radius * base_radius * height;
        }

    public : 
        //Member variables
        double base_radius{1};
        double height{1};
};

/*
In C++, the order of member variables and member functions within a class definition
 does not affect the behavior or correctness of the class. In your code, it doesn't 
 matter that the member variables base_radius and height are declared after the member function
  volume(). The C++ compiler is capable of processing the entire class definition and understands
   the existence and types of member variables and functions within the class.

When the compiler encounters the member function volume() and sees the usage of 
base_radius and height, it knows that these variables are member variables of the 
class Cylinder, even if they are declared later in the class definition.
*/

/* 
class Cylinder {
    public : 
        //Functions (methods)
        std::cout<<height<<std::endl;//Will Give us an error 
    public : 
        //Member variables
        double base_radius{1};
        double height{1};
};

The code you provided has a compilation error because you cannot have a statement like
 std::cout<<height<<std::endl; directly inside the class body. The reason is that this
  statement is an executable statement, and it is not allowed to have executable statements
   directly inside a class definition.

Executable statements in C++ are meant to be inside functions or methods, where they can be
 executed as part of the program flow. Class definitions specify the structure of the class and 
 the member functions, but they do not execute any code directly.

 */

int main(){

    Cylinder cylinder1; // Objects
    std::cout << "volume : " << cylinder1.volume() << std::endl;

    //Change the member variables
    cylinder1.base_radius = 10;
    cylinder1.height = 3;

    std::cout << "volume : " << cylinder1.volume() << std::endl;

    cylinder1.height =8;

    std::cout << "volume : " << cylinder1.volume() << std::endl;
   
    return 0;
} */