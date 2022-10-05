// // * Exercise 01
// const object = {
//   message: 'Hello, World!',
//   getMessage() {
//     const message = 'Hello, Earth!';
//     return this.message;
//   }
// };
// console.log(object.getMessage()); // What is logged?

// TODO: Validar este caso especial
// * Exercise 02
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
  // this.getName = function() { return this.name};
}
const cat = new Pet("Fluffy");
console.log('cat', cat)
console.log(cat.getName()); // What is logged?
const { getName } = cat;
console.log(getName());

// // * Exercise 03
// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message); // What is logged?
//   }
//   // logMessage: () => {
//   //   console.log(this.message); // What is logged?
//   // }
// };

// setTimeout(object.logMessage, 1000);
// // ? Side challenge: how can you fix this code so that 'Hello, World!' is logged to console? :
// // setTimeout(object.logMessage.bind(object), 1000);

// // * Exercise 04
// // ? How can you call logMessage function so that it logs "Hello, World!"?
// const object = {
//   message: 'Hello, World!'
// };
// function logMessage() {
//   console.log(this.message); // "Hello, World!"
// }

// // ! Write your code here...
// // ! There are 3 ways
// logMessage.call(object);
// logMessage.apply(object);
// logMessage.bind(object)();

// // * Exercise 05
// const object = {
//   who: 'World',
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   }
// };
// console.log(object.greet());    // What is logged?
// console.log(object.farewell()); // What is logged?


// // * Exercise 06
// // ! En nodejs
// global.length = 4
// // // ! En el navegador
// // var length = 4;
// function callback() {
//   console.log(this.length); // What is logged?
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback, 1, 2);


// // * Exercise 07
// // ! En nodejs
// global.length = 4
// // // ! En el navegador
// // var length = 4;

// function callback() {
//   console.log(this.length); // What is logged?
// }

// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };
// object.method(callback, 1, 2);