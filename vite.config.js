import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        login: resolve(__dirname, "src/login/index.html"),
        orders: resolve(__dirname, "src/orders/index.html"),
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        productList: resolve(__dirname, "src/product-list/index.html"),
      },
    },
  },
});
