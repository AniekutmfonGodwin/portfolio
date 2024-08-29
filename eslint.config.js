const eslintPluginTypeScript = require("@typescript-eslint/eslint-plugin");
const eslintParserTypeScript = require("@typescript-eslint/parser");
const eslintPluginCSSModules = require("eslint-plugin-css-modules");

module.exports = [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypeScript,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    files: ["**/*.css"],
    plugins: {
      "css-modules": eslintPluginCSSModules,
    },
    rules: {
      "css-modules/no-unused-class": "warn",
      "css-modules/no-undef-class": "error",
    },
  },
];
