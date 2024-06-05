class Vehicules {
  _brand;
  _model;
  _year;
  constructor(brand, model, year) {
    this._brand = brand;
    this._model = model;
    this._year = year;
  }

  getBrand() {
    return this._brand;
  }

  setBrand(value) {
    this._brand = value;
  }

  getModel() {
    return this._model;
  }

  setModel(value) {
    this._model = value;
  }

  getYear() {
    return this._year;
  }

  setYear(value) {
    this._year = value;
  }
}

class Car extends Vehicules {
  #color;

  constructor(brand, model, year, color) {
    super(brand, model, year);
    this.#color = color;
  }

  getColor() {
    return this.#color;
  }

  setColor(value) {
    this.#color = value;
  }

  showDetails() {
    console.log(this._brand);
    console.log(this._model);
    console.log(this._year);
    console.log(this.#color);
  }
}

const myCar = new Car("Toyota", "Yaris", "2005", "Rouge");

myCar.showDetails();

myCar.setColor("jaune");

myCar.showDetails();
