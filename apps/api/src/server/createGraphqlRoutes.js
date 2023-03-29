import { ok, options, post, createCors } from '@dashdot/router'
import {
    createGraphqlRequestHandler,
    GraphqlQueryStore,
} from '@dashdot/graphql-server'
import createSchema from '../graphql/createSchema'
import createRequestContext from '../graphql/createRequestContext'
import { createRequestTracingMiddleware } from '../utils/errors'

const sendOk = (req, res) => ok(res)

export default function createGraphqlRoutes(app) {
    const graphqlCors = createCors({
        origin: app.config.app.urlAdmin,
        allowMethods: ['POST'],
        extendAllowHeaders: [
            'Accept-Language',
            'organization-id',
            'sentry-trace',
        ],
    })
    const tracing = createRequestTracingMiddleware('query')
    const defaultMiddleware = (handler) => graphqlCors(tracing(handler))
    const schema = createSchema()
    const queryStore = new GraphqlQueryStore(schema)
    const graphqlHandler = createGraphqlRequestHandler(
        queryStore,
        createRequestContext(app)
    )
    return [
        options('/graphql', defaultMiddleware(sendOk)),
        post('/graphql', defaultMiddleware(graphqlHandler)),
    ]
}
