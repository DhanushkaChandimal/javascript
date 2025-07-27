let age1 = 18;

if(age1 >= 18){
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
