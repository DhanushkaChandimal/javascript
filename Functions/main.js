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
