module.exports = {
  extends: [
    "plugin:react/recommended", // react 推荐的规则
    "plugin:react-hooks/recommended", // react-hooks 推荐规则
    "plugin:react/jsx-runtime", // 解决react17后的jsx语法问题
  ],
  settings: {
    "version": "detect", // 自动选择已安装的版本
  },
  rules: {
    "react/prop-types": 1,
  },
};
