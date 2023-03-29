import * as Sentry from '@sentry/nextjs'

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN
const environment = process.env.NEXT_PUBLIC_APP_ENV

if (environment !== 'local' && environment !== 'test') {
    Sentry.init({
        dsn,
        environment,
        tracesSampleRate: 1, // TODO reduce this value
    })
}
