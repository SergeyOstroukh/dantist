import {dirname} from "path";
import {fileURLToPath} from "url";

import {FlatCompat} from "@eslint/eslintrc";
import perfectionist from "eslint-plugin-perfectionist";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      perfectionist,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      'no-console': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'arrow-parens': 'off',
      'consistent-return': 'off',
      curly: ['error', 'all'],
      'import/extensions': [
        'error',
        {css: 'never', json: 'always', scss: 'always', svg: 'always'},
      ],
      'import/no-duplicates': 'off',
      'import/order': 'off',
      'import/prefer-default-export': 'off',
      'max-lines': ['error', 400],
      'no-debugger': 'off',
      'no-duplicate-imports': 'error',
      'no-empty-pattern': 'off',
      'no-nested-ternary': 'off',
      'prefer-const': 'error',
      'react/button-has-type': 'error',
      'react/display-name': 'off',
      'typescript-eslint/no-empty-object-type': 'off',
      'react/jsx-boolean-value': ['error'],
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-curly-brace-presence': [
        'error',
        {children: 'ignore', propElementValues: 'ignore', props: 'ignore'},
      ],
      'react/jsx-fragments': ['error'],
      'react/prop-types': 'off',
      'react/void-dom-elements-no-children': ['error'],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.css'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
          paths: ['src'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
      react: {
        version: 'detect',
      }
    }
  }
];

export default eslintConfig;


