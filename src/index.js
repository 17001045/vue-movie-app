import Vue from "vue";
import App from "./App";
import VueCompositionAPI from "@vue/composition-api";

import "./style/main.scss";

Vue.use(VueCompositionAPI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
// https://youtu.be/SJwWQATQGvc?t=4141
