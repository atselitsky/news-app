import Vue from "vue";
import Vuetify from "vuetify/lib";
import helpers from "@/helpers/helpers.js"

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark:  helpers.isDark()
  }
});
