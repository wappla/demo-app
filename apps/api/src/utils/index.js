import once from 'lodash/once'
import { camelCase, snakeCase } from 'change-case'

export const isRemoteEnv = () => {
    const { NODE_ENV } = process.env
    return NODE_ENV !== 'local' && NODE_ENV !== 'test' && NODE_ENV !== 'e2e'
}

export const isTestEnv = () => {
    const { NODE_ENV } = process.env
    return NODE_ENV === 'test' || NODE_ENV === 'e2e'
}

export function isObject(value) {
    return value !== null && typeof value === 'object'
}

export const deepMerge = (target = {}, source = {}) => {
    let result = {}
    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(source)) {
        const obj = source[key]
        if (!!obj && obj.constructor === Object) {
            result = {
                ...result,
                [key]: deepMerge(target[key], source[key]),
            }
        }
    }
    return {
        ...target,
        ...source,
        ...result,
    }
}

export function createKeyMapper(mapper) {
    return (obj) => {
        if (!isObject(obj) || Array.isArray(obj)) {
            return obj
        }
        return Object.entries(obj).reduce((acc, [key, value]) => {
            acc[mapper(key)] = value
            return acc
        }, {})
    }
}

export function keysToCamelCase(obj) {
    return createKeyMapper(camelCase)(obj)
}

export function keysToSnakeCase(obj) {
    return createKeyMapper(snakeCase)(obj)
}

export function onProcessExit(handler) {
    const exitHandler = once(handler)
    // do something when app is closing
    process.on('exit', exitHandler.bind(null, { cleanup: true }))
    // catches ctrl+c event
    process.on('SIGINT', exitHandler.bind(null, { exit: true }))
    // catches "kill pid" (for example: nodemon restart)
    process.on('SIGUSR1', exitHandler.bind(null, { exit: true }))
    process.on('SIGUSR2', exitHandler.bind(null, { exit: true }))
    // catches uncaught exceptions
    process.on('uncaughtException', exitHandler.bind(null, { exit: true }))
}
