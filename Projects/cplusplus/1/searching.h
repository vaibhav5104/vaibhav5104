#ifndef SEARCHING_H
#define SEARCHING_H
#include "hangman.h"

#include <iostream>
using namespace std;


class Hangman {
private:
        int i,p = 0,n = hidden_word.length();
        char attempt = '1';
        char latter[5] = {'_','_','_','_','_'};
        char key,opt;
        string newWord,newHint;
    

public:
        int j = 0;

    void intro1(){
        introduce1();
    } 
    void intro2(){
        introduce2();
    } 


// int n = hidden_word.length();
    void setX(string str){
        str = hidden_word;
    }

    void setAttempt(char& attempt){
        attempt = this->attempt ;
    }

void process(int& p,char& key,int& i){
        cout << "Pick a latter : ";
        cin >> key;


    for (i = 0; i < n; i++) {
        if (hidden_word[i] == key) {
            p = 1;
            break;
        } else {
            p = 0;
        }
    }
    cout<<endl;
    
}

    void searching(string hidden_word,char attempt){
        // introduce2();
        
    switch (attempt){
case '1':

        process(p,key,i);
        
        
        if (p == 1) {
        cout << key << " is found in hidden word" << endl;
        latter[i] = key;
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        
        for (i = 0; i < 5; i++) {
        if (latter[i] == '_') {
            p = 1;
            break;
        } else {
            p = 0;
        }
    }
    cout<<endl;

    if (p == 1) {
        searching( "grape",'1');
    } else {
        cout <<"HURRAY!!! YOU FOUND THE WORD"<< endl<<endl;
                choise(latter);
    }

    } else {
        cout <<"Sorry man ,"<< key << " is not present in hidden word "<< endl;
        fail1();
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        searching( "grape",'2');

    }
    cout<<"   "<<endl;
    
    break;

    case '2':
        process(p,key,i);
        
        if (p == 1) {
        cout << key << " is found in hidden word" << endl;
        latter[i] = key;
        
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }

        cout<<endl;

        for (i = 0; i < 5; i++) {
        if (latter[i] == '_') {
            p = 1;
            break;
        } else {
            p = 0;
        }
    }

    if (p == 1) {
        searching( "grape",'2');
    } else {
        cout <<"HURRAY!!! YOU FOUND THE WORD"<< endl;
        choise(latter);

    }

    } else {
        cout <<"Sorry,"<< key << " is not present in hidden word "<< endl;
        fail2();
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        searching( "grape",'3');

    }
    cout<<"   "<<endl;

    break;


    case '3':
        process(p,key,i);
        
        if (p == 1) {
        cout << key << " is found in hidden word" << endl;
        latter[i] = key;
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        
        for (i = 0; i < 5; i++) {
        if (latter[i] == '_') {
            p = 1;
            break;
        } else {
            p = 0;
        }
    }

    if (p == 1) {
        searching( "grape",'3');
    } else {
        cout <<"HURRAY!!! YOU FOUND THE WORD."<< endl;
                choise(latter);
    }
    } else {
        cout <<"Sorry man ,"<< key << " is not present in hidden word "<< endl;
        fail3();
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        searching( "grape",'4');

    }
    cout<<"   "<<endl;

    break;


    case '4':
        process(p,key,i);
        

        if (p == 1) {
        cout << key << " is found in hidden word" << endl;
        latter[i] = key;
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;

        for (i = 0; i < 5; i++) {
        if (latter[i] == '_') {
            p = 1;
            break;
        } else {
            p = 0;
        }
    }

    if (p == 1) {
        searching( "grape",'4');
    } else {
        cout <<"HURRAY!!! YOU FOUND THE WORD"<< endl;
                choise(latter);
                
    }

    } else {
        cout <<"Sorry,"<< key << " is not present in hidden word "<< endl;
        fail4();
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        searching( "grape",'5');

    }
    cout<<"   "<<endl;

    break;


    case '5':
        process(p,key,i);
        

        if (p == 1) {
        cout << key << " is found in hidden word" << endl;
        latter[i] = key;
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        

        for (i = 0; i < 5; i++) {
        if (latter[i] == '_') {
            p = 1;
            break;
        } else {
            p = 0;
        }
    }

    if (p == 1) {
        searching( "grape",'5');
    } else {
        cout <<"HURRAY!!! YOU FOUND THE WORD"<< endl;
        choise(latter);
    }
        
        
    } else {
        cout <<"Sorry,"<< key << " is not present in hidden word "<< endl;
        fail5();
        for (size_t i = 0; i < 5; i++)
        {
            cout<<"  "<<latter[i];
        }
        cout<<endl;
        cout<<"The word was "<<hidden_words[j]<<endl;
                choise(latter);


        // break;
    }

    break;

    default:

        break;
}

}

    void choise(char latter[]){
    cout<<"Do you want to play again ?\n 1. Y --> Yes \n 2. Any key --> No"<<endl<<endl;
    cin>>opt;

    if (opt == 'y' || opt == 'Y') {
        for(int i = 0; i < 5; i++) {
            latter[i] = '_';  // Resetting the latter array
        }
        j++;
        cout<<j<<endl;

        cout<<"Do you want to add new words ?\n 1. Y --> Yes \n 2. Any key --> No"<<endl<<endl;
        cin>>opt;
        if(opt == 'y' || opt == 'Y') {
            cout<<"Enter word to guess : ";
            cin>>newWord;
            cin.ignore();
            cout<<"Enter hint : ";
            getline(cin,newHint);

            hidden_words.push_back(hidden_words[j]);
            hint.push_back(hint[j]);

            hidden_words[j] = newWord;
            hint[j] = newHint;

        }
        hidden_word = hidden_words[j];



        introduce2();
         
        this->searching(hidden_word, attempt);
        // searching(hidden_word, attempt);

    } else  {
        cout << "Thank you for playing this game :)";
    }
}

};



#endif