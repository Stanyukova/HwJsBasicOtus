module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-alert": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "no-useless-escape": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "import/extensions": 0,
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
    "no-use-before-define": [
      "error",
      {
        functions: false,
      },
    ],
  },
  plugins: ["jest"],
};
