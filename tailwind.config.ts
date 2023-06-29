import type { Config } from "tailwindcss"
const colors = require("tailwindcss/colors")

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			gray: colors.gray,
			indigo: colors.indigo,
			red: colors.rose,
			green: colors.emerald,
			purple: colors.violet,
			yellow: colors.amber,
			blue: colors.blue,
			pink: colors.pink,
			orange: colors.orange,
			teal: colors.teal,
			cyan: colors.cyan,
			lime: colors.lime,
			emerald: colors.emerald,
			violet: colors.violet,
			fuchsia: colors.fuchsia,
			rose: colors.rose,
			amber: colors.amber,
			sky: colors.sky,
			konytool: {
				DEFAULT: "#1675F2",
				d: "#0442BF",
				m: "#4B94F2",
				l: "#85B4F2",
				ul: "#D5E7F2"
			}
		},
		extend: {
			height: {
				100: "calc(100vh - 4rem)"
			}
		}
	},
	plugins: []
} satisfies Config
