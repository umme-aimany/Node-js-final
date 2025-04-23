const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/", );

        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.log("MongoDB connection failed:", err);
    }
}

connectDB();

