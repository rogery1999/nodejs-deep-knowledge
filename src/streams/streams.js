const Stream = require("stream");
const fs = require("fs");

// * First example
// process.stdin.on("data", (data) => {
//   // process.stdout.write(`Stdout => ${data.toString("utf-8")}`);
//   fsWritableStream.write(`Stdout => ${data.toString("utf-8")}`);
// });

// * Second example
// const addZeroIfNecesary = (num) => `${num <= 9 ? "0" : ""}${num}`;
// const getDateAndHour = () => {
//   const now = new Date();
//   const day = now.getDay();
//   const month = now.getMonth();
//   const fullYear = now.getFullYear().toString();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   return `${addZeroIfNecesary(day)}/${addZeroIfNecesary(
//     month
//   )}/${fullYear.substring(fullYear.length - 2)} - ${addZeroIfNecesary(
//     hours
//   )}:${addZeroIfNecesary(minutes)}:${addZeroIfNecesary(seconds)}`;
// };
// const passThrough = new Stream.PassThrough().on("data", (data) => {
//   fsWritableStream.write(`${getDateAndHour()} => ${data.toString("utf-8")}`);
// });
// const fsWritableStream = fs.createWriteStream("./stream.txt", { flags: "a" });
// process.stdin.pipe(passThrough).pipe(process.stdout);

// * Third example
const fsReadableStream = fs.createReadStream("./stream.txt");
fsReadableStream.pipe(process.stdout);
