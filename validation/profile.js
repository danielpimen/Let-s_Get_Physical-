const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.bio = !isEmpty(data.bio) ? data.bio : '';

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle Required';
  }

  if (Validator.isEmpty(data.bio)) {
    errors.bio = 'Bio is Required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
