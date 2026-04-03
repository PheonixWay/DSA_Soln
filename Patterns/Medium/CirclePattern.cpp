// Given a positive integer n i.e, the radius of the circle, print a circle using stars. 

#include <iostream>
#include <cmath> // sqrt aur round ke liye
using namespace std;

void printCircle(int r) {
    // Hum -r se +r tak ke coordinates check karenge
    for (int i = -r; i <= r; i++) {
        for (int j = -r; j <= r; j++) {
            
            // Distance formula: d = sqrt(x^2 + y^2)
            // Yahan i aur j hamare x aur y coordinates hain
            float distance = sqrt((i * i) + (j * j));

            // Agar distance radius ke paas hai (hum thoda margin dete hain)
            // Border print karne ke liye:
            if (distance > r - 0.5 && distance < r + 0.5) {
                cout << "*";
            } else {
                cout << "  "; // Do spaces taaki circle thoda round dikhe
            }
        }
        cout << "\n";
    }
}

int main() {
    int radius;
    cout << "Enter Radius: ";
    cin >> radius;

    printCircle(radius);

    return 0;
}