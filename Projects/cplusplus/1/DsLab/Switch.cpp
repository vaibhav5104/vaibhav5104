#include <stdio.h>
void Insertion();
void Deletion();
void Traversing();

    int pos,n,i,value;
    int c=1;
    char x;
    int arr[10];
    int tool;

int main() {
    // printf("Write 1 , 2 , 3 or 4 to do insertion , deletion , print array or exit the program respectively : ");

    while (c == 1)
    {
        printf("Program of array for : ");
    printf("1. Insertion\n2. Deletion\n3.Transversing\n4.Exit\n");
    scanf("%d",&tool);

    switch (tool)
    {

    case 1:
        Insertion();
        break;

    case 2 : 
    Deletion();

    break;

    case 3 : 
        Traversing();
    case 4 : 
    break;

    default:
        break;
    }

    printf("Do you want to continue Y/N :");
    scanf(" %c",&x);
    printf("\n");
    if (x == 'Y')
    {
        c = 1;
    }else if (x == 'N')
    {
        c = 0;
    }else
    {
        "Invalid option\n";
    }

    }

    return 0;
}

void Insertion(){
    printf("Enter size of array : ");
    scanf("%d",&n);
    printf("Enter the array : ");

    for (i = 0; i < n; i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("Enter the index of array : ");
    scanf("%d",&pos);

    printf("Enter the value of array : ");
    scanf("%d",&value);
    for (i = n - 1; i >= pos - 1; i--)
    {
        arr[i + 1] = arr[i];
    }

    arr[pos] = value;

    printf("New array : ");

    for (i = 0; i <= n; i++)
    {
        printf("%d  ",arr[i]);
    }
}
void Deletion(){
    printf("Enter size of array : ");
    scanf("%d",&n);
    printf("Enter the array : ");

    for (i = 0; i < n; i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("Enter the index of array : ");
    scanf("%d",&pos);
    for (i = pos; i < n; i++)
    {
        arr[i] = arr[i + 1];
    }

    printf("New array : ");

    for (i = 0; i < n - 1; i++)
    {
        printf("%d  ",arr[i]);
    }
    printf("\n");
}
void Traversing(){
    printf("Enter the size of an array: ");
    scanf("%d",&n);
    printf("Enter the array : ");
    for (i = 0; i < n; i++)
    {
        scanf("%d",&arr[i]);
    }
    printf("Given array is : ");
    for (i = 0; i < n; i++)
    {
        printf("%d  ",arr[i]);
    }
    printf("\n");
}