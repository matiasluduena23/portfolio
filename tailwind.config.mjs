/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                clstrongGreen: '#41ea33',
                clGray: '#999892',
                clbackground: '#333',
            },
        },
    },
    plugins: [],
};
