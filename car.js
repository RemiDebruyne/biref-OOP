class Car {
  #color;
  #brand;
  #model;
  #year;

  constructor(brand, model, year, color) {
    this.#color = color;
    this.#brand = brand;
    this.#model = model;
    this.#year = year;
  }

  getColor() {
    return this.#color;
  }

  setColor(value) {
    this.#color = value;
  }

  getBrand() {
    return this.#brand;
  }

  setBrand(value) {
    this.#brand = value;
  }

  getModel() {
    return this.#model;
  }

  setModel(value) {
    this.#model = value;
  }

  getYear() {
    return this.#year;
  }

  setYear(value) {
    this.#year = value;
  }

  showDetails() {
    console.log(this.#brand);
    console.log(this.#model);
    console.log(this.#year);
    console.log(this.#color);
  }
}

let myCar = new Car("Toyota", "Yaris", "2005", "Rouge");

myCar.showDetails();

myCar.setColor("jaune");

myCar.showDetails();
