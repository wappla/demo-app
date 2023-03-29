import App from '../../app/App'
import { ok, badRequest } from '@dashdot/router'

export default async function deleteAccountHandler(req, res) {
    consola.log('Deleting account...')
    try {
        const app = App.getInstance()
        const { providerAccountId, provider } = req.params
        await app.drivers.auth.deleteAccount(providerAccountId, provider)
        return ok(res)
    } catch (e) {
        return badRequest(res)
    }
}
