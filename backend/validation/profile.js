const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status: '';
    data.preferences = !isEmpty(data.preferences) ? data.preferences : '';

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle needs to be a minimum of 2 characters or maximum of 40.';
    }

    if (Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle is required.';
    }

    if (Validator.isEmpty(data.budget)) {
        errors.budget = 'You must provide a budget. We use this to find a suitable gift.';
    }

    if (Validator.isEmpty(data.status)) {
        errors.status = 'Status field is required. We use this to find a suitable gift.';
    }

    if (Validator.isEmpty(data.preferences)) {
        errors.preferences = 'Preferences are required. This helps narrow the search down to be focused.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};