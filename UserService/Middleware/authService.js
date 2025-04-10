const jwt = require("jsonwebtoken");
require("dotenv").config();

const privateKey = process.env.privateKey;

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, privateKey); // Synchronous verification
    return { isValid: true, id: decoded.id }; // Make sure your token contains an `id`
  } catch (err) {
    return { isValid: false, id: "" };
  }
};

module.exports = {
  verifyToken,
};
