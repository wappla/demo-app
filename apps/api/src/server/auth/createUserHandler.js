import Joi from 'joi'
import { json } from '@dashdot/router'
import { parseBody } from '../../utils/server'
import App from '../../app/App'

export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    emailVerified: Joi.number().integer().allow(null),
    name: Joi.string(),
    image: Joi.string(),
})

export default async function createUserHandler(req, res) {
    consola.log('Creating user...')
    const input = await parseBody(req, res, (body) =>
        userSchema.validateAsync(body.user)
    )
    if (!input) {
        return
    }
    consola.log(input)
    const app = App.getInstance()
    const user = await app.drivers.auth.createUser(input)
    return json(res, { user })
}
