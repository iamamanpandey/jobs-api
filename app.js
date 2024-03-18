const express = require("express");
const env = require("dotenv");
const app = express();
const connectDatabase = require("./config/database.js");
const bodyParser = require("body-parser");

env.config({ path: "./config/config.env" });
const errorMiddleware = require("./middleware/errors.js");
const PORT = process.env.PORT;
const jobs = require("./routes/jobs");

app.use(bodyParser.json());
app.use("/api/v1", jobs);
app.use(errorMiddleware);

process.on("uncaughtException", (err) => {
  console.log("Error:", err);
  console.log("Shutting dow the server due to handled promise rejection.");
    process.exit(1);
});

connectDatabase();

const server = app.listen(PORT, () => {
  console.log(
    `SERVER started on port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//handling Unhandles Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log("Erro:", err.messsage);
  console.log("Shutting dow the server due to handled promise rejection.");
  server.close(() => {
    process.exit(1);
  });
});