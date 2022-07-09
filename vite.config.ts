import { fileURLToPath, URL } from "url";
import ElementPlus from "unplugin-element-plus/vite";
import WindiCSS from "vite-plugin-windicss";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
