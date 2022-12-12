/** @type {import("@types/prettier").Options} */
module.exports = {
	printWidth: 100,
	tabWidth: 2,
	trailingComma: "es5",
	semi: false,
	plugins: ["./node_modules/prettier-plugin-astro", require("prettier-plugin-tailwindcss")],
	astroAllowShorthand: false,
	tailwindConfig: "./tailwind.config.cjs",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
}
