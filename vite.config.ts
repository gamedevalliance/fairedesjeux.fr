import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Eslint from "vite-plugin-eslint";
import Markdown from "vite-plugin-md";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ["vue", "md"],
      pagesDir: [
        { dir: "content/courses", baseRoute: "" },
        { dir: "src/pages", baseRoute: "" },
      ],
      extendRoute(route) {
        // Since we use the files and directory names to denote chapter and pages orders and vite-plugin-pages use
        // the names of those as is for pathing, we need to remove the numbers from our routes manually to create prettier urls
        const routeFragments = route.path.split("/");
        route.path = routeFragments
          .map((fragment) => {
            return fragment.match(/^\d/) ? fragment.slice(3) : fragment;
          })
          .join("/");

        // const meta = Object.assign(route.meta || {}, { layout: "TestLayout" });

        return { ...route };
      },
    }),
    Markdown(),
    Layouts({
      defaultLayout: "BaseWrapperLayout",
    }),
  ],
});
