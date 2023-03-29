/* eslint-disable global-require */
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        '../../packages/components/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: '\'Inter\', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
            fontSize: {
                '2xs': ['0.625rem', '0.75rem'],
            },
            colors: {
                primary: {
                    ...colors.sky,
                    DEFAULT: colors.sky['500'],
                },
                gray: {
                    ...colors.slate,
                    border: colors.sky['200'],
                },
            },
            zIndex: {
                '-1': '-1',
                0: 0,
                1: 1,
                header: 2,
                modals: 3,
                popovers: 4,
                tooltips: 5,
                notifications: 6,
                auto: 'auto',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
