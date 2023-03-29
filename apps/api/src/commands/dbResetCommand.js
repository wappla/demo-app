import consola from 'consola'
import inquirer from 'inquirer'
import { chooseSafeEnvironment, setEnvironment } from './questions'
import { resetAppDatabaseSchema } from '../database/resetDatabaseSchema'

const { prompt } = inquirer

export default async function dbResetCommand(options) {
    try {
        const { environment } = await prompt([chooseSafeEnvironment], options)
        setEnvironment(import.meta.url, environment)
        consola.info('Resetting app database...')
        await resetAppDatabaseSchema()
        consola.success('Successfully reset database!')
    } catch (e) {
        consola.error(e)
    } finally {
        process.exit()
    }
}
