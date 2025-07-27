let arrayTest = ["red", "green", "blue"];

console.log(arrayTest[0]); // red
console.log(arrayTest[1]); // green
console.log(arrayTest[2]); // blue

arrayTest[1] = 25;
console.log(arrayTest); //  ["red", 25, "blue"]

arrayTest.push("Mina");
console.log(arrayTest); //  ["red", 25, "blue", "Mina"]

console.log("==========================\n Loop \n==========================");

for (let i = 0; i < arrayTest.length; i++) {
    console.log(arrayTest[i]);
}

console.log("==========================\n ArrayMethods \n==========================");
console.log(arrayTest); //  ["red", 25, "blue", "Mina"]
console.log("length : ",arrayTest.length); //  4

arrayTest.push("New");
console.log("arrayTest.push(\"New\")", arrayTest); //  ["red", 25, "blue", "Mina", "New"]

console.log(arrayTest.pop()); //  New
console.log("after pop : ", arrayTest); //  ["red", 25, "blue", "Mina"]

console.log("includes 10? : ", arrayTest.includes(10)); //  false
console.log("includes 25? : ", arrayTest.includes(25)); //  true

console.log("index of 25 : ", arrayTest.indexOf(25)); //  1
console.log("index of \"Mina\" : ", arrayTest.indexOf("Mina")); //  3
console.log("index of 10 : ", arrayTest.indexOf(10)); //  -1
