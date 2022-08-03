const { name } = require("./package.json");

module.exports = {
  displayName: name,
  name,
  preset: "ts-jest", //or "react-native"
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
