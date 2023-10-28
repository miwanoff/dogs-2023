class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} run!`);
  }
}

class Rabbit extends Animal {
  constructor(name) {
    // виклик конструктора батьківського класу Animal з аргументом "Rabbit"
    super(name);
  }
  walk() {
    // виклик методу батьківського класу walk()
    super.walk();
    console.log(`${this.name} jump!`);
  }
}
new Rabbit("White Rabbit").walk();
