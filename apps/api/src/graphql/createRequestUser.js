import { decodeJwt } from 'jose'
import App from '../app/App'
import createPermissionsBasedOnGroupId from '../app/permissions/createPermissionsBasedOnGroupId'

export default async function createRequestUser(jwtToken) {
    if (!jwtToken) {
        return null
    }
    let userEmail = null
    try {
        const { auth } = App.getInstance().drivers
        const payload = await auth.verifyJwtToken(jwtToken)
        userEmail = payload.email
    } catch (e) {
        throw new Error('Failed to authorize. Unable to verify access token.')
    }
    const { auth } = App.getInstance().drivers
    const user = await auth.getUserByEmail(userEmail)
    if (user === null) {
        throw new Error(`User with email '${userEmail}' was not found.`)
    }
    const account = await auth.getAccountByUser(user.id)
    if (account) {
        const { groups } = await decodeJwt(account.idToken)
        user.groupsIds = groups
        user.permissions = createPermissionsBasedOnGroupId(user.groupsIds)
    }
    return user
}
