let car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
}

console.log(car);
console.log(car.make);
console.log(car["make"]);
console.log(car.model);

car.mileage = 22554;
console.log(car);

car.model = "Corolla";
console.log(car);

car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    start: function(){
        console.log(`The ${this.year} ${this.make} ${this.model} is starting...`)
    }
}

car.start();

car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    start: function(minutes){
        console.log(`The ${this.year} ${this.make} ${this.model} is starting in ${minutes} minutes`)
    }
}

car.start(5);

car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
}

for (const key in car) {
    console.log("key " + car[key]);
}

let student = {
    name: "Alice",
    grade: 12,
    address: {
        street: "123 street",
        city: "Rhe city",
        zipcode: "60524"
    }
}

console.log(student.address.city);
console.log(student.address.aaaa);