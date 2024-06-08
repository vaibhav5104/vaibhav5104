#include <iostream>
#include <vector>
#include <string>
using namespace std;
#include "hangman.h"
#include "searching.h"


int main() {

    string hidden_word;
    char attempt;
    Hangman five_latter_word;
    five_latter_word.setX(hidden_word);
    five_latter_word.setAttempt(attempt);

    five_latter_word.intro1();
    five_latter_word.intro2();
    five_latter_word.searching(hidden_word,attempt);

    return 0;
}
