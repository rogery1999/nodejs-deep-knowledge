const https = require("https");
const { pbkdf2 } = require("crypto");
const fs = require("fs");

const startTime = Date.now();

const doRequest = () => {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {
        // console.log("data: ", data);
      });
      res.on("end", () => {
        console.log("Request: ", Date.now() - startTime);
      });
    })
    .end();
};

const doHash = (index = 1) => {
  pbkdf2("rogery", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw Error("Something went wrong");
    // console.log(`derivedKey ${index}: `, derivedKey);
    console.log(`Hash N°(${index}): `, Date.now() - startTime);
  });
};

doRequest();

fs.readFile("multitask.js", "utf-8", () => {
  console.log("FS: ", Date.now() - startTime);
});

doHash("A");
doHash("B");
doHash("C");
doHash("D");
// doHash("E");
// doHash("F");
// doHash("G");
