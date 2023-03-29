import Joi from 'joi'
import { json } from '@dashdot/router'
import App from '../../app/App'

export const requestValidation = Joi.object({
    id: Joi.number().integer().required(),
})

export default async function getUserHandler(req, res) {
    const app = App.getInstance()

    try {
        await requestValidation.validateAsync(req.params)
    } catch (e) {
        return
    }
    const user = await app.drivers.auth.getUser(req.params.id)
    return json(res, { user })
}
