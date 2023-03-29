import http from 'node:http'
import { nanoid } from 'nanoid'
import consola from 'consola'

import {
    ok,
    get,
    options,
    createCors,
    createRateLimit,
    createRouter,
} from '@dashdot/router'
import RequestContext from './RequestContext'
import createGraphqlRoutes from './createGraphqlRoutes'
import createAuthRoutes from './createAuthRoutes'

const sendOk = (req, res) => ok(res)

export default function createServer(app) {
    const rootCors = createCors({
        origin: app.config.app.urlAdmin, // TODO we need to make this dynamic
        allowMethods: ['GET'],
        extendAllowHeaders: ['Accept-Language', 'sentry-trace'],
    })
    const rateLimit = createRateLimit({
        window: 1000, // 1 sec
        limit: 25, // 25 requests
        headers: true,
        onLimitReached: (req, key) => {
            consola.info(`Rate limit reached for: ${key}`)
        },
    })
    const contextMiddleware = (handler) => (req, res) => {
        RequestContext.run((store) => {
            const requestId = nanoid()
            req.id = requestId
            store.set('request', req)
            store.set('response', res)
            store.set('logger', consola.withTag(requestId))
            handler(req, res)
        })
    }
    return http.createServer(
        rateLimit(
            contextMiddleware(
                createRouter(
                    options('/', rootCors(sendOk)),
                    get('/', rootCors(sendOk)),
                    ...createGraphqlRoutes(app),
                    ...createAuthRoutes(app)
                )
            )
        )
    )
}
