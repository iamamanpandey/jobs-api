const express = require("express");
const env = require("dotenv");
const app = express();
const connectDatabase = require("./config/database.js");
const bodyParser = require("body-parser");

env.config({ path: "./config/config.env" });

const PORT = process.env.PORT;
const jobs = require("./routes/jobs");

app.use(bodyParser.json());
app.use("/api/v1", jobs);

connectDatabase();

app.listen(PORT, () => {
  console.log(`SERVER started on port ${PORT}`);
});
