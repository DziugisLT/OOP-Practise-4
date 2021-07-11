'use strict';
/* 
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //  this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

Person.hey = function () {
  console.log('Hey there');
};
const jonas = new Person('Jonas', 1991);

Person.hey();
jonas.hey();

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda);
console.log(jack);

console.log(jonas instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

Person.prototype.species = 'Homo sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [
  1, 2, 4, 4, 4, 4, 4, 3, 2, 2, 3, 2, 2, 4, 7, 8, 9, 58, 3, 4, 5, 6, 7, 8,
];

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
 */
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);
car1.accelerate();
car2.accelerate();
car1.brake();
car2.brake(); */
/* 
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hi');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();
jessica.hey();

///////////////////////////////////////
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
 */

/* const PersonProto = {
  calcAge: function calcAge() {
    console.log(2037 - this.birthYear);
  },

  init: function init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge(); 
steven.init('Steven', 2002);
steven.calcAge();
 */

/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  // get speedUS() {
  //   return this._speed;
  // }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford); */

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'CS');
Student.prototype.constructor = Student;
console.log(mike);
mike.introduce();
mike.calcAge();
 */

/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  get age() {
    return 2037 - this.birthYear;
  }
  
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  
  get fullName() {
    return this._fullName;
  }
  
  static hey() {
    console.log('Hi');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
      );
    }
  }
  
  const martha = new StudentCl('Martha Jones', 2012, 'CS');
  console.log(martha);
  martha.introduce();
  martha.calcAge(); */

/* const PersonProto = {
    calcAge: function calcAge() {
      console.log(2037 - this.birthYear);
    },
    
    init: function init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven = Object.create(PersonProto);
  
  const StudentProto = Object.create(PersonProto);
  StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
  };
  
  StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
  
  const jay = Object.create(StudentProto);
  jay.init('Jay', 2010, 'CS');
  jay.introduce();
  jay.calcAge();
  console.log(jay);
  console.log(steven); */

/* class Account {
    locale = navigator.language;
    
    #movements = [];
    #pin;
    
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this.#pin = pin;
      // this._movements = [];
      // this.locale = navigator.language;
      
      console.log(`Thanks for opening an acocunt, ${owner}`);
    }
    
    getMovements() {
      return this.#movements;
    }
    
    deposit(val) {
      this.#movements.push(val);
      return this;
    }
    
    withdraw(val) {
      this.deposit(-val);
      return this;
    }
    
    _approveLoan(val) {
      return true;
    }
    
    requestLoan(val) {
      if (this._approveLoan(val)) {
        this.deposit(val);
        console.log('Loan approved');
        return this;
      }
    }
    
    // #approveLoan(val) {
      //   return true;
      // }
      
      static hey() {
        console.log('Hi');
      }
    }
    
    const acc1 = new Account('Jonas', 'EUR', 1111);
    console.log(acc1);
    
    acc1.deposit(250);
    acc1.withdraw(140);
    acc1.requestLoan(1000);
    console.log(acc1.getMovements());
    
    console.log(acc1);
    
    Account.hey();
    // console.log(acc1.pin);
    
    // console.log(acc1.#movements);
    */

/* const Car = function (make, speed) {
     this.make = make;
     this.speed = speed;
   };
    */
/* Car.prototype.accelerate = function () {
     return (this.speed += 10);
   };*/

/* Car.prototype.brake = function () {
     this.speed -= 5;
     console.log(this.speed);
   };
   
   const EV = function (make, speed, charge) {
     Car.call(this, make, speed);
     this.charge = charge;
   };
   
   EV.prototype = Object.create(Car.prototype);
   
   EV.prototype.chargeBattery = function (chargeTo) {
     this.charge = chargeTo;
   };
   
   EV.prototype.accelerate = function () {
     this.speed += 20;
     this.charge -= 1;
     console.log(
       `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`
     );
   };
   
   const tesla = new EV('Tesla', 120, 23);
   
   console.log(tesla);
   
   tesla.accelerate();
   tesla.accelerate();
   tesla.brake();
   tesla.brake();
   tesla.chargeBattery(90);
   console.log(tesla);
  */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} slows down to ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery charged to ${this.#charge}`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .brake()
  .chargeBattery(85)
  .accelerate()
  .brake();

console.log(rivian);
