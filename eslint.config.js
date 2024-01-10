import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: {
      tsconfigPath: './tsconfig.json',
    },

    ignores: [
      'public/telegram-web-app.js',
      'types/telegram.d.ts',
      // '**/*.d.ts',
    ],
    rules: {
      curly: ['error', 'all'],
      // 'style/brace-style': 'off',
    },
    // stylistic: {
    //   'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // },
  },
)
