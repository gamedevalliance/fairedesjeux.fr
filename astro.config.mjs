import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import AutoImport from "astro-auto-import"
import { defineConfig } from "astro/config"
import renpyLang from "./scripts/renpyLang.mjs"

// https://astro.build/config
export default defineConfig({
	site: "https://fairedesjeux.fr",
	integrations: [
		tailwind(),
		AutoImport({
			imports: [
				{
					"./src/components/content/Bulle.astro": [["default", "Bulle"]],
					"./src/components/content/Callout.astro": [["default", "Callout"]],
					"./src/components/content/Video.astro": [["default", "Video"]],
				},
			],
		}),
		mdx(),
	],
	markdown: {
		shikiConfig: {
			langs: [renpyLang],
		},
	},
})
