//Connection file to mongo db
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URL, {});
    const conn = await mongoose.connect("mongodb+srv://gssbartender:4srQy9lx6pOyzrry@cluster0.gwpfnxg.mongodb.net/?retryWrites=true&w=majority");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

