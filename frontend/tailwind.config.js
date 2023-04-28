/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,jsx}'];
export const theme = {
    extend: {
        gridTemplateColumns: {
            footer: '200px auto 200px'
        }
    },
    fontFamily: {
        basic: ['RobotoSlab']
    }
};
export const plugins = [];
