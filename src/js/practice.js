const Car = function ({ brand, model, price, options } = {}) {
  console.log(this);
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.options = options;
};

Car.prototype.sayHe = function () {
  console.log('🚀 Car.prototype.sayHe:', this);
  console.log('Hello');
  const rusult = this.price * 2;
  console.log(rusult);
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(Car.prototype);

const myCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
  options: 'full',
});
console.log(myCar);

myCar.sayHe();
myCar.changePrice(10000);

const myCar1 = new Car({ brand: 'Hunday', model: 'Accent', price: 15000 });
console.log(myCar1);
myCar1.sayHe();

const myCar2 = new Car({
  brand: 'VW',
  model: 'CC',
  price: 25000,
});
console.log(myCar2);
myCar2.sayHe();

// const User = function ({ mail, password } = {}) {
//   this.mail = mail;
//   this.password = password;
// };

// User();
// console.log(User);

// User.prototype.changMail = function (newMail) {
//   this.mail = newMail;
// };

// User.prototype.changePassword = function (newPassword) {
//   this.password = newPassword;
// };

// const newUser = new User({
//   mail: 'mango@mail.com',
//   password: 11111,
// });
// newUser.changMail('lola@mail.com');

// const newUser2 = new User({
//   mail: 'poly@mail.com',
//   password: 22222,
// });

// newUser2.changePassword(55555);

// console.log(newUser);
// console.log(newUser2);
