import { ok, put, get, del, options, post, createCors } from '@dashdot/router'
import {
    createRequestTracingMiddleware,
    captureException,
} from '../utils/errors'
import App from '../app/App'
import createUserHandler from './auth/createUserHandler'
import getUserHandler from './auth/getUserHandler'
import getUserByEmailHandler from './auth/getUserByEmailHandler'
import getUserByAccountHandler from './auth/getUserByAccountHandler'
import updateUserHandler from './auth/updateUserHandler'
import deleteUserHandler from './auth/deleteUserHandler'
import createAccountHandler from './auth/createAccountHandler'
import deleteAccountHandler from './auth/deleteAccountHandler'
import createSessionHandler from './auth/createSessionHandler'
import getSessionHandler from './auth/getSessionHandler'
import updateSessionHandler from './auth/updateSessionHandler'
import deleteSessionHandler from './auth/deleteSessionHandler'

const sendUnauthorized = (res) => {
    const message = 'unauthorized'
    res.writeHead(401)
    res.end(message)
    return null
}

export default function createAuthRoutes(app) {
    const corsMiddleware = createCors({
        origin: app.config.app.urlAdmin, // TODO needs to come from env vars
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
        extendAllowHeaders: ['Accept-Language', 'sentry-trace'],
    })
    const tracingMiddleware = createRequestTracingMiddleware('auth')

    const authMiddleware = (handler) => async (req, res) => {
        const bearer = req.headers.authorization || null
        if (typeof bearer !== 'string') {
            sendUnauthorized(res)
            return null
        }
        const { auth } = App.getInstance().drivers
        try {
            const apiToken = bearer.replace('Bearer ', '')
            await auth.verifyApiToken(apiToken)
            return handler(req, res)
        } catch (e) {
            return sendUnauthorized(res)
        }
    }

    const errorMiddleware = (handler) => async (req, res) => {
        try {
            await handler(req, res)
        } catch (e) {
            captureException(e)
            res.writeHead(500)
            res.end('internal server error')
            res.end()
        }
    }

    const defaultMiddleware = (handler) =>
        corsMiddleware(
            authMiddleware(tracingMiddleware(errorMiddleware(handler)))
        )
    return [
        options(
            '/users',
            defaultMiddleware((req, res) => ok(res))
        ),
        post('/users', defaultMiddleware(createUserHandler)),
        get('/users/email/:email', defaultMiddleware(getUserByEmailHandler)),
        get(
            '/users/account/:providerAccountId/:provider',
            defaultMiddleware(getUserByAccountHandler)
        ),
        get('/users/:id', defaultMiddleware(getUserHandler)),
        put('/users/:id', defaultMiddleware(updateUserHandler)),
        del('/users/:id', defaultMiddleware(deleteUserHandler)),
        post('/accounts', defaultMiddleware(createAccountHandler)),
        del(
            '/accounts/:providerAccountId/:provider',
            defaultMiddleware(deleteAccountHandler)
        ),
        post('/sessions', defaultMiddleware(createSessionHandler)),
        get('/sessions/:sessionToken', defaultMiddleware(getSessionHandler)),
        put('/sessions/:sessionToken', defaultMiddleware(updateSessionHandler)),
        del('/sessions/:sessionToken', defaultMiddleware(deleteSessionHandler)),
        // post('/verification-tokens', defaultMiddleware(deleteUserHandler)),
        // get('/verification-tokens/:identifier', defaultMiddleware(deleteUserHandler)),
    ]
}
