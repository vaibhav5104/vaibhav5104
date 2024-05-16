#include <iostream>
using namespace std;

class BaseClass {

    private: 
        int base_num;

    protected:
        char base_var;

    public:
        int pop;

    void base_func(){
        cout<<"I am base function"<<endl;
    }

};

class DerivedClass : public BaseClass {

    private:
    int x;

    protected:
    void funct(){
        DerivedClass::base_var;
    }

    int result = DerivedClass::pop;
        public: 
        void func(){
        x = BaseClass::pop;

        }

    };


int main() {

    DerivedClass obj1;
    int result = obj1.pop;

    cout<<result<<endl;

    return 0;
}