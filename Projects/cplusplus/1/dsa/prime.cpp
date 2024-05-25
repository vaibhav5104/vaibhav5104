bool isPrime(int n)
{
	int k = 1;
	if(n==1) k = 0;
	else {
          for (int i = 1; i < n; i++) {
            if (i > 1 && n % i == 0)
              k = 0;
          }
        }

        return k;
}