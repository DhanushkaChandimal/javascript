// Conditions
console.log("----------- \n Conditions \n-----------");
let age = 18;

if(age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are not an adult");
}

let score = 85;

if(score >= 90){
    console.log("Grade A");
}else if(score >= 75){
    console.log("Grade B");
}else{
    console.log("Grade C");
}

//Nested conditions
console.log("----------- \n Nested Conditions \n-----------");

let ages = [18, 25, 17];
let hasIds = [true, false, false];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        if(hasIds[i]){
            console.log("Age is " + ages[i] + ": Access granted.");
        }else{
            console.log("Age is " + ages[i] + ": Access denied: ID required.");
        }
    }else{
        console.log("Age is " + ages[i] + ": Access denied: Age restriction.");
    }
}

// Ternary operator
console.log("----------- \n Ternary operator \n-----------");

console.log(age >= 18 ? "Adult" : "Minor");

// Logical operator
/*

&& -  AND
|| -  OR
!  -  NOT
*/
console.log("----------- \n Logical operator \n-----------");

let isAdult = true;
let hasTicket = false;

if(isAdult && hasTicket){
    console.log("You can enter");
}else{
    console.log("You can't enter");
}

if(isAdult || hasTicket){
    console.log("You can enter");
}else{
    console.log("You can't enter");
}

let isRaining = false;
if(!isRaining){
    console.log("You can go outside");
}

for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 18 && hasIds[i]){
        console.log("Age is " + ages[i] + " and has ID " + hasIds[i] + ": Access granted.");
    }else{
        console.log("Age is " + ages[i] + " and has ID " + hasIds[i] + ": Access denied.");
    }
}

for(let i = 0; i < ages.length; i++){
    console.log(ages[i] >= 18 && hasIds[i] ?
        "Age is " + ages[i] + " and has ID " + hasIds[i] + ": Access granted." :
        "Age is " + ages[i] + " and has ID " + hasIds[i] + ": Access denied.");
}

console.log("----------- \n Practice \n-----------");

// 1
let numbers = [0, 10, -25];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        console.log("Number " + numbers[i] + " is positive");
    }else if(numbers[i] === 0){
        console.log("Number " + numbers[i] + " is zero");
    }else{
        console.log("Number " + numbers[i] + " is negative");
    }
}

// 2
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        console.log("Age is " + ages[i] + ": eligible to vote.");
    }else{
        console.log("Age is " + ages[i] + ": ineligible to vote.");
    }
}

// 3
let scores = [100, 55, 85, 12];
for(let i = 0; i < scores.length; i++){
    if(scores[i] >= 90){
        console.log("Score is " + scores[i] + ": Grade A");
    }else if(scores[i] >= 75){
        console.log("Score is " + scores[i] + ": Grade B");
    }else if(scores[i] >= 50){
        console.log("Score is " + scores[i] + ": Grade C");
    }else{
        console.log("Score is " + scores[i] + ": Grade F");
    }
}

// 4
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 18 && hasIds[i]){
        console.log("Age is " + ages[i] + ": Access granted.");
    }else{
        console.log("Age is " + ages[i] + ": Access denied.");
    }
}

// 5
let number = 625;
if(Number.isInteger(number)){
    console.log("Whole number");
    if(Number.isInteger(Math.sqrt(number))){
        console.log("Perfect square");
    }
}

// 6
let isOnline = false;
console.log(isOnline ? "User is online" : "User is offline");

// 7
let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for(let i = 0; i < dayOfWeek.length; i++){
    console.log(dayOfWeek[i] ===  "Saturday" || dayOfWeek[i] ===  "Sunday"
        ? dayOfWeek[i] + " is a Weekend"
        : dayOfWeek[i] + " is a Weekday");
}

// 8
let isAdults = [true, false, true];
let hasTickets = [true, true, false];
for(let i = 0; i < isAdults.length; i++){
    if(isAdults[i] && hasTickets[i]){
        console.log("Access granted");
    }else if(!isAdults[i] && hasTickets[i]){
        console.log("Need guardian");
    }else if(!hasTickets[i]){
        console.log("No access");
    }
}

// 9
number = 15;
if(number % 2 === 0 && number % 5 === 0){
    console.log("Valid number");
}else{
    console.log("Invalid number");
}

// 10
isRaining = true;
console.log(isRaining ? "Take an umbrella" : "You’re good to go");