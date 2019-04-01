const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user profile schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    location: {
        type: String
    },
    budget: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    preferences: {
        type: [String],
        required: true
    },
    sex: {
        type: String
    },
    bio: {
        type: String
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);