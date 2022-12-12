import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import renpyLang from "./scripts/renpyLang.mjs"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx()],
	markdown: {
		shikiConfig: {
			langs: [renpyLang],
		},
	},
})
