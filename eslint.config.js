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
    // rules: {
    //   'style/brace-style': 'off',
    // },
    // stylistic: {
    //   'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // },
  },
)
