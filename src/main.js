import Vue from "vue";
import App from "./App.vue";
import "./plugins/portal";
import router from "./plugins/router";
import "./assets/css/index.css";
import Screen from "@/components/Screen.vue";
import Button from "@/components/Button.vue";

Vue.config.productionTip = false;

Vue.component("Screen", Screen);
Vue.component("Button", Button);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
