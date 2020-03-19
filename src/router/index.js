import Vue from "vue";
import VueRouter from "vue-router";
import NewsPage from "../containers/NewsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NewsPage",
    component: NewsPage
  },
  {
    path:"/settings",
    name:"Settings",
    component:()=> import("@/containers/SettingsPage.vue")
  },
  {
    path: "/about",
    name: "About",

    component: () => import("@/containers/AboutPage.vue")
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("@/components/HelpPage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
