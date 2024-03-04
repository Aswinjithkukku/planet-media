import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				"2xl": "128px",
			},
		},
		extend: {
			colors: {
				primaryColor: "#842A3A",
				secondaryColor: "#FDF2DB",
				overlayColor: "#210006",
			},
			fontFamily: {
				primaryserif: ["var(--font-dm-serif-display)"],
				secondarycode: ["var(--font-source-code-pro)"],
			},
		},
	},
	plugins: [],
};
export default config;
