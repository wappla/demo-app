import { json, badRequest } from '@dashdot/router'
import App from '../../app/App'
import { parseBody } from '../../utils/server'
import { sessionSchema } from './createSessionHandler'

export default async function updateSessionHandler(req, res) {
    consola.log('Updating session...')
    const input = await parseBody(req, res, (body) =>
        sessionSchema.validateAsync(body.session)
    )
    try {
        consola.log(input)
        const { sessionToken } = req.params
        const app = App.getInstance()
        const session = await app.drivers.auth.updateSession(
            sessionToken,
            input
        )
        return json(res, { session })
    } catch (e) {
        return badRequest(res, e.message)
    }
}
