let arrayTest = ["red", "green", "blue"];

console.log(arrayTest[0]); // red
console.log(arrayTest[1]); // green
console.log(arrayTest[2]); // blue

arrayTest[1] = 25;
console.log(arrayTest); //  ["red", 25, "blue"]

arrayTest.push("Mina");
console.log(arrayTest); //  ["red", 25, "blue", "Mina"]

console.log("========================\n Loop \n========================");

for (let i = 0; i < arrayTest.length; i++) {
    console.log(arrayTest[i]);
}

console.log("========================\n ArrayMethods \n========================");
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

console.log("========================\n Practice \n========================");

let fruits = ["apple", "banana", "cherry"];
console.log("Second item : ", fruits[1]);
console.log("Before replace : ", fruits);
fruits[1] = "blueberry"
console.log("After replace : ", fruits);

fruits.push("orange");
console.log("After adding orange : ", fruits);

fruits.pop();
console.log("After pop : ", fruits);

fruits.unshift("grape");
console.log("unshift : ", fruits);


fruits.shift();
console.log("shift : ", fruits);

let numbers = [3, 6, 9, 12];
console.log("sum of the first and last numbers : ", numbers[0] + numbers[numbers.length-1]);

console.log("number of items : ", numbers.length);

numbers.push(15);
numbers.push(18);
console.log(numbers);

numbers[1] = null;
console.log(numbers);

let colors = ["red", "blue", "green"];
console.log(colors);
colors[colors.length-1] = "black";
console.log(colors);

let favoutites = ["pizza", "fries", "tortilla"]
console.log(favoutites);
favoutites.push("burger");
console.log(favoutites);
console.log("I like ", favoutites[0], "and ", favoutites[3]);