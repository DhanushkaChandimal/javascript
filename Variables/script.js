// var, let, const

console.log("var : " + name1)
// Outdated
var name1 = 'Dhanushka Chandimal'
console.log("var : " + name1)
name1 = 'Dhanushka' // Reassigning the value
var name1 = 'Chandimal' // Redeclaring the value


// console.log("let : " + name2)
// let
let name2 = 'Dhanushka Chandimal'
console.log("let : " + name2)
name2 = 'Dhanushka' // Can reassign the value
// let name2 = 'Chandimal' // Can't redeclare the value

// console.log("const : " + name3)
// const
const name3 = 'Dhanushka Chandimal'
// const withoutValue; // should initialize
console.log("const : " + name3)
// name3 = 'Dhanushka' // Can't reassign the value
// console.log("const : " + name3)
// let name3 = 'Chandimal' // Can't redeclare the value

/*
Data types:
    Stribgs
    Numbers
    Booleans
    Array
    Object
    Undefined
 */

let name = "Dhanushka";
let age = 30;
let isStudent = true;
let fruits = ["apple", "banana", "orange"];
let person = { name: "DC", age: 25};

console.log("Name : ", name);
console.log("Age : ", age);
console.log("Is student : ", isStudent);
console.log("Fruits : ", fruits);
console.log("Person : ", person);

let x = 5;
let y = 3;
let sum = x + y;
console.log("Sum = ", sum);