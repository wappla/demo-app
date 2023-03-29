import Joi from 'joi'
import { json } from '@dashdot/router'
import { parseBody } from '../../utils/server'
import App from '../../app/App'

export const sessionSchema = Joi.object({
    expires: Joi.string(),
    sessionToken: Joi.string(),
    userId: Joi.string(),
})

export default async function createSessionHandler(req, res) {
    consola.log('Creating session...')
    const input = await parseBody(req, res, (body) =>
        sessionSchema.validateAsync(body.session)
    )
    if (!input) {
        return
    }
    const app = App.getInstance()
    const session = await app.drivers.auth.createSession(input)
    return json(res, { session })
}
