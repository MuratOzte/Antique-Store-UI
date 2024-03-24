import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import "./src/";
          @import "./src/Components/nav/Nav.scss";
          @import "./src/styles/_mixins.scss";
          @import "./src/styles/_helpers.scss";
        `,
            },
        },
    },
});
