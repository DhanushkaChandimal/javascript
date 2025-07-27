let arrayTest = ["red", "green", "blue"];

console.log(arrayTest[0]); // red
console.log(arrayTest[1]); // green
console.log(arrayTest[2]); // blue

arrayTest[1] = 25;
console.log(arrayTest); //  ["red", 25, "blue"];

arrayTest.push("Mina");
console.log(arrayTest); //  ["red", 25, "blue", "Mina"];

for (let i = 0; i < arrayTest.length; i++) {
  console.log(arrayTest[i]);
}