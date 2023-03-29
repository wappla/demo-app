import { readJson, json, badRequest, BAD_REQUEST } from '@dashdot/router'

export async function parseBody(req, res, validate) {
    try {
        const body = await readJson(req)
        const input = await validate(body)
        return input
    } catch (e) {
        if (e.details) {
            json(res, e.details, BAD_REQUEST)
            return null
        }
        badRequest(res)
        return null
    }
}
