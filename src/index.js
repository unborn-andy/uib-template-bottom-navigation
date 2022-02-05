import Vue from "vue";
import App from "./App.vue";

import "popper.js/dist/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = true;

window.uibuilder = uibuilder;
uibuilder.start('/test', '/uibuilder/vendor/socket.io')


new Vue({
  render: (h) => h(App),
}).$mount("#app");
