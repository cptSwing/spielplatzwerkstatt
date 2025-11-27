import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import vitePHP from 'vite-plugin-php';

export default defineConfig({
    plugins: [vitePHP(), preact(), tailwindcss()],
});
