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

const carInstance = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });

console.log(carInstance);

console.log(carInstance.model);
carInstance.model = 'Q7';
console.log(carInstance.model);

console.log(carInstance.price);
carInstance.price = 100000;
console.log(carInstance.price);

console.log(carInstance);
