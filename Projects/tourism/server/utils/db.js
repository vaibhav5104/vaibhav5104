const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Ensure environment variables are loaded

const URL = process.env.URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connection successful to DB");
    } catch (e) {
        console.error("Database connection failed:", e);
        process.exit(1);  // Exit with failure
    }
};

module.exports = connectDB;