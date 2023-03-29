/* eslint-disable class-methods-use-this */
import { nanoid } from 'nanoid'
import NextAuthDriver from './NextAuthDriver'

export default class MemoryAuthDriver extends NextAuthDriver {
    static NAME = 'memory'

    static users = new Map()

    static accounts = new Map()

    static sessions = new Map()

    static verificationTokens = new Map()

    async createUser(user) {
        const id = nanoid()
        const newUser = { id, ...user }
        MemoryAuthDriver.users.set(id, newUser)
        return newUser
    }

    async getUser(id) {
        return MemoryAuthDriver.users.get(id) || null
    }

    async getUserByEmail(email) {
        const user = [...MemoryAuthDriver.users.values()].find(
            (user) => user.email === email
        )
        return user || null
    }

    async getUserByAccount(providerAccountId, provider) {
        const { users, accounts } = MemoryAuthDriver
        const account = [...accounts.values()].find(
            (account) =>
                account.providerAccountId === providerAccountId &&
                account.provider === provider
        )
        return users.get(account.userId) || null
    }

    async updateUser(id, user) {
        const { users } = MemoryAuthDriver
        if (!users.has(id)) {
            throw new Error('User not found')
        }
        const updatedUser = {
            ...users.get(id),
            ...user,
        }
        users.set(id, updatedUser)
        return updatedUser
    }

    async deleteUser(userId) {
        const { users } = MemoryAuthDriver
        if (!users.has(userId)) {
            throw new Error('User not found')
        }
        users.delete(userId)
        return userId
    }

    async getAccountByUser(userId) {
        const { accounts } = MemoryAuthDriver
        const account = [...accounts.values()].find(
            (account) => account.userId === userId
        )
        return account || null
    }

    async createAccount(account) {
        const id = nanoid()
        const newAccount = { id, ...account }
        MemoryAuthDriver.accounts.set(id, newAccount)
        return newAccount
    }

    async deleteAccount(providerAccountId, provider) {
        const { accounts } = MemoryAuthDriver
        if (!accounts.has(providerAccountId)) {
            throw new Error('Account not found')
        }
        accounts.delete(providerAccountId)
        return providerAccountId
    }

    async createSession({ sessionToken, userId, expires }) {
        const newSession = { sessionToken, userId, expires }
        MemoryAuthDriver.sessions.set(sessionToken, newSession)
        return newSession
    }

    async getSessionAndUser(sessionToken) {
        const { sessions, users } = MemoryAuthDriver
        const session = sessions.get(sessionToken) || null
        if (!session) {
            return null
        }
        const user = users.get(session.userId) || null
        if (!user) {
            return null
        }
        return { session, user }
    }

    async updateSession(sessionToken, session) {
        const { sessions } = MemoryAuthDriver
        if (!sessions.has(sessionToken)) {
            throw new Error('Session not found')
        }
        const updatedSession = {
            ...sessions.get(sessionToken),
            ...session,
        }
        users.set(sessionToken, updatedSession)
        return updatedSession
    }

    async deleteSession(sessionToken) {
        const { sessions } = MemoryAuthDriver
        if (!sessions.has(sessionToken)) {
            throw new Error('Session not found')
        }
        sessions.delete(sessionToken)
        return sessionToken
    }

    async createVerificationToken({ identifier, expires, token }) {
        const newToken = { identifier, expires, token }
        MemoryAuthDriver.verificationTokens.set(identifier, newToken)
        return newToken
    }

    async useVerificationToken(identifier) {
        const token =
            MemoryAuthDriver.verificationTokens.get(identifier) || null
        return token
    }
}
