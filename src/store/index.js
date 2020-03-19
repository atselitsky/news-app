import Vue from "vue";
import Vuex from "vuex";
import news from "./modules/news/index.js";
import sidebar from "./modules/sidebar/index.js";
import filters from "./modules/filters/index.js"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    sidebar,
    filters
  }
});
