const mongoose = require("mongoose");

const URI = "mongodb+srv://Vaibhav5104:Vaibhav01513@mern2023.67gq3.mongodb.net/mern_admin?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to DB");
    } catch (e) {
        console.error("Database connection failed:", e);
        process.exit(1);  // Exit with failure
    }
};

module.exports = connectDB;
