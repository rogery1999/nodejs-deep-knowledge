// process.env.UV_THREADPOOL_SIZE = 8;

const { pbkdf2 } = require("crypto");

const startTime = Date.now();

const encryptPassword = (index) => {
  pbkdf2("rogery", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw Error("Something went wrong");
    // console.log(`derivedKey ${index}: `, derivedKey);
    console.log(`process ${index} duration => ${Date.now() - startTime}`);
  });
};

setTimeout(() => encryptPassword(1), 0);
setTimeout(() => encryptPassword(2), 0);
setTimeout(() => encryptPassword(3), 0);
setTimeout(() => encryptPassword(4), 0);
setTimeout(() => encryptPassword(5), 0);
setTimeout(() => encryptPassword(6), 0);
// setTimeout(() => encryptPassword(7), 0);
// setTimeout(() => encryptPassword(8), 0);
