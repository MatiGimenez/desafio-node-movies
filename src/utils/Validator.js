const { RequiredFieldError } = require("../errors");

const validator = (body, fields) => {
  const keys = Object.keys(body);
  fields.forEach((field) => {
    if (!keys.includes(field)) {
      throw new RequiredFieldError(field);
    }
  });
};

module.exports = validator;
