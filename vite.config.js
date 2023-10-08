import path from "path";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// https://vitejs.fr/guide/static-deploy.html
export default defineConfig({
  base: "/restaurant-css-framework/",
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/main.js"),
        index: path.resolve(__dirname, "src/index.html"),
        menu: path.resolve(__dirname, "src/menu.html"),
        pictures: path.resolve(__dirname, "src/pictures.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        restaurants: path.resolve(__dirname, "src/restaurants.html"),
      },
    },
    server: {
      port: 8040,
    },
  },
});
