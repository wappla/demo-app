const { withSentryConfig } = require('@sentry/nextjs')

const sentryWebpackPluginOptions = {
    silent: true,
}

module.exports = {
    transpilePackages: [
        '@demo/utils',
        '@demo/constants',
        '@demo/components',
        '@demo/locales',
    ],
    eslint: {
        ignoreDuringBuilds: true,
    },
    // sentry: {
    //     hideSourceMaps: false,
    // },
    async rewrites() {
        return [
            {
                source: '/api/auth/:any*',
                destination: '/api/auth/:any*',
            },
            {
                source: '/:any*',
                destination: '/',
            },
        ]
    },
}
