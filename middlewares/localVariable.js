const localVariable = (req, res, next) => {
  req.app.locals = {
    email: null,
    otp: null,
    otpExpiry: null,
  };
  next();
};

module.exports = localVariable;
