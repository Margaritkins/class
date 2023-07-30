'use strict'


class Worker {
  /**
   * 
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {number} rate 
   * @param {number} daysWorked 
   */
  constructor(firstName, lastName, rate, daysWorked = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.daysWorked = daysWorked;
    Worker.amount++;
  }
  get salary() {
    return this._rate * this._daysWorked;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (typeof firstName !== "string") {
      throw new TypeError("must be string");
    }
    if (firstName === "") {
      throw new RangeError("must be not empty string");
    }
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (typeof lastName !== "string") {
      throw new TypeError("must be string");
    }
    if (lastName === "") {
      throw new RangeError("must be not empty string");
    }
    this._lastName = lastName;
  }

  get rate() {
    return this._rate;
  }
  set rate(rate) {
    if (typeof rate !== "number") {
      throw new TypeError("must be number");
    }
    if (rate === "") {
      throw new RangeError("must be not empty");
    }
    if (rate < 0) {
      throw new RangeError("must be positive number");
    }
    this._rate = rate;
  }

  get daysWorked() {
    return this._daysWorked;
  }
  set daysWorked(daysWorked) {
    if (typeof daysWorked !== "number") {
      throw new TypeError("must be number");
    }
    if (daysWorked === "") {
      throw new RangeError("must be not empty");
    }
    if (daysWorked < 0) {
      throw new RangeError("must be positive number");
    }
    this._daysWorked = daysWorked;
  }
  // set amount(value) {
  //   if (typeof value !== "number") {
  //     throw new TypeError("must be number");
  //   }
  //   if (value === "") {
  //     throw new RangeError("must be not empty");
  //   }
  //   if (value < 0) {
  //     throw new RangeError("must be positive number");
  //   }
  //   this._amount = value;
  // }
  static amount = 0;
  static createWorkerTest() {
    return new Worker(firstName, lastName, rate, (daysWorked = 0));
  }
}

try {
  const worker1 = new Worker("Bruse", "Lee", 50, 20);
  console.log(worker1);
  const worker2 = new Worker("Chack", "Norris", 100, 20);
  console.log(worker2);
} catch (error) {
  console.log(error.message);
}

console.log(worker1.getSalary(50, 20));
