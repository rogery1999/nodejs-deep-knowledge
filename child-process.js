process.on("message", ({ indication, duration = 5000 }) => {
  if (indication === "start") {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {}

    process.send({ message: "Finish my job", duration });
  } else {
    console.err("Unhandle indication");
    process.send({ message: "Unhandle indication" });
  }
});
