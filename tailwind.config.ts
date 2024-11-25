import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			light: {
				white: '#dee2e6',
  				lightest: '#adb5bd',
  				light: '#6c757d',
  				medium: '#495057',
  				dark: '#343a40',
  				darkest: '#212529',
				black: '#211d19'
  			},
  			dark: {
				white: '#dee2e6',
  				lightest: '#212529',
  				light: '#343a40',
  				medium: '#495057',
  				dark: '#6c757d',
  				darkest: '#adb5bd',
				black: '#211d19'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
};

export default config;
