import { defineConfig, type HotUpdateOptions } from 'vite';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';
import vitePHP from 'vite-plugin-php';

const _reloadNonViteCode = {
    name: 'reload-non-vite-code',
    hotUpdate(ctx: HotUpdateOptions) {
        if (ctx.file.endsWith('.php')) {
            ctx.server.environments.client.hot.send({
                type: 'full-reload',
            });
        }
    },
};

export default defineConfig({
    plugins: [
        vitePHP({
            entry: ['index.php', 'pages/**/*.php', 'partials/**/*.php'],
        }),
        preact(),
        tailwindcss(),
        // reloadNonViteCode,
    ],
});
