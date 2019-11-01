import Vue, { CreateElement, VNode } from 'vue';
import store from './store';
import App from './views/app';

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h: CreateElement): VNode => h(App),
}).$mount('#app');
