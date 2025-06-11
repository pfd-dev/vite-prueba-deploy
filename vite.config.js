import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                dashboard: resolve(__dirname, 'src/pages/dashboard.html'),
                login: resolve(__dirname, 'src/pages/login.html'),
            },
        },
    },
});
