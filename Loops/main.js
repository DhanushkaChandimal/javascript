console.log("----------- \n For Loop \n-----------");
for(let i = 1; i <= 5; i++){
    console.log("Iteration", i);
}

console.log("----------- \n While Loop \n-----------");

let i = 1;
while(i <= 3){
    console.log("Iteration", i);
    i++;
}

console.log("----------- \n Nested Loop \n-----------");

for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 2; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

console.log("----------- \n break \n-----------");

for(let i = 1; i <= 3; i++){
    if(i == 3) break;
    console.log("Iteration", i);
}

console.log("----------- \n continue \n-----------");

for(let i = 1; i <= 5; i++){
    if(i == 3) continue;
    console.log("Iteration", i);
}

console.log("----------- \n Practice \n-----------");

for(let i = 1; i <= 10; i++){
    console.log("Number", i);
}

for(let i = 2; i < 20; i = i + 2){
    console.log(i);
}

for(let i = 10; i > 0; i--){
    console.log("Number", i);
}

let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("Total from 1 to 5 = ", sum);

for(let i = 1; i <= 5; i++){
    console.log(i + " X " + i + " = " + i*i);
}

let animals = ["cat", "dog", "rabbit", "parrot"];
for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

let names = ["Ali", "Sara", "John"];
for(let i = 0; i < names.length; i++){
    console.log("Hello " + names[i] + "!");
}

let original = [1, 2, 3, 4];
let doubled = [];
for(let i = 0; i < original.length; i++){
    doubled.push(original[i] * 2);
}
console.log(doubled);

for(let i = 3; i < 20; i = i + 3){
    console.log(i);
}

let oddCount = 0;
for(let i = 1; i < 10; i++){
    if(i % 2 == 1) oddCount++;
}
console.log("Odd numbers between 1–10 = ", oddCount);

for(let i = 1; i <= 10; i++){
    if(i == 5) continue;
    console.log("Number", i);
}

for(let i = 1; i <= 10; i++){
    if(i == 7) break;
    console.log("Number", i);
}
