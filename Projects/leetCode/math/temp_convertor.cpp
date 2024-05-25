#include <iostream>
#include <vector>
using namespace std;

vector<double> convertTemperature(double celsius) {
        double kelvin = celsius + 273.15;
        double Fahrenheit = celsius * 1.80 + 32.00;

        vector<double> result;

        result.insert( result.end(),{kelvin,Fahrenheit});

        return result;

    }


int main() {

    double celsius;
    cin>>celsius;

    vector<double> res = convertTemperature(celsius);

    for( auto it = res.begin(); it != res.end(); it++){
        cout<<*it<<" ";
    }


    return 0;
}