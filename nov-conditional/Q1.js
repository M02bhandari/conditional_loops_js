/*
Q1. What are conditional statements? Explain conditional statements with syntax and examples.

Ans--In java script , conditionals statement allow to execute different blocks of code based on whether the given conditions are True or False .
Tere are primarily two types of conditionals statement in java script
if , else & switch.

If .... else Statement 
statement evalute a conditin and executes a block of code if the condition is true .
*/

// Syntax

if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}

// Example 

let x = 100;
if (x > 90) {
    console.log("x is greater than 90");
}

// Example 2

let y = 50;
if (y < 40) {
    console.log("y is greater than 40 ");
} else {
    console.log("y is less than 40");
}

// swithch example 3

switch (expression) {
    case value1:
        // code to be executed if expression matches value1
        break;
    case value2:
        // code to be executed if expression matches value2
        break;
    // additional cases...
    default:
        // code to be executed if no case matches expression
}

let day = 3 ;
switch (day) {
    case 1:
        console.log("Monday");      
        break;

        case 2:
            console.log("Tuesday");      
            break;

            // case 3:
            //     console.log("Wednesday");      
            //     break;

    default:
        console.log("Invalid Day");
        break;
}

// Example 2

let Friends = "Golu";

switch (Friends) {
    case "" :
        console.log("Golu");
        break;

        case "jiut" :
        console.log("jiut");
        break;

        case "Ravi" :
        console.log("Ravi");
        break;

        case "Ramon" :
        console.log("Ramon");
        break;

        
    default:
        console.log("Your friend " + Friends + " is missing from this list");
        break;
}


