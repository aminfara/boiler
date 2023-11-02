/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["semistandard", "plugin:unicorn/recommended", "prettier"],
  overrides: [
    {
      files: ["*.test.js"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      env: {
        jest: true,
        "jest/globals": true,
      },
    },
  ],
};
