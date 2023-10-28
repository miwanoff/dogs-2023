"use strict";
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function () {
  console.log(this.name + " бежит!");
};

function Rabbit(name) {
  Animal.call(this, name);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
  Animal.prototype.run.apply(this);
  console.log(this.name + " подпрыгивает!");
};

let rabbit = new Rabbit("Кролик");
rabbit.run();
