class Animal {
  makeNoise() {}
}

class Dog extends Animal {
  //super.makeNoise() not used because parent method doesn't have a behaviour
  makeNoise() {
    return "wouaf";
  }
}

class Cat extends Animal {
  makeNoise() {
    return "miaou";
  }
}

let dog = new Dog();

let cat = new Cat();

console.log(dog.makeNoise());
console.log(cat.makeNoise());
