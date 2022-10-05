// const zeroBuffer = Buffer.alloc(10);
// const fromBuffer = Buffer.from("Rogery", "base64");
// console.log("");


// ! Encode and decode a string to/from base64
const originalText = 'Hola soy Rogery';
const encodedText = Buffer.from(originalText, 'utf-8').toString("base64");
const decodedText = Buffer.from(encodedText, 'base64').toString('utf-8');


console.log('encodedText', encodedText);
console.log('decodedText', decodedText);
