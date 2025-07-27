// Conditions
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
console.log(age >= 18 ? "Adult" : "Minor");

// Logical operator
/*

&& -  AND
|| -  OR
!  -  NOT
*/
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