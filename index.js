const { pbkdf2 } = require("crypto");
const express = require("express");

const PORT = 3000;
const app = express();

app.get("/", (req, res, next) => {
  pbkdf2("rogery", "salt", 100000, 512, "sha512", (err, derivedKey) => {
    if (err) throw Error("Something went wrong");
    res.json({
      message: "Home page",
    });
  });
});

app.get("/fast", (req, res, next) => {
  res.json("This was fast");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
