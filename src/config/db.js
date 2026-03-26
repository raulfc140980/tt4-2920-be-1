const mongoose = require("mongoose");

const connectDB = async () => {

    const mongoUri = "mongodb+srv://refc80_db_user:Rm8c23LeIbMXTym1@cluster0.45hb0wm.mongodb.net/?appName=Cluster0/tt4-2920RF";

    await mongoose.connect(mongoUri);

    console.log("MongoDB connected successfully!");

};

module.exports = { connectDB };