import runRawQuery from './runRawQuery'
import createInitialSchema from './createInitialSchema'

export default async function resetDatabaseSchema(
    databaseName,
    schemaFileName,
    rawConfig
) {
    await runRawQuery(`DROP DATABASE IF EXISTS "${databaseName}";`, {
        useRoot: true,
        ...rawConfig,
    })
    await runRawQuery(`CREATE DATABASE "${databaseName}";`, {
        useRoot: true,
        ...rawConfig,
    })
    if (schemaFileName) {
        await createInitialSchema(schemaFileName, rawConfig)
        // await knex.migrate.latest()
    }
}

export async function resetAppDatabaseSchema(
    databaseName = process.env.DB_APP_DATABASE
) {
    const { DB_APP_HOST, DB_APP_PORT, DB_APP_USERNAME, DB_APP_PASSWORD } =
        process.env
    const rawConfig = {
        host: DB_APP_HOST,
        port: DB_APP_PORT,
        username: DB_APP_USERNAME,
        password: DB_APP_PASSWORD,
        database: databaseName,
    }
    await resetDatabaseSchema(databaseName, 'initialAppSchema.sql', rawConfig)
}
