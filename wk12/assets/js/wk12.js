/* 
The if statement executes block of code if a condition is true.
The following shows the syntax of the if statement.

if (condition)
    statement(s);
*/

// let age = 18;
// if (age > 18 ){ // evaluate to false
//     document.write('Sorry you cannot sign up');
// }

// let age = 18;
// if (age >= 18 ){ // evaluate to false
//     document.write('Of course you can sign up');
// }

// Nested if statements (generally avoid using nested if's)

// let minorAge = 16;
// let state = "CA";

// if (state == "CA"){ // condition is true
//     if (minorAge >= 16){
//         document.write('Go ahead you can drive');
//     }
// }

// let minorAge = 16;
// let state = "CA";
// if (state == "CA" && minorAge >= 16) { // both conditions are true
//     document.write('Go ahead you can drive');
// }

// Functions
// To declare a function, you use the function keyword, followed by the function name,
// a list of parameters, and the function body as follows:

// function functionName (parameters){
// function only
//...

// A function can accept zero, one or multiple parameters.
// In the case of multiple parameters, you need to use a comma to separate them.
// Function with no parameters

// function say(){
//     document.write("hello World");
// }



// say()

/*let result;
const number = 25;

function square (a){
    result = a * a;

}
square (number);
document.write ("The square of 25 is : " + result)
*/

// fuction that accepts 2 parameters

/* const num1 = 25;
const num2 = 50;
let result;
function add(a,b){
    result = a + b;
}
add (num1, num2);
document.write("The sum of the 2 numbers is : " + result  );*/

// function to compare 2 numbers

// const num1 = 125;
// const num2 = 500;
// let result;

// function compare (x,y){
//     if (x > y){
//         return -1;
//     } else if (x < y){
//         return 1;
//     } {
//         return 0;
//     }
// }

// result = compare(x=15 , y=25);
// document.write('The result of comparison when num1 is less than num2 is : '+ result + "<br>");

// result = compare(x=25 , y=15);
// document.write('The result of comparison when num2 is less than num1 is : '+ result + "<br>");

// result = compare(x=15 , y=15);
// document.write('The result of comparison when num2 is less than num1 is : '+ result + "<br>");

// arrays

// the easiest eay to create an array is by using the an array literal []

// empty array

// const emptyArray = [];
// // array of strings
// const stringArray = ["Wake up", "Work", "Sleep"];

// // array of numbers
// const number_array = [2,5,7,9];

// // array of mixed data types
// const mixed_array = ["exercise", 5, true]; // sting , number, boolean

// const myArray = ['H','E', 'L','L', 'O'];
// let myArrayLenght = myArray.length;
// document.write('length of myArray is '+ myArrayLenght + "<br>");
// document.write('The first element of myArray is '+ myArray[0] + "<br>");
// document.write(' The last elemenT of myArray is '+ myArray[4] + "<br>");
// document.write('Element out of range in myArray is '+ myArray[5] + "<br>");
// document.write('Element out of range in myArray is '+ myArray[-1] + "<br>");

// loops for & while

// for loop
// for (initialization ; condition; update statement){
//block of code to be executed
// }

/* const n = 5; 
// loop from i= 1 to 5;
let i;
for (i = 0; i <= n; i++ ){
    document.write('I love JavaScript' + '<br>');
}; 

document.write('Value of i outside of for loop is ' + i + '<br>');*/

// while loop has one expression:
// condition -defines the loop stop condition
// while (condition){
//     code block to be executed
// }

/*
const grades = [79, 84, 56, 92, 49, 33];
let i = 0;
while (i < grades.length){
    document.write(grades[i] + "<br>");
    i++;
}
*/

// set population limit of aquarium to 10;
const poplimit = 10;

// initiate while loop to run until fish reaches population limit
// start with number of fish to 0
let fish = 0;

while (fish < poplimit) {
  // add one fish for each iteration
  document.write(
    "There is room for " + (poplimit - fish) + "more fish" + "<br>"
  );
  fish++;
}

let myName = "is Not Jame Bond 007";
document.write(
  "<div style='color:red; fond-size: 10pt; position: fixed; top: 10px right: 10px'>"
);
document.write("<strong><em>My Name</em></strong> " + myName);
