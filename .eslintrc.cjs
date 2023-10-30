/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:security/recommended", "prettier"],
  env: {
    browser: true,
    node: true,
    es2023: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
  },
};
