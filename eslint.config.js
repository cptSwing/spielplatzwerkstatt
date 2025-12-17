import jsEslint from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import prettierEslintRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11yEslint from 'eslint-plugin-jsx-a11y';
import preactEslint from 'eslint-config-preact';
import htmlEslint from '@html-eslint/eslint-plugin';
import cssEslint from '@eslint/css';
import { tailwind4 } from 'tailwind-csstree';

export default [
    {
        name: 'languageOptions',
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    modules: true,
                    jsx: true,
                },
            },
            globals: {
                ...globals.node,
            },
        },
    },

    {
        name: 'ignores',
        ignores: ['dist/**/*', 'node_modules'],
    },

    {
        name: '@eslint/css/recommended',
        ...cssEslint.configs.recommended,
        files: ['**/*.css'],
        language: 'css/css',
        languageOptions: {
            customSyntax: tailwind4,
            tolerant: true,
        },
        rules: {
            'css/no-empty-blocks': 'warn',
        },
    },

    {
        name: '@html-eslint/eslint-plugin/flat/recommended',
        ...htmlEslint.configs?.['flat/recommended'],
        plugins: {
            html: htmlEslint,
        },
        files: ['**/*.html'],
        rules: {
            'html/no-duplicate-class': 'error',
        },
    },

    // Before jsEslint since it loads default jsElint rules, sigh
    {
        name: 'eslint-config-preact',
        ...preactEslint[1],
        files: ['**/*.{ts,tsx}'],
    },

    {
        name: '@eslint/js/recommended',
        ...jsEslint.configs.recommended,
        files: ['**/*.{ts,tsx}'],
        rules: {
            'no-empty': 'off',
            'object-shorthand': 'warn',
            'no-console': 'warn',
            'no-unused-vars': 'off',
            'no-unused-expressions': 'off',
            'no-unreachable': 'warn',
        },
    },

    {
        name: 'typescript-eslint/recommended',
        ...tsEslint.configs.recommended[0],
        files: ['**/*.{ts,tsx}'],
        rules: {
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

    {
        name: 'eslint-plugin-jsx-a11y/recommended',
        ...jsxA11yEslint.flatConfigs.recommended,
        files: ['**/*.{ts,tsx}'],
    },

    prettierEslintRecommended,
];
