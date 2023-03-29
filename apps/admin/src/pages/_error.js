import React from 'react'
import * as Sentry from '@sentry/nextjs'
import NextErrorComponent from 'next/error'

function CustomErrorComponent({ statusCode }) {
    return <NextErrorComponent statusCode={statusCode} />
}

CustomErrorComponent.getInitialProps = async (contextData) => {
    await Sentry.captureUnderscoreErrorException(contextData)
    return NextErrorComponent.getInitialProps(contextData)
}

export default CustomErrorComponent
