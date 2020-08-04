module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: "babel-eslint",
	},
	extends: [
		"@nuxtjs",
		"prettier",
		"prettier/vue",
		"plugin:prettier/recommended",
		"plugin:nuxt/recommended",
	],
	plugins: ["prettier"],
	rules: {
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"space-before-function-paren": ["error", "never"],
		indent: [1, "tab"],
	},
};
