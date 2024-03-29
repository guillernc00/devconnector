const mongoose = require('mongoose');
const config = require('config');

const database = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(database);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
