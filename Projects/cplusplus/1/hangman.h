#ifndef HANGMAN_H
#define HANGMAN_H

#include <iostream>

using namespace std;
vector<string> hidden_words{
        "grape",
        "towel",
        "zebra",
        "india",
        "mango",
        "vebus",
        "light",
        "paper",
    };

string hidden_word = hidden_words[0];

vector<string> hint{
        "It is a green colored fruit",
        "Used to dry the body after the bath",
        "It's an animal with black and white stripes",
        "country of himalayas and ganges",
        "Known as king of fruits",
        "second planet of solar system",
        "fastest thing of universe",
        "made of wood and used for writing",
    
    };

// int n = hidden_word.length();

    void introduce1() {
        cout << "  *       *    * * * * *    *       *    *********    *       *    * * * * *    *       *    ---------"<<endl;
        cout << "  *       *    *       *    * *     *    *            * *   * *    *       *    * *     *    :        :"<<endl;
        cout << "  * * * * *    * * * * *    *   *   *    *    ****    *   *   *    * * * * *    *   *   *    :        0"<<endl;
        cout << "  *       *    *       *    *     * *    *       *    *       *    *       *    *     * *    :       \\:/"<<endl;
        cout << "  *       *    *       *    *       *    *********    *       *    *       *    *       *    :       / \\  "<<endl;
        cout << "                                                                                             :"<<endl;
        cout << "                                                                                           ========"<<endl;
    }

    void introduce2(){
        cout<<"Guess a hidden Word having five alphabet "<<endl<<endl;
        if(hidden_word == hidden_words[0]) cout<<"Hint --> "<<hint[0]<<endl<<endl;
        else if(hidden_word == hidden_words[1]) cout<<"Hint --> "<<hint[1]<<endl<<endl;
        else if(hidden_word == hidden_words[2]) cout<<"Hint --> "<<hint[2]<<endl<<endl;
        else if(hidden_word == hidden_words[3]) cout<<"Hint --> "<<hint[3]<<endl<<endl;
        else if(hidden_word == hidden_words[4]) cout<<"Hint --> "<<hint[4]<<endl<<endl;
        else if(hidden_word == hidden_words[5]) cout<<"Hint --> "<<hint[5]<<endl<<endl;
        else if(hidden_word == hidden_words[6]) cout<<"Hint --> "<<hint[6]<<endl<<endl;
        else if(hidden_word == hidden_words[7]) cout<<"Hint --> "<<hint[7]<<endl<<endl;
        cout<<"!!!You Will Get Five Attempts!!!"<<endl<<endl;
    }

    void fail1(){
        cout<<"  :         "<<endl;
        cout<<"  :         "<<endl;
        cout<<"  :        "<<endl;
        cout<<"  :         "<<endl;
        cout<<"  :        "<<endl;
        cout<<"  :        "<<endl;
        cout<<"__:____         "<<endl;
    }
    void fail2(){
        cout<<"   ---------"<<endl;
        cout<<"  :         :"<<endl;
        cout<<"  :         "<<endl;
        cout<<"  :        "<<endl;
        cout<<"  :         "<<endl;
        cout<<"  :        "<<endl;
        cout<<"  :        "<<endl;
        cout<<"__:____         "<<endl;
    }
    void fail3(){
        cout<<"   ---------"<<endl;
        cout<<"  :         :"<<endl;
        cout<<"  :         0"<<endl;
        cout<<"  :        "<<endl;
        cout<<"  :         "<<endl;
        cout<<"  :        "<<endl;
        cout<<"  :        "<<endl;
        cout<<"__:____         "<<endl;
    }
    void fail4(){
        cout<<"   ---------"<<endl;
        cout<<"  :         :"<<endl;
        cout<<"  :         0"<<endl;
        cout<<"  :        \\:/"<<endl;
        cout<<"  :         "<<endl;
        cout<<"  :        "<<endl;
        cout<<"  :        "<<endl;
        cout<<"__:____         "<<endl;
    }
    void fail5(){
        cout<<"   ---------"<<endl;
        cout<<"  :         :"<<endl;
        cout<<"  :         0"<<endl;
        cout<<"  :        \\:/"<<endl;
        cout<<"  :         :"<<endl;
        cout<<"  :        / \\"<<endl;
        cout<<"  :        "<<endl;
        cout<<"__:____         "<<endl;
    }


    #endif
