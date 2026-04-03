// CPP program to print diagonal star patterns

#include <iostream>
using namespace std;

void printStars(int N){

    for (int i = 0; i < N; i++)
    {
        for (int j = 0; j < N; j++)
        {
            if (i == 0 || j == 0 || i == N - 1 || j == N - 1 || i == j || i + j == N - 1)
            {
                cout<<"*";
            }else{
                cout<<" ";
            }
        }
        cout<<"\n";   
    }
    
}

int main(){

    printStars(7);
    return 0;
}