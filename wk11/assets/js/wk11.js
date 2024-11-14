// alert("Message from wk11.js")

// Data types

/* There are 8 basic data types in JS

seven primitive data types:
number for numbers of any kind : integer, floating point
there are no separate single character types.
e.g. in C or java there is "char" for sing;e-character data types.
bigints: for integer numbers of arbitrary length.
boolean: True or False;
null: for unknown values - standalone type that has a single value null.
undefined: for unassigned values _ standalone type that has a single value undefined.
symbol for unique identifies.
one non-primitive data type:
object for more complex data structures.
typeof operators allow us to see which data type is stored in variable.



*/

// we can put any data type in a variable.
// example , we can store a string in a variable and then put


let message = "Hello";
message = 123455;

let n = 122;

// alert(1/0)
// alert("not a number" / 3); // not a number- NaN
// alert(NaN + 1); // NaN

// alert( NaN ** 0)

let str = "Hello ";
let naMe= "James";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another $(str)`;

// document.write(phrase);

// alert(`hello` + naMe)

let inGreater = 9>=5;
alert(inGreater);

let birthday = 9;
birthday = undefined;
alert(birthday);

const PI = 3.14;
document.write(PI);
PI = 9.8;


/*
typeof 0 // number
typeof 10n // bigint
typeof true // boolean
typeof "happy" // string
typeof symbol ("id" // symbols
typeof Math // "object"
typeof null // "object"
typeof alert // "function"

 */