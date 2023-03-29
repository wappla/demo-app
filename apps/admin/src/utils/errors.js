/* eslint-disable import/prefer-default-export */
import * as Sentry from '@sentry/nextjs'

export const scopeSentryUser = ({ email }) => {
    Sentry.setUser({ email })
}
