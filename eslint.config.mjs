import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  { extends: ['airbnb', 'prettier'] },
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
