const Car = function ({ brand, model, price } = {}) {
  console.log(this);
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
console.log(myCar);

const myCar1 = new Car({ brand: 'Hunday', model: 'Accent', price: 15000 });
console.log(myCar1);

const myCar2 = new Car({
  price: 25000,
});
console.log(myCar2);
