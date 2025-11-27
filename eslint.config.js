import jsEslint from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import prettierEslintRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11yEslint from 'eslint-plugin-jsx-a11y';
import preactEsLint from 'eslint-config-preact';

export default [
    prettierEslintRecommended,
    jsEslint.configs.recommended,
    ...preactEsLint,
    ...tsEslint.configs.recommended,
    jsxA11yEslint.flatConfigs.recommended,
    {
        ignores: ['dist/**/*', 'test/fixtures/**', 'test/__snapshots__/**'],
    },
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-empty': 'off',
            'object-shorthand': 'warn',
            'no-console': 'warn',
            'no-unused-vars': 'off',
            'no-unused-expressions': 'off',
            'no-unreachable': 'warn',

            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
        },
    },
];
