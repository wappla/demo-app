import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotEnv from 'dotenv'

const ENV_FILE_LOCAL = '.env'

const TEST_ENV_FILES = [ENV_FILE_LOCAL]

export const chooseSafeEnvironment = {
    type: 'list',
    name: 'environment',
    message: 'Environment File:',
    choices: TEST_ENV_FILES,
}

export function setEnvironment(fileUrl, environment) {
    const currentDir = path.dirname(fileURLToPath(fileUrl))
    const envPath = path.resolve(currentDir, '../..', environment)
    dotEnv.config({ path: envPath })
}
