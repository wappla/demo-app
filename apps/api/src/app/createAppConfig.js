export default function createAppConfig() {
    const {
        APP_NAME = 'BNut',
        APP_URL_ADMIN = 'http://localhost:3001',
        APP_URL_CUSTOMER = 'http://localhost:3002',
        AUTH_DRIVER = 'memory',
        AUTH_SECRET = 'secret',
        AUTH_API_TOKEN = 'secret',
        MSSQL_HOST = 'localhost',
        MSSQL_PORT = '5432',
        MSSQL_DATABASE = 'connections',
        MSSQL_USERNAME = 'dev',
        MSSQL_PASSWORD = 'secret',
        MSSQL_ADMIN_DATABASE = 'postgres',
        MSSQL_ADMIN_USERNAME = 'dev',
        MSSQL_ADMIN_PASSWORD = 'secret',
        REDIS_HOST = 'localhost',
        REDIS_PORT = '6379',
        REDIS_DATABASE = 0,
        REDIS_PASSWORD = '',
        MAIL_DRIVER = 'mock',
        MAIL_FROM_ADDRESS = 'info@bnut.be',
        MAIL_REPLY_TO = MAIL_FROM_ADDRESS,
        STORAGE_DRIVER = 'mock',
    } = process.env
    return {
        app: {
            name: APP_NAME,
            urlAdmin: APP_URL_ADMIN,
            urlCustomer: APP_URL_CUSTOMER,
        },
        auth: {
            driver: AUTH_DRIVER,
            secret: AUTH_SECRET,
            apiToken: AUTH_API_TOKEN,
        },
        mssql: {
            host: MSSQL_HOST,
            port: MSSQL_PORT,
            database: MSSQL_DATABASE,
            username: MSSQL_USERNAME,
            password: MSSQL_PASSWORD,
            adminDatabase: MSSQL_ADMIN_DATABASE,
            adminUsername: MSSQL_ADMIN_USERNAME,
            adminPassword: MSSQL_ADMIN_PASSWORD,
        },
        redis: {
            host: REDIS_HOST,
            port: REDIS_PORT,
            database: REDIS_DATABASE,
            password: REDIS_PASSWORD,
        },
        email: {
            driver: MAIL_DRIVER,
            from: MAIL_FROM_ADDRESS,
            replyTo: MAIL_REPLY_TO,
        },
        storage: {
            driver: STORAGE_DRIVER,
        },
    }
}
