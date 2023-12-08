let s;
import('./stack.js').then((module) => {
  const Stack = module.default;
  const stack = new Stack();
  s = stack;

  stack.push(25);
  stack.push(2);

  console.log(stack.count);
});

// // Factory function
// function createUser(givenName, surname) {
//   return {
//     firstName: givenName,
//     lastName: surname,
//     fullName: function () {
//       return `${givenName} ${surname}`;
//     }
//   };
// }
//
// // Constructor function
// function User(givenName, surname) {
//   this.firstName = givenName;
//   this.lastName = surname;
//   this.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }
//
// const user1 = createUser('Juan Miguel', 'Paulino Carpio');
// console.log(user1.firstName);
// console.log(user1.fullName());
//
// const user2 = new User('Jayleen', 'Ortega');
// console.log(user2.firstName);
// console.log(user2.lastName);
// console.log(user2.fullName());
//
//
// function Circle(radius) {
//   this.radius = radius;
//
//   this.draw = () => {
//     this.radius = 25;
//   }
//
//   let defaultLocation = {x: 0, y: 0};
//
//   Object.defineProperty(this, 'defaultLocation', {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) {
//         throw new Error('default location is not valid.');
//       }
//       defaultLocation = value;
//     }
//   })
// }
//
// class Circle2 {
//   radius;
//
//   get defaultLocation() {
//     return this.radius;
//   }
// }
//
// const circle1 = new Circle(25);
// console.log('defaultLocation', circle1.defaultLocation);
// // circle1.defaultLocation = 25;
// console.log(circle1);
//
//
// ////////////////// Stopwatch
// function Stopwatch() {
//   let state = 'disabled';
//
//   let duration = 0;
//
//   let start;
//   let end;
//
//   this.start = function () {
//     if (state === 'active') {
//       throw new Error('Stopwatch is already active.');
//     }
//
//     state = 'active';
//     start = new Date();
//   };
//
//   this.stop = function () {
//     if (state === 'disabled') {
//       throw new Error('Stopwatch is already disabled.');
//     }
//
//     state = 'disabled';
//     end = new Date();
//     duration += (end - start) / 1000;
//   };
//
//   this.reset = function () {
//     duration = 0;
//     start = null;
//     end = null;
//   };
//
//   Object.defineProperty(this, 'duration', {
//     get() {
//       return duration;
//     }
//   });
// }
//
//
// /////////// Prototype Inheritance
//
// function Shape() {
//   this.name = 'Figure';
//   this.print = function () {
//     console.log(this.name);
//   }
// }
//
// Shape.prototype.draw = function () {
//   console.log('Draw');
// }
//
// Shape.prototype.duplicate = function () {
//   console.log('Duplicate');
// }
//
//
// const shape = new Shape();
// // shape.draw();
// // shape.duplicate();
//
//
// function Circle1(radius) {
//   this.radius = radius;
// }
//
// // Circle1.prototype = new Shape();
// Circle1.prototype = Object.create(Shape.prototype);
// Circle1.prototype.constructor = Circle1;
//
// const circle3 = new Circle1(5);
//
// // debugger;
// circle3.draw();
// circle3.duplicate();
// // circle3.print();
//
// // const test = new circle3.prototype.constructor();
//
// // console.log('JMPC')
//
//
// function SquareFunc(length) {
//   this.length = length;
//   this.perimeter = function () {
//     const perimeter = this.length * 4;
//     console.log(`Perimeter is ${perimeter}`);
//   }
// }
//
// SquareFunc.prototype.area = function () {
//   const area = this.length * this.length;
//   console.log(`Area is ${area}`);
// }
//
// class Square {
//   constructor(length) {
//     this.length = length;
//
//     this.perimeter = function () {
//       const perimeter = this.length * 4;
//       console.log(`Perimeter is ${perimeter}`);
//     }
//   }
//
//   area() {
//     const area = this.length * this.length;
//     console.log(`Area is ${area}`);
//   }
//
//   static logMessage() {
//     console.log('Log message');
//   }
// }
//
// const q = new Square(5);
// const qf = new SquareFunc(5);

