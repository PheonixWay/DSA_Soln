// Given an integer N, print N rows of an inverted right half pyramid pattern. In an inverted right half pattern of N rows, the first row has N number of stars, the second row has (N - 1) number of stars, and so on till the Nth row, which has only 1 star.

#include <iostream>
using namespace std;

void printStars(int N){
    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N-i; j++)
        {
            cout<<"*";
        }
        cout<<"\n";
    }
    
}

int main(int argc, char const *argv[])
{
    printStars(5);
    return 0;
}
