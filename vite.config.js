import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // 非ネイティブVueコンポーネント解決をスキップ(warn表示削除)
    template: {
      compilerOptions: {
        // 現時点ではswiperのみ指定
        isCustomElement: (tag) => tag.includes('swiper')
      }
    }
  })],
  // base: "./", // ビルド時の真っ白対応
  base: "/neko-zukushi/", // router設定後のビルド時のパス指定
});
