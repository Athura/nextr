const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBarInput(data) {
    let errors = {};

    data.barname = !isEmpty(data.barname) ? data.barname : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.location = !isEmpty(data.location) ? data.location : '';

    if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
        errors.phone = 'A valid phone number must be provided. Please provide a 10 digit number.';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'You must provide a valid email for the bar; or none at all.';
    }

    if (Validator.isEmpty(data.barname)) {
        errors.barname = 'You must provide a name for your bar';
    }

    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'You must provide a phone for the bar! Please provide a valid 10 digit phone number';
    }

    if (Validator.isEmpty(data.location)) {
        errors.location = 'You must provide a location for the bar!';
    }
}