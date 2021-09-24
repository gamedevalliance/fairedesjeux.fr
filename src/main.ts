import { createApp } from "vue";
import Index from "./pages/Index.vue";
import "tailwindcss/tailwind.css";
import { createRouter, createWebHashHistory } from "vue-router";

const Home = { template: "<Index />" };

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(Index).use(router).mount("#app");
