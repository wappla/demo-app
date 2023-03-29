import dotenv from 'dotenv'
import consola from 'consola'

import createServer from './src/server/createServer'
import { onProcessExit } from './src/utils/index'
import App from './src/app/App'
import { setupSentry, captureException } from './src/utils/errors'

try {
    consola.info('Starting app...')
    dotenv.config()
    setupSentry()
    const app = App.getInstance()
    await app.init()
    consola.success('App started.')
    consola.info('Starting server...')
    const server = createServer(app)
    const { PORT = 3000, HOST = '0.0.0.0' } = process.env
    server.listen(PORT, HOST, () => {
        consola.success(
            `Server started and listening on http://${HOST}:${PORT}`
        )
    })
    server.on('error', (error) => {
        consola.error(`Failed to start server. ${error.message}`)
    })
    onProcessExit(({ exit }) => {
        consola.info('Stopping app...')
        // app.destroy() TODO
        consola.success('App stopped.')
        if (exit) {
            process.exit()
        }
    })
} catch (e) {
    consola.error('Failed to start server.')
    captureException(e)
    process.exit()
}
