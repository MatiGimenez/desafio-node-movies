class RequiredFieldError extends Error {
  constructor(field) {
    super(`${field} field is required`);
    this.name = "RequiredFieldError";
    this.code = 400;
  }
}

module.exports = { RequiredFieldError };
