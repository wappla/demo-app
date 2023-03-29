/* eslint-disable import/no-cycle */
import { getKnexConnection } from './connections'

export const CUSTOMER = 'customer'
export const ORDER = 'order'
export const AUTH_USER = 'auth_user'
export const AUTH_ACCOUNT = 'auth_account'
export const AUTH_SESSION = 'auth_session'
export const AUTH_VERIFICATION_TOKEN = 'auth_verificationToken'
export const TABLE_NAMES = [
    AUTH_USER,
    AUTH_ACCOUNT,
    AUTH_SESSION,
    AUTH_VERIFICATION_TOKEN,
]

const table = (name) => (trx) => {
    const knex = getKnexConnection()
    if (trx) {
        return knex(name).transacting(trx)
    }
    return knex(name)
}

export const transaction = (...args) => {
    const knex = getKnexConnection()
    return knex.transaction(...args)
}

export const customers = table(CUSTOMER)
export const orders = table(ORDER)
export const authUsers = table(AUTH_USER)
export const authAccounts = table(AUTH_ACCOUNT)
export const authSessions = table(AUTH_SESSION)
export const authVerificationTokens = table(AUTH_VERIFICATION_TOKEN)
