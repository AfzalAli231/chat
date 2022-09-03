const mongoose = require("mongoose");

const connectDB = () => {
    const conn = mongoose
      .connect(
        process.env.MONGO_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: true,
        }
      )
      .then(() => {
        console.log("mongo connected!");
      })
      .catch((err) => {
        console.log(err);
      });
};

module.exports = connectDB;
