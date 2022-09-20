module.exports = {
  extends: [
    "eslint:recommended", // eslint 推荐的规则
    "plugin:import/recommended", // eslint-import 推荐的规则
    "plugin:prettier/recommended", // prettier 推荐的规则
  ],
  rules: {
    "no-unused-vars": 1,
    "import/no-unresolved": 0,
  },
};
