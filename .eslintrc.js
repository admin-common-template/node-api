module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint-config-egg'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // eslint (http://eslint.cn/docs/rules)
    'array-callback-return': 'off', // 强制数组方法的回调函数中有 return 语句
    'consistent-return': 'off', // 函数必须return
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }], // 引入开发环境依赖插件的处理
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'], // 换行符规则
    indent: ['error', 2], // 缩进4个空格
    'max-len': 'off', // 行的最大长度
    'no-bitwise': 'off',
    'no-eval': 'off',
    'no-irregular-whitespace': 'off', // 禁止不规则的空白
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-param-reassign': ['error', { props: false }], // 禁止对函数参数再赋值
    'no-return-assign': ['error', 'except-parens'], // return时：除非用圆括号括起来，否则不允许赋值
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'object-curly-newline': 'off', // 强制大括号内换行符的一致性
    semi: [2, 'never'], // 结尾分号
  },
}
