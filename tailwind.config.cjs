/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                paleBlue: 'hsl(225, 100%, 94%)',
                brightBlue: 'hsl(245, 75%, 52%)',
                veryPaleBlue: 'hsl(225, 100%, 98%)',
                desaturatedBlue: 'hsl(224, 23%, 55%)',
                darkBlue: 'hsl(223, 47%, 23%)',
            },
            fontFamily: {
                redhat: ['Red Hat Display', 'sans-serif'],
            },
        },
    },
    plugins: [],
};