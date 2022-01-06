const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

// const DB = process.env.URL.replace("<password>", process.env.URL);

// console.log(process.env.URL)
 
mongoose
  .connect(process.env.URL)
  .then(() => console.log("connected to MOngodb"))
  .catch((err) => console.error("ITs an error from "));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App running on port ${3001}`);
});
