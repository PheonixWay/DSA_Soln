// Given an integer N, print a right half pyramid star pattern with N rows. The first row has 1 star, the second row has 2 stars, and each next row has one more star than the previous row. The Nth row has N stars, and all stars are left aligned.

#include <iostream>
using namespace std;

void printStars(int size){

    for(int i=1;i<=size;i++){
        for (int j = 0; j < i; j++)
        {
            cout<<"*";
        }
        cout<<"\n";        
    }
}

int main(){

    printStars(5);
    
    return 0;
}