import App from '../../app/App'
import { json, badRequest } from '@dashdot/router'

export default async function getSessionHandler(req, res) {
    consola.log('Get session...')
    const app = App.getInstance()
    const result = await app.drivers.auth.getSessionAndUser(
        req.params.sessionToken
    )
    if (!result) {
        return json(res, { session: null, user: null })
    }
    const { session, user } = result
    return json(res, { session, user })
}
