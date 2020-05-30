const errorMessage = (message) => {
  return {
    success: false,
    type: 'warning',
    message: `There was a problem. Unable to ${message}. Please try again.`,
  };
};

const successMessage = (message) => {
  return {
    success: true,
    type: 'success',
    message: `${message} successfully!`,
  };
};

module.exports = { errorMessage, successMessage };
