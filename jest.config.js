// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  testEnvironment: "node",

  transform:  {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
  },
};
