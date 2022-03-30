const axios = require("axios");
const greet = (name) => "Hello " + name;

const users = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users?_limit=2"
  );
  return res.data;
};

const validateDNI = (expresionTest) => {
  const regex = new RegExp("^(7)[0-9]{7}$");
  if (regex.test(expresionTest)) {
    return true;
  }
  return false;
};

module.exports = {
  users,
  greet,
  validateDNI,
};
