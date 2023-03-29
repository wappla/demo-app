import consola from 'consola'
import { serialize } from 'cookie'
import got from 'got'
import testListen from 'test-listen'
import { GraphQLClient } from 'graphql-request'
import App from '../app/App'
import createServer from '../server/createServer'
import runRawQuery from '../database/runRawQuery'
import { getKnexConnection } from '../database/connections'
import createInitialSchema from '../database/createInitialSchema'

export function createTestClient(server, options = {}) {
    const { auth = false } = options
    const headers = {}
    if (auth) {
        const accessToken = process.env.AUTH_API_TOKEN
        headers.authorization = `Bearer ${accessToken}`
    }
    const extension = {
        prefixUrl: server.uri,
        headers,
    }
    const client = got.extend(extension)
    return client
}

export async function createTestGraphqlClient(server, options = {}) {
    const { user = null, locale = null } = options
    const headers = {}
    if (user !== null) {
        const { auth } = App.getInstance().drivers
        const payload = {
            name: user.name,
            email: user.email,
            sub: user.id,
        }
        const accessToken = await auth.encodeJwtToken(payload)
        headers.cookie = serialize('next-auth.session-token', accessToken)
    }
    if (locale !== null) {
        headers['Accept-Language'] = locale
    }
    return new GraphQLClient(`${server.uri}/graphql`, { headers })
}

export async function createTestServer(app = App.getInstance()) {
    try {
        await app.init()
        const server = createServer(app)
        const uri = await testListen(server)
        server.uri = uri
        return server
    } catch (e) {
        consola.error(`Failed to create test server. ${e.message}`)
        consola.error(e)
        return {
            uri: null,
            close: () => {},
        }
    }
}

export async function createTestDatabase(name, options = {}) {
    try {
        const { createSchema = true, schemaFileName, knex } = options
        const rawConfig = {
            host: knex.HOST,
            port: knex.PORT,
            username: knex.USERNAME,
            password: knex.PASSWORD,
            database: knex.DATABASE,
        }
        await runRawQuery(`DROP DATABASE IF EXISTS "${name}";`, {
            useRoot: true,
            ...rawConfig,
        })
        await runRawQuery(`CREATE DATABASE "${name}";`, {
            useRoot: true,
            ...rawConfig,
        })
        if (createSchema) {
            await createInitialSchema(schemaFileName, rawConfig)
            // await knex.migrate.latest()
        }
        return knex
    } catch (error) {
        consola.log(error)
        return null
    }
}

export function createTestDatabaseApp(name, options = {}) {
    return createTestDatabase(name, {
        schemaFileName: 'initialAppSchema.sql',
        knex: getKnexConnection(name),
        ...options,
    })
}

export async function destroyTestDatabase(knex = null) {
    if (knex === null) {
        return
    }
    try {
        await knex.destroy()
        const databaseName = knex.DATABASE
        const destroyDatabaseQuery = `DROP DATABASE IF EXISTS "${databaseName}";`
        const rawConfig = {
            host: knex.HOST,
            port: knex.PORT,
            username: knex.USERNAME,
            password: knex.PASSWORD,
            useRoot: true,
        }
        await runRawQuery(destroyDatabaseQuery, rawConfig)
    } catch (error) {
        consola.log(error)
    }
}
