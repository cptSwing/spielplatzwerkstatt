import jsEslint from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import prettierEslintRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11yEslint from 'eslint-plugin-jsx-a11y';
import preactEsLint from 'eslint-config-preact';
import tailwindEsLint from 'eslint-plugin-tailwindcss';
import htmlEsLint from '@html-eslint/eslint-plugin';

export default [
    ...tailwindEsLint.configs['flat/recommended'],
    htmlEsLint.configs?.recommended,
    jsEslint.configs.recommended,
    ...preactEsLint,
    ...tsEslint.configs.recommended,
    jsxA11yEslint.flatConfigs.recommended,
    prettierEslintRecommended,
    {
        ignores: ['dist/**/*', 'node_modules'],
    },
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,html,php,css}'],
        plugins: { htmlEsLint },
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

            'html/no-duplicate-class': 'error',
        },
    },
];
