import App from '../../app/App'
import { json } from '@dashdot/router'

export default async function getUserByEmailHandler(req, res) {
    const app = App.getInstance()
    const user = await app.drivers.auth.getUserByEmail(req.params.email)
    return json(res, { user })
}
