import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// Vue.use(axios);
// Vue.prototype.$axios = axios;
// // Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
