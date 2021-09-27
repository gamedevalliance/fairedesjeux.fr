import "tailwindcss/tailwind.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

import App from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobeEurope, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faFacebookF, faGithub, faTwitter, faYoutube, faGlobeEurope, faExternalLinkAlt);

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).component("FontAwesome", FontAwesomeIcon).mount("#app");
