import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { snakeCase } from 'change-case'
import { isRemoteEnv, keysToCamelCase } from '../utils/index'

export default function createKnexConfig(database) {
    const {
        POSTGRES_HOST,
        POSTGRES_PORT,
        POSTGRES_USERNAME,
        POSTGRES_PASSWORD,
        POSTGRES_DATABASE,
    } = process.env
    let ssl = false
    if (isRemoteEnv()) {
        ssl = { rejectUnauthorized: false }
    }
    const currentDir = path.dirname(fileURLToPath(import.meta.url))
    return {
        client: 'postgres',
        connection: {
            timezone: 'UTC',
            host: POSTGRES_HOST,
            port: POSTGRES_PORT,
            database: database || POSTGRES_DATABASE,
            user: POSTGRES_USERNAME,
            password: POSTGRES_PASSWORD,
            dateStrings: true,
            ssl,
        },
        pool: {
            min: 0,
            max: 10,
        },
        migrations: {
            tableName: 'migrations',
            directory: `${currentDir}/migrations`,
        },
        useNullAsDefault: true,
        wrapIdentifier: (identifier, wrap) => {
            if (identifier === '*') {
                return wrap(identifier)
            }
            return wrap(snakeCase(identifier))
        },
        postProcessResponse: (result) => {
            if (Array.isArray(result)) {
                return result.map((row) => keysToCamelCase(row))
            }
            return keysToCamelCase(result)
        },
    }
}
