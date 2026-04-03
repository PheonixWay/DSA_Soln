// A B C D E 
// B C D E 
// C D E 
// D E 
// E 

#include <iostream>
using namespace std;

void PrintStars(int N){

    for (int i = 1; i <= N; i++)
    {
        for (int j = i; j <= N; j++)
        {
            cout<<(char)('A'-1+j)<<" ";
        }
        cout<<"\n";
        
    }
    
}

int main(){
    PrintStars(5);
    return 0;
}