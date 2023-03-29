import { json, badRequest } from '@dashdot/router'
import App from '../../app/App'
import { parseBody } from '../../utils/server'
import { userSchema } from './createUserHandler'
import { requestValidation } from './getUserHandler'

export default async function updateUserHandler(req, res) {
    consola.log('Updating user...')

    try {
        await requestValidation.validateAsync(req.params)
    } catch (e) {
        return
    }
    const input = await parseBody(req, res, (body) =>
        userSchema.validateAsync(body.user)
    )
    if (!input) {
        return
    }
    try {
        const app = App.getInstance()
        const updatedUser = await app.drivers.auth.updateUser(
            req.params.id,
            input
        )
        return json(res, { user: updatedUser })
    } catch (e) {
        return badRequest(res, e.message)
    }
}
