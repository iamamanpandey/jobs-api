const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_LOCAL_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    })
    .then((con) => {
      console.log(
        `Mongo db database has been connected ${con.connection.host}`
      );
    });
};
module.exports = connectDatabase;
