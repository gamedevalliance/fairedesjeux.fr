import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import AutoImport from "astro-auto-import"
import { defineConfig } from "astro/config"
import { remarkFixRelativeAssetLinks } from "./scripts/remark-relative-assets"
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
					"./src/components/content/YouTube.astro": [["default", "YouTube"]],
					"./src/components/Image.astro": [["default", "Image"]],
				},
			],
		}),
		mdx(),
	],
	markdown: {
		shikiConfig: {
			langs: [renpyLang],
		},
		extendDefaultPlugins: true,
		remarkPlugins: [remarkFixRelativeAssetLinks()],
	},
})
