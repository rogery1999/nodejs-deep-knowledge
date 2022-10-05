const https = require("https");

const startTime = Date.now();

const fetchGoogle = () => {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("duration time => ", Date.now() - startTime);
      });
    })
    .end();
};

fetchGoogle();
// fetchGoogle();
// fetchGoogle();
// fetchGoogle();
