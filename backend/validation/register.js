const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
        errors.firstname = 'Firstname must be between 2 and 30 characters.';
    }

    if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
        errors.lastname = 'Lastname must be between 2 and 30 characters.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}