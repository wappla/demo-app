import consola from 'consola'
import sql from 'mssql'

export default async function runRawQuery(
    query,
    { host, port, username, password, database, useRoot = false }
) {
    const sqlConfig = {
        user: username,
        password,
        database,
        server: host,
        port: parseInt(port, 10),
        pool: {
            max: 10,
            min: 0,
        },
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
        requestTimeout: 30000,
    }
    if (useRoot) {
        sqlConfig.database = 'Master'
    }
    await sql.connect(sqlConfig)
    const request = new sql.Request()
    try {
        await request.query(query)
    } catch (e) {
        if (e.precedingErrors) {
            e.precedingErrors.forEach((error) => {
                consola.error(error.message)
            })
        }
        throw e
    }
    await sql.close(sqlConfig)
}
