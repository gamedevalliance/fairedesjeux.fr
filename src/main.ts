// Import the fonts.
import "typeface-source-code-pro";
import "typeface-source-sans-pro";
import "typeface-muli";
// Tailwind
import "tailwindcss/tailwind.css";
// Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobeEurope, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Import only the icons we need from Font-Awesome
config.autoAddCss = false;
library.add(faFacebookF, faGithub, faTwitter, faYoutube, faGlobeEurope, faExternalLinkAlt);
/**
 * Vue & Vue Router
 */
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// All FaireDesJeux's pages
import App from "./App.vue";
import Contributeurs from "./pages/Contributeurs.vue";
import Index from "./pages/Index.vue";
import Informations from "./pages/Informations.vue";
import NotFound from "./pages/NotFound.vue";
// Router's routes
const routes = [
  { path: "/", component: Index },
  { path: "/contributeurs", component: Contributeurs },
  { path: "/informations", component: Informations },
  { path: "/:catchAll(.*)", component: NotFound },
];
// Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).component("FontAwesome", FontAwesomeIcon).mount("#app");
