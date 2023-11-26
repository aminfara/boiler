/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ['../.eslintrc.json'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['.eslintrc.cjs'],
};
