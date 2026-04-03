// Given an integer N, create an inverted left half pyramid pattern with N rows. In this pattern, the first row contains N stars, the second row contains N - 1 stars, and each following row has one star less than the previous row, until the last row contains only 1 star. All stars are right-aligned.

#include <iostream>
using namespace std;


void printStars(int N){

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (j<i)
            {
                cout<<" ";
            }else{
                cout<<"*";
            }
        }
        cout<<"\n";
    }
    
}

int main(){

    printStars(5);

    return 0;

}