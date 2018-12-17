const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the bar profile
const BarSchema = new Schema({
    barname: {
        type: String,
        required: true
    },
    barowner : {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Bar = mongoose.model('bar', BarSchema);