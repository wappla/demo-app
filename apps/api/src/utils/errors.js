/* eslint-disable max-classes-per-file */
import consola from 'consola'
import {
    GraphqlError as DashdotGraphqlError,
    GraphqlValidationError as DashdotGraphqlValidationError,
    GraphqlUnauthorizedError as DashdotGraphqlUnauthorizedError,
} from '@dashdot/graphql-server'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing' // we need to import this
import { isRemoteEnv } from './index'
import RequestContext from '../server/RequestContext'

export const captureException = (e, context) => {
    let logger = consola
    if (RequestContext.has('logger')) {
        logger = RequestContext.get('logger')
    }
    logger.error(e)
    if (isRemoteEnv()) {
        Sentry.captureException(e, context)
    }
}

export class GraphqlError extends DashdotGraphqlError {
    constructor(message, originalError) {
        super(message)
        this.originalError = originalError
    }
}

export class GraphqlValidationError extends DashdotGraphqlValidationError {
    constructor(message, originalError) {
        super(message)
        this.originalError = originalError
    }
}

export class GraphqlUnauthorizedError extends DashdotGraphqlUnauthorizedError {
    constructor(message, originalError) {
        super(message)
        this.originalError = originalError
    }
}

export const setupSentry = () => {
    if (isRemoteEnv()) {
        const dsn = process.env.SENTRY_DSN
        const environment = process.env.NODE_ENV
        Sentry.init({
            dsn,
            environment,
            tracesSampleRate: 1, // 100% of all transactions will be captured
        })
    }
}

export const createRequestTracingMiddleware =
    (name, op = 'request') =>
    (handler) =>
    (req, res) => {
        const traceHeader = req.headers['sentry-trace']
        let clientTrace = {}
        if (traceHeader) {
            clientTrace = Tracing.extractTraceparentData(traceHeader)
        }
        const transaction = Sentry.startTransaction({
            name,
            op,
            ...clientTrace,
        })
        res.on('finish', () => {
            transaction.finish()
        })
        req.transaction = transaction
        return handler(req, res)
    }

export const tracingGraphqlMiddleware = async (
    resolve,
    root,
    args,
    context,
    info
) => {
    if (
        !context.transaction ||
        typeof info.path.prev !== 'undefined' // Only log root fields
    ) {
        return resolve(root, args, context, info)
    }
    const span = context.transaction.startChild({
        op: 'resolver',
        description: `${info.parentType.name}.${info.fieldName}`,
    })
    const result = await resolve(root, args, context, info)
    span.finish()
    return result
}

const onGraphqlError = (e, context) => {
    const { user, transaction } = context
    const scope = new Sentry.Scope()
    if (user) {
        const { id, email, type, firstName, lastName } = user
        scope.setUser({
            id,
            email,
            type,
            firstName,
            lastName,
        })
    }
    if (transaction) {
        scope.setTransactionName(transaction.name)
        scope.setSpan(transaction)
    }
    if (!(e instanceof GraphqlValidationError)) {
        captureException(e.originalError || e, () => scope)
    }
}

export const captureExceptionMiddleware = async (
    resolve,
    root,
    args,
    context,
    info
) => {
    try {
        const result = await resolve(root, args, context, info)
        if (result instanceof Error) {
            onGraphqlError(result, context)
        }
        return result
    } catch (e) {
        if (e instanceof Error) {
            onGraphqlError(e, context)
        }
        throw e
    }
}
