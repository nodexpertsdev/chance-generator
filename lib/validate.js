const Validate = {};

Validate.validateField = (expression) => {
  let message = '';
  if (!expression) {
    message = 'Please specify a Chance function field in first parameter of generate function.';
  } else if (expression.match(/[^\s]+/g).length > 1) {
    message = 'Please remove spaces from Chance function field.';
  } else {
    message = '';
  }
  return (message === '') ? { flag: true, message } : { flag: false, message };
};

export default Validate;
