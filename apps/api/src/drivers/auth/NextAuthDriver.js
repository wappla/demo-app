/* eslint-disable no-return-await */
import { randomUUID } from 'node:crypto'
import { EncryptJWT, jwtDecrypt } from 'jose'
import hkdf from '@panva/hkdf'

const DEFAULT_MAX_AGE = 30 * 24 * 60 * 60 // 30 days

export default class NextAuthDriver {
    constructor(config = {}) {
        const { secret, apiToken } = config
        this.secret = secret
        this.apiToken = apiToken
    }

    init() {}

    destroy() {}

    async verifyJwtToken(jwtToken) {
        const encryptionSecret = await this.getDerivedEncryptionKey()
        const { payload } = await jwtDecrypt(jwtToken, encryptionSecret, {
            clockTolerance: 15,
        })
        return payload
    }

    async encodeJwtToken(payload, maxAge = DEFAULT_MAX_AGE) {
        const encryptionSecret = await this.getDerivedEncryptionKey()
        const now = Date.now() / 1000 // seconds
        return await new EncryptJWT(payload)
            .setProtectedHeader({
                alg: 'dir',
                enc: 'A256GCM',
            })
            .setIssuedAt()
            .setExpirationTime(now + maxAge)
            .setJti(randomUUID())
            .encrypt(encryptionSecret)
    }

    async getDerivedEncryptionKey() {
        return await hkdf(
            'sha256',
            this.secret,
            '',
            'NextAuth.js Generated Encryption Key',
            32
        )
    }

    async verifyApiToken(apiToken) {
        if (apiToken !== this.apiToken) {
            throw new Error('Invalid API token')
        }
        return true
    }
}
