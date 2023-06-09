const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        let uri = process.env.MONGODB_URL;
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri, { useNewUrlParser: true });

        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {connectDB};
