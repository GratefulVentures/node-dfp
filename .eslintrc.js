module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  env: {
    browser: false,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    // "prettier"
  ],
  plugins: [
    // "prettier"
  ],
  rules: {
    // "no-debugger": [0],
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "singleQuote": true
    //   }
    // ]
  }
}
