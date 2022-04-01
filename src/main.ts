import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import "ant-design-vue/dist/antd.css";
import "./style/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn });
app.mount("#app");
