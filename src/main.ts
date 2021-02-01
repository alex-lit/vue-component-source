import '@/plugins/vue-component-source';
import '@alexlit/css-material-color-palette-variables/index.css';

import Vue from 'vue';

import App from './app.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
