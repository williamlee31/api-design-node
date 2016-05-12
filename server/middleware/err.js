module.exports = function() {
  return function(err, req, res, next) {
    console.log(err.message);
    req.status(500);
  }
};