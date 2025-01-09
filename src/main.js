import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// リセットcss(サイト全体に反映)
import "./reset.css";
// 各種コンポーネントのユニークスタイルを1ファイルに統合
import "./style.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
