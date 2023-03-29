import consola from 'consola'
import Joi from 'joi'
import { json } from '@dashdot/router'
import { parseBody } from '../../utils/server'
import App from '../../app/App'

export const accountSchema = Joi.object({
    id: Joi.string(),
    userId: Joi.number().integer(),
    type: Joi.string(),
    provider: Joi.string(),
    providerAccountId: Joi.string(),
    refresh_token: Joi.string(),
    access_token: Joi.string(),
    expires_at: Joi.number().integer(),
    ext_expires_in: Joi.number().integer(),
    token_type: Joi.string(),
    scope: Joi.string(),
    id_token: Joi.string(),
    session_state: Joi.string(),
    oauth_token_secret: Joi.string(),
    oauth_token: Joi.string(),
})

export default async function createAccountHandler(req, res) {
    consola.log('Creating account...')
    const input = await parseBody(req, res, (body) =>
        accountSchema.validateAsync(body.account)
    )
    if (!input) {
        return
    }
    consola.log(input)
    const app = App.getInstance()
    const account = await app.drivers.auth.createAccount(input)
    return json(res, { account })
}
