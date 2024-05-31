// testConnection.js
const mongoose = require('mongoose');
const { modelName } = require('../Models/Book');
require('dotenv').config();

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected successfully")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB