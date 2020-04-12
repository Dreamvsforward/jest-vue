module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    "eol-last": 0,
    'comma-dangle': 0,
    eqeqeq: 0,
    'spaced-comment': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-undef': 0,
    semi: 0,
    'space-before-function-paren': 0,
    'padded-blocks': 0,
    quotes: 0,
    camelcase: 0,
    indent: 0,
    'no-dupe-keys': 0,
    "no-tabs": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
