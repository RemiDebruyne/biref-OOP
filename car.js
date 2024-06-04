class Car {
  constructor(brand, model, year, color) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showDetails() {
    console.log(this.brand);
    console.log(this.model);
    console.log(this.year);
    console.log(this.color);
  }
}

let myCar = new Car("Toyota", "Yaris", "2005", "Rouge");

myCar.showDetails();
