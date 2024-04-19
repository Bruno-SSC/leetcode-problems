class Vehicle {
  constructor(model) {
    this.model = model;
  }

  displayData() {
    return this.model;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(model);
    this.make = make;
  }

  accelerate() {
    return "increasing speed";
  }
}

// "obj" has access to "classFn" methods === true
var checkIfInstanceOf = function (obj, classFn) {
  let res = false;
  let objProto = Object.getPrototypeOf(obj);

  

  console.log(classFn.prototype);

  return false;
};

checkIfInstanceOf(new Car("ford", "turbo"), Vehicle);
