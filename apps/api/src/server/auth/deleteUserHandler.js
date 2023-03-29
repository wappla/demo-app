import { ok, badRequest } from '@dashdot/router'
import App from '../../app/App'
import { requestValidation } from './getUserHandler'

export default async function deleteUserHandler(req, res) {
    consola.log('Deleting user...')

    try {
        await requestValidation.validateAsync(req.params)
    } catch (e) {
        return
    }
    try {
        const app = App.getInstance()
        await app.drivers.auth.deleteUser(req.params.id)
        return ok(res)
    } catch (e) {
        return badRequest(res)
    }
}
