module.exports = {
  settings: { react: { version: "detect" } },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: [],
  rules: {
    "react/prop-types": 0,
    "no-undef": "error",
  },
};
