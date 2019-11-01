import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
// import authentication from './authentication';

Vue.use(Vuex);

const store: StoreOptions<{}> = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        // authentication,
    },
};

export default new Vuex.Store<{}>(store);
