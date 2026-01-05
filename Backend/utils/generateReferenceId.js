module.exports = function generateReferenceId() {
  return (
    "SEN-" +
    Math.random().toString(36).substring(2, 8).toUpperCase()
  );
};
