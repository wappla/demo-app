import App from '../../app/App'
import { json } from '@dashdot/router'

export default async function getUserByAccountHandler(req, res) {
    const app = App.getInstance()
    const { providerAccountId, provider } = req.params
    const user = await app.drivers.auth.getUserByAccount(
        providerAccountId,
        provider
    )
    return json(res, { user })
}
