const mongoose = require('mongoose')
exports.db = async () => {
    try {
        await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, () => console.log('connected to DB...'));
    } catch (error) {
        console.log(error);
    }
}