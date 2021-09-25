// Import the fonts.
import "typeface-source-code-pro";
import "typeface-source-sans-pro";
import "typeface-muli";
// Tailwind
import "tailwindcss/tailwind.css";
// Vue & Vue Router
import { createApp } from "vue";
import App from "./App.vue";
import Index from "./pages/Index.vue";
import NotFound from "./pages/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Index },
  { path: "/:catchAll(.*)", component: NotFound },
];

// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobeEurope, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

// Import only the icons we need from Font-Awesome
config.autoAddCss = false;
library.add(faFacebookF, faGithub, faTwitter, faYoutube, faGlobeEurope, faExternalLinkAlt);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).component("FontAwesome", FontAwesomeIcon).mount("#app");
