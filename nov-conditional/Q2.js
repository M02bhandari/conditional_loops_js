/*
Q2. Write a program that grades stu
dents based on their marks^
8 If grFatFr than 90 thFn A GradE
8 If bFtwFFn 70 and 90 thFn a B gradE
8 If bFtwFFn 50 and 70 thFn a C gradE
8 BFlow 50 thFn an F gradF
*/

let marks = 70;
if (marks >= 90) {
    console.log("A grade ");
} else if  ( marks >=70 && marks < 90) {
    console.log("B Grade");
}
 else if  ( marks >=50 && marks < 70) {
    console.log("C Grade");
}else{
    console.log("F Grade");
}