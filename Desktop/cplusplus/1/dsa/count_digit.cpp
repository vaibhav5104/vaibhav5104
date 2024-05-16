int countDigits(int n){
    int count = 0,c_n = n;
    int lastdigit = 0;
    while(n>0){
        lastdigit = n%10;

if (lastdigit != 0 && c_n % lastdigit == 0) {
    count++;
}
        n = n/10;
    }

    return count;

}