import { getParseTreeNode } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				clbackground: '#252525',
				cllightGray: '#6b6b6b',
				clstrongGreen: '#2EB94D',
			},
			fontFamily: {
				inter: ['Inter'],
				kaisei: ['Kaisei Decol'],
			},
		},
	},
	plugins: [],
};
