module.exports = {
    extends: [
        '@dashdot/eslint-config-react',
        'next',
        'prettier',
        'next/core-web-vitals',
    ],
    plugins: ['simple-import-sort', 'prettier'],
    settings: {
        next: {
            rootDir: ['apps/*/', 'packages/*/'],
        },
    },
}
