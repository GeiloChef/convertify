// eslint.config.js
import vue from "eslint-plugin-vue";
import tsParser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: { vue, "@typescript-eslint": ts },
    rules: {
      "vue/singleline-html-element-content-newline": ["error", {
        "ignoreWhenNoAttributes": false,
        "ignoreWhenEmpty": false,
      }],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always", // enforce self-closing for void elements (like <img />)
          "normal": "always", // enforce self-closing for normal elements
        },
        "svg": "always",
        "math": "always",
      }]
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: { "@typescript-eslint": ts },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },
];