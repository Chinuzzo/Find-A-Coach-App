module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "prettier", "prettier/vue"],
  
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": 0,
    "no-empty": 0,
    "no-irregular-whitespace": 0,
  },
}
  