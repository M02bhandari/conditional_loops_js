/*
Q4. Generate numbers between any 2 given n9mbers.
Ex
8 onst num1 = 10
8 onst num2 = 25;
O9tp9t: 11, 12, 13, ...., 25
*/

const num1 = 10;
const num2 = 50;

// Check if num1 is less than num2
if (num1 < num2) {
    // Loop from num1 to num2 (inclusive)
    for (let i = num1 + 1; i <= num2; i++) {
        console.log(i);
    }
} else {
    console.log("num1 should be less than num2");
}
