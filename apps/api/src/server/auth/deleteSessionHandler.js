import App from '../../app/App'
import { ok, badRequest } from '@dashdot/router'

export default async function deleteSessionHandler(req, res) {
    consola.log('Deleting session...')
    try {
        const app = App.getInstance()
        await app.drivers.auth.deleteSession(req.params.sessionToken)
        return ok(res)
    } catch (e) {
        return badRequest(res)
    }
}
