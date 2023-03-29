/* eslint-disable import/no-cycle */
import createKnexConnection from 'knex'
import createKnexConfig from './createKnexConfig'
import extendKnexQueryBuilder from './extendKnexQueryBuilder'

extendKnexQueryBuilder()

let cache = null
export function getKnexConnection(databaseName = process.env.DB_APP_DATABASE) {
    if (cache === null) {
        const {
            DB_APP_CLIENT,
            DB_APP_HOST,
            DB_APP_PORT,
            DB_APP_USERNAME,
            DB_APP_PASSWORD,
        } = process.env
        const config = createKnexConfig({
            client: DB_APP_CLIENT,
            host: DB_APP_HOST,
            port: DB_APP_PORT,
            username: DB_APP_USERNAME,
            password: DB_APP_PASSWORD,
            database: databaseName,
        })
        cache = createKnexConnection(config)
        cache.CLIENT = DB_APP_CLIENT
        cache.HOST = DB_APP_HOST
        cache.PORT = DB_APP_PORT
        cache.DATABASE = databaseName
        cache.USERNAME = DB_APP_USERNAME
        cache.PASSWORD = DB_APP_PASSWORD
    }
    return cache
}

export async function destroyKnexConnection() {
    if (cache !== null) {
        await cache.destroy()
        cache = null
    }
}
