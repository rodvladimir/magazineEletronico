import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base:"/magazineEletronico/",
    plugins: [],
    resolve: {
        /*something*/
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(_dirname, "./index.html"),
                checkout: resolve(_dirname, "./checkout.html"),
                pedidos: resolve(_dirname, "./pedidos.html"),
            },
        },
    },
});