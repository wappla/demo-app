import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import runRawQuery from './runRawQuery'

export default async function createInitialSchema(schemaFileName, rawConfig) {
    const currentDir = path.dirname(fileURLToPath(import.meta.url))
    const fileBuffer = await readFile(`${currentDir}/${schemaFileName}`)
    const script = fileBuffer.toString('utf-8')
    await runRawQuery(script, rawConfig)
}
