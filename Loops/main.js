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

for(let i = 1; i <= 5; i++){
    if(i == 3) continue;
    console.log("Iteration", i);
}