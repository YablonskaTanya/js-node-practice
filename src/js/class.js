class Car {
  static BESTCAR = 'MB';
  static logInfo(obj) {
    // console.log('🚀 Car ~ logInfo:', obj);
  }

  #test = 'test';

  mySuper = 55;

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  //   setModel(newModel) {
  //     this.model = newModel;
  //   }

  //   getModel() {
  //     return this.model;
  //   }
}

// const carInstance = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });

// console.log(carInstance);

// console.log(carInstance.model);
// carInstance.model = 'Q7';
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 100000;
// console.log(carInstance.price);

// console.log(carInstance);

// class CoffeeMachine {
//   #waterAmount = 0;
//   #power;

//   set waterAmount(value) {
//     if (value < 0) {
//       value = 0;
//     }
//     this.#waterAmount = value;
//   }

//   get waterAmount() {
//     return this.#waterAmount;
//   }

//   constructor(power) {
//     this.#power = power;
//   }
// }

// // створюємо кавоварку
// let coffeeMachine = new CoffeeMachine(100);

// // додаємо воду
// coffeeMachine.waterAmount = -10; // #waterAmount буде 0, а не -10

// console.log(CoffeeMachine);
// console.log(coffeeMachine);

// function Bloger({ email, age, numberOfPost, topics }) {
//   this.email = email;
//   this.age = age;
//   this.numberOfPost = numberOfPost;
//   this.topics = topics;
// }

// Bloger.prototype.getInfo = function (params) {
//   return `User ${this.email} is ${this.age} years old and has ${this.numberOfPost} posts`;
// };

// Bloger.prototype.updatePostCount = function (count) {
//   this.numberOfPost += count;
// };

// Bloger.prototype.updateTopics = function (elem) {
//   this.topics.push(elem);
// };

// const mango = new Bloger({
//   email: 'mango@MediaList.com',
//   age: 24,
//   numberOfPost: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());
// mango.updateTopics('fasfion');
// console.log(mango.getInfo());
// console.dir(Bloger);
// console.log(mango);

// class Blogger {
//   constructor({ email, age, numberOfPost, topics } = {}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPost = numberOfPost;
//     this.topics = topics;
//   }

//   get info() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPost} posts`;
//   }

//   set info(count) {
//     this.numberOfPost += count;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@MediaList.com',
//   age: 24,
//   numberOfPost: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.info);
// console.log(mango);
// mango.info = 5;
// console.log(mango.info);
// console.log(mango);

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@mail.com',
// });

// console.log(mango);

// mango.login = 'Polly';
// mango.email = 'polly@mail.com';

// console.log(mango);

//

function XO(str) {
  const x = [];
  const o = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].toLowerCase() === 'x') {
      x.push(str[i]);
    } else if (str[i].toLowerCase() === 'o') {
      o.push(str[i]);
    }
  }

  if (x.length === o.length) {
    return true;
  } else false;
}
