const Mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ssn: String,
    firstName: String,
    lastName: String,
    age: Number,
    address: String,
    phone: String
})

const User = mongoose.model('User', UserSchema)

module.export = User;