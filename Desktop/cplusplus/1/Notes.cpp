/*
Array 

1. Name of array , address of name of array & addreesss of first element of aray is same.
2. If you don't initialize all the element , Those you leave out will are initialized to zero.

Pointers:

    In C and C++, const char * is a pointer type that is commonly used to point to a string or a sequence of characters 
    in memory. Let's break down its meaning:

    const: The keyword const in this context means that the data pointed to by the pointer is constant and cannot be modified. 
    It ensures that the content of the memory location pointed to by the pointer cannot be changed through that pointer.

    char: The char type represents a single character in C/C++. A string in C/C++ is an array of characters, and in memory, 
    it is represented as a sequence of consecutive char values, terminated by a null character ('\0') to mark the end of the string.

    *: The asterisk * denotes that the variable is a pointer, i.e., it stores the memory address of another variable.

    Putting it all together, const char * represents a pointer to a constant (read-only) sequence of characters or a string. 
    You can use this type to point to string literals (e.g., "Hello, world!") or arrays of characters declared with the const qualifier.

    const char *str = "Hello, world!"; // Points to a string literal, read-only
    Reasons behind using const char *:

    String Literals: One of the primary use cases of const char * is to point to string literals. String literals are stored 
        in read-only memory, and attempting to modify them can lead to undefined behavior. Using const char * prevents accidental 
            modification of string literals.

    Safe String Operations: By using const char *, you can pass strings to functions in a way that guarantees the function won't 
    modify the original string. This is especially useful for functions that only need to read the string, like various string 
    processing functions.



    Compiler Warnings: Declaring a pointer to string literals without const may trigger warnings in modern compilers. 
    Using const char * allows the compiler to catch potential mistakes and enforce read-only access.

    It's important to note that although const char * ensures that the pointer itself cannot be used to modify the contents 
    of the string, it doesn't guarantee that the underlying data is actually constant. For example, you could have a non-const 
    char array and then assign its address to a const char * pointer. In such cases, the pointer acts as a "view" to read the 
    data as constant, but other parts of the code with access to the non-const array could still modify it.



--->Why const char * can use string literal but char can't ?

    In C and C++, string literals are arrays of characters (i.e., char arrays) that are automatically null-terminated
     ('\0' character at the end) to mark the end of the string. The type of a string literal in C/C++ is an array of const char.

When you use a string literal like this:

    const char *str = "Hello";
    The string literal "Hello" is stored in read-only memory, and the const qualifier ensures that you cannot modify the
     characters of this array through the pointer str. This is crucial because modifying a string literal can lead to 
     undefined behavior, and using const char * prevents accidental modifications.

Now, let's discuss why you cannot do the following:

    char *str = "Hello"; // Incorrect
    In this case, the compiler would issue a warning (or error) because it is attempting to convert a string literal 
    (of type const char[]) to a non-const char* pointer. This would allow you to modify the contents of the string 
    literal through the pointer, which is not allowed and can lead to undefined behavior.

    Older versions of C (prior to C99) allowed implicit conversions from string literals to non-const char*, but this behavior 
    was deprecated, and C99 introduced stricter rules that disallow this conversion to promote safer programming practices.

    To store a string literal in a non-const char array, you need to explicitly create an array and copy the characters from 
    the string literal:

    char str[] = "Hello"; // Correct: Create a non-const char array and copy the string literal
    In this case, the characters of the string literal are copied into the str array, and you can modify the contents of 
    str because it is not pointing to a string literal in read-only memory. However, remember that if you attempt to 
    modify the string contents beyond the size of the array, you will still encounter undefined behavior. Therefore, it's 
    essential to ensure that the destination array has enough space to accommodate the string literal and the null-terminator.

    Therefore since string literals can be use only when they can't be modified.We have to use const char *.
    char * also couldn't use string literals since data can be modified.But we can also use char str[] = "Hello";

****************************************************************************************************************************************************

    In C and C++, when you write a statement like:

    char str[] = "Hello";

    It creates an array of characters named `str` and initializes it with the string literal `"Hello"`. Let's break down 
    how this works:

    1. The compiler encounters the statement `char str[] = "Hello";` and sees that `str` is an array of characters.
    2. The compiler checks the size of the string literal `"Hello"`, which is 6 (5 characters for the word "Hello" plus a 
    null terminator '\0').
    3. It allocates an array of 6 characters (since the size of the string literal is 6) in memory for `str`.
    4. The compiler then copies the contents of the string literal `"Hello"` into the newly allocated memory for `str`. 
    This includes copying all the characters ('H', 'e', 'l', 'l', 'o') and the null terminator ('\0').
    5. After this, the array `str` now contains the characters "Hello" and has an extra null terminator at the end.

    Now, you have a character array `str` that contains the string "Hello". It's important to note that the array `str` 
    is modifiable, meaning you can change its content. However, in this case, since you used a string literal to initialize 
    `str`, it is not recommended to modify it directly, as it may lead to undefined behavior.

    To safely work with strings in C and C++, you should use the appropriate string manipulation functions from the 
    `<string.h>` header or use the `std::string` class in C++ for a more convenient and safer way to handle strings.

    char message[] {"HELLO"};
    message[] = "HI SIR"; 
    //This will not work and we have to use  srtcpy to update the string.


*/