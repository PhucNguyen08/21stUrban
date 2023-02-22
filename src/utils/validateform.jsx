const validateEmail = value => {
  return value
    .trim()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
};

const validatePassword = value => {
  return value.trim().length > 8;
};

const validateEmpty = value => {
  return value.trim() !== '';
};

const validatePhoneNumber = value => {
  return value.trim().match(/(((\+|)84)|0)(2|3|5|7|8|9)+([0-9]{8})\b/);
};

export { validateEmail, validatePassword, validateEmpty, validatePhoneNumber };
