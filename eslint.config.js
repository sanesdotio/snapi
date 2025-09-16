// eslint.config.ts (ts)
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginSecurity from 'eslint-plugin-security';

export default [
  // JS recommended from @eslint/js
  js.configs.recommended,

  // TypeScript recommended from typescript-eslint
  ...tseslint.configs.recommended,

  // Security plugin recommended
  pluginSecurity.configs.recommended,

  // Your project tweaks
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: globals.node,
    },
  },
];
