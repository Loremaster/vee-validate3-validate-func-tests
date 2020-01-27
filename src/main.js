import Vue from "vue";
import App from "./App.vue";
import { extend } from "vee-validate";
import { mimes, size } from "vee-validate/dist/rules";

Vue.config.productionTip = false;

extend("mimes", mimes);
extend("size", size);

new Vue({
  render: h => h(App)
}).$mount("#app");
