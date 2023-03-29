/* eslint-disable no-return-await */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import NextAuthDriver from './NextAuthDriver'
import * as tables from '../../database/tables'

export default class KnexAuthDriver extends NextAuthDriver {
    static NAME = 'knex'

    async createUser({
        email,
        name,
        emailVerified, // TBD
    }) {
        const data = { email, name }
        const [newUser] = await tables.authUsers().insert(data).returning('*')
        return newUser
    }

    async getUser(id) {
        const exists = await tables
            .authUsers()
            .where({ id: parseInt(id, 10) })
            .first()
        if (!exists) {
            return null
        }
        return exists
    }

    async getUserByEmail(email) {
        const user = await tables.authUsers().where({ email }).first()
        return user || null
    }

    async getUserByAccount(providerAccountId, provider) {
        const account = await tables
            .authAccounts()
            .where({ providerAccountId, provider })
            .first()
        if (!account) {
            return null
        }
        return await tables.authUsers().where({ id: account.userId }).first()
    }

    async updateUser(id, user) {
        const exists = await tables
            .authUsers()
            .where({ id: parseInt(id, 10) })
            .first()
        if (!exists) {
            throw new Error('User not found')
        }
        const updatedUser = await tables
            .authUsers()
            .update({
                email: user.email,
                name: user.name,
            })
            .where('id', parseInt(id, 10))
            .returning('*')
        return updatedUser[0]
    }

    async deleteUser(id) {
        const exists = await tables
            .authUsers()
            .where({ id: parseInt(id, 10) })
            .first()
        if (exists === null) {
            throw new Error('User not found')
        }
        await tables.authUsers().delete(parseInt(id, 10))
        return id
    }

    async getAccountByUser(userId) {
        return await tables
            .authAccounts()
            .where({ userId: parseInt(userId, 10) })
            .first()
    }

    async createAccount({
        provider,
        userId, // camelcase ?
        type,
        providerAccountId,
        token_type,
        scope,
        expires_at,
        ext_expires_in,
        access_token,
        id_token,
        session_state,
    }) {
        const data = {
            provider,
            userId,
            type,
            providerAccountId,
            tokenType: token_type,
            scope,
            expiresAt: expires_at,
            extExpiresIn: ext_expires_in,
            accessToken: access_token,
            idToken: id_token,
            sessionState: session_state,
        }
        const [newAccount] = await tables
            .authAccounts()
            .insert(data)
            .returning('*')
        return newAccount
    }

    async deleteAccount(providerAccountId, provider) {
        const exists = await tables
            .authAccounts()
            .where('providerAccountId', providerAccountId)
            .first()
        if (exists === null) {
            throw new Error('Account not found')
        }
        await tables.authAccounts().delete(providerAccountId)
        return providerAccountId
    }

    async createSession({ sessionToken, userId, expires }) {
        const newSession = { sessionToken, userId, expires }

        await tables.authSessions().insert(newSession)
        return newSession
    }

    async getSessionAndUser(sessionToken) {
        const session =
            (await tables
                .authSessions()
                .where('sessionToken', sessionToken)
                .first()) || null
        if (session === null) {
            return null
        }
        const user =
            (await tables.authUsers().where('id', session.userId).first()) ||
            null
        if (user === null) {
            return null
        }
        return { session, user }
    }

    async updateSession(sessionToken, session) {
        const exists = await tables
            .authSessions()
            .where('sessionToken', sessionToken)
            .first()
        if (exists === null) {
            throw new Error('Session not found')
        }
        const updatedSession = {
            ...session,
        }
        await tables
            .authSessions()
            .update(updatedSession)
            .where('sessionToken', sessionToken)
        return updatedSession
    }

    async deleteSession(sessionToken) {
        const exists = await tables
            .authSessions()
            .where('session_token', sessionToken)
            .first()
        if (exists === null) {
            throw new Error('Session not found')
        }
        await tables.authSessions().delete(sessionToken)
        return sessionToken
    }

    async createVerificationToken({ identifier, expires, token }) {
        const newToken = { identifier, expires, token }
        await tables.authVerificationTokens().insert(newToken)
        return newToken
    }

    async useVerificationToken(identifier) {
        const token =
            (await tables
                .authVerificationTokens()
                .where('identifier', identifier)
                .first()) || null
        return token
    }
}
