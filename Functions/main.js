// Named block of instructions that performs a task
// DRY - Do not Repeat Yourself
function printSomething() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
printSomething();

function add(a, b) {
    return a + b;
}
console.log(add(12, 13));

function double(a) {
    return a * 2;
}
console.log(double(12));

function fullName (firstName , lastName ) {
    return firstName + " " + lastName;
}
console.log(fullName("Erik", "Halt"));


function isEven (number) {
    return number % 2 === 0;
}
console.log(isEven(12));
console.log(isEven(13));

console.log("----------- \n Practice \n-----------");

// Level 1
function greetUser() {
    console.log("Hello, student!");
}
greetUser();

function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(100, 150));

function greet(name) {
    return "Welcome, " + name;
}
console.log(greet("Dhanushka"));

// Level 2
function printRange(number) {
    for(let i = 1; i <= number; i++){
        console.log(i);
    }
}
printRange(5);

// Level 3
function printArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}
printArrayElements(["Arr", "Dog", [2, 1, 5]]);

function getPositiveNumbers(numbers) {
    let positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] >= 0) positiveNumbers.push(numbers[i]);
    }
    return positiveNumbers;
}
console.log(getPositiveNumbers([10, 2.5, -5, 0, -0.1, 32.85]));

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sumArray([10, 2.5, -2.5, 0, -30, 50]));

// Level 4
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(11));

function countEvens(arr) {
    let totalEvens = 0;
    for (let i = 0; i < arr.length; i++) {
        totalEvens += arr[i] % 2 === 0 ? 1 : 0;
    }
    return totalEvens;
}
console.log(countEvens([10, 11, 12, 13, 14, 15, 16]));

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = arr[i] > max ? arr[i] : max;
    }
    return max;
}
console.log(findMax([55, 10, 11, 12, 13, 14, 15, 16]));

// Level 5
function fizzBuzz(n) {
    console.log(n % 15 == 0 ? "FizzBuzz"
    :n % 3 == 0 ? "Fizz"
    :n % 5 == 0 ? "Buzz"
    :n);
}
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(16);
fizzBuzz(300);
fizzBuzz(500);
fizzBuzz(150);
fizzBuzz(331);