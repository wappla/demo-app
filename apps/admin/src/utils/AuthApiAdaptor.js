export default function AuthApiAdaptor() {
    const url = process.env.AUTH_API_URL
    const headers = {
        authorization: `Bearer ${process.env.AUTH_API_TOKEN}`,
    }
    const post = async (path, body) => {
        const options = {
            headers,
            method: 'POST',
            body: JSON.stringify(body),
        }
        const response = await fetch(`${url}${path}`, options)
        const responseBody = await response.json()
        return responseBody
    }
    const get = async (path) => {
        const options = {
            headers,
        }
        const response = await fetch(`${url}${path}`, options)
        const responseBody = await response.json()
        return responseBody
    }
    const del = async (path) => {
        const options = {
            headers,
            method: 'DELETE',
        }
        const response = await fetch(`${url}${path}`, options)
        const responseBody = await response.json()
        return responseBody
    }
    const put = async (path, body) => {
        const options = {
            headers,
            method: 'PUT',
            body: JSON.stringify(body),
        }
        const response = await fetch(`${url}${path}`, options)
        const responseBody = await response.json()
        return responseBody
    }
    return {
        async createUser(user) {
            const body = { user }
            const data = await post('/users', body)
            return data.user
        },
        async getUser(id) {
            const { user } = await get(`/users/${id}`)
            return user
        },
        async getUserByEmail(email) {
            const { user } = await get(`/users/email/${email}`)
            return user
        },
        async getUserByAccount({ providerAccountId, provider }) {
            const { user } = await get(
                `/users/account/${providerAccountId}/${provider}`
            )
            return user
        },
        async updateUser(user) {
            const { id, ...input } = user
            const body = { user: input }
            const data = await put(`/users/${id}`, body)
            return data.user
        },
        async deleteUser(userId) {
            await del(`/users/${userId}`)
            return userId
        },
        async linkAccount(account) {
            const body = { account }
            const data = await post('/accounts', body)
            return data.account
        },
        async unlinkAccount({ providerAccountId, provider }) {
            await del(`/accounts/${providerAccountId}`)
            return providerAccountId
        },
        async createSession({ sessionToken, userId, expires }) {
            const input = { sessionToken, userId, expires }
            const { session } = await post('/sessions', { session: input })
            const modifiedSession = {
                ...session,
                expires: new Date(session.expires),
            }
            return modifiedSession
        },
        async getSessionAndUser(sessionToken) {
            const { session, user } = await get(`/sessions/${sessionToken}`)
            if (session === null || user === null) {
                return null
            }
            const modifiedSession = {
                ...session,
                expires: new Date(session.expires),
            }
            return { session: modifiedSession, user }
        },
        async updateSession(session) {
            const { sessionToken, ...input } = session
            const body = { session: input }
            const data = await put(`/sessions/${sessionToken}`, body)
            return data.session
        },
        async deleteSession(sessionToken) {
            await del(`/sessions/${sessionToken}`)
            return sessionToken
        },
        async createVerificationToken({ identifier, expires, token }) {
            return
        },
        async useVerificationToken({ identifier, token }) {
            return
        },
    }
}
