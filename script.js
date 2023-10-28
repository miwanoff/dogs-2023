function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  let age = 0;
  this.setAge = function (a) {
    if (a > 0) {
      age = a;
    } else {
      console.log("Цей собака, очевидно, ще не з'явився на світ...");
    }
  };
  this.getAge = function () {
    return age;
  };
  this.bark = function () {
    if(this.weight >= 25)
    console.log(this.name + " сказав Гав!");
  };
}

Dog.prototype.color="black";

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
// fido.bark();
// fluffy.bark();
// spot.bark();
//fido.age = -100;
fido.setAge(-100);
let dogs = [fido, fluffy, spot];
for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i].getAge() + " " + dogs[i].color);
    dogs[i].bark();
}

if (fido instanceof Dog) {
    console.log("it's a Dog!");
};
