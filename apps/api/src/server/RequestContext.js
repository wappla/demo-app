import { AsyncLocalStorage } from 'node:async_hooks'

export default class RequestContext {
    static context = new AsyncLocalStorage()

    static run(callback) {
        const store = new Map()
        RequestContext.context.run(store, () => callback(store))
    }

    static has(key) {
        const store = RequestContext.context.getStore()
        if (!store) {
            return false
        }
        return store.has(key)
    }

    static get(key) {
        const store = RequestContext.context.getStore()
        if (!store) {
            return null
        }
        return store.get(key)
    }

    static set(key, value) {
        return RequestContext.context.getStore().set(key, value)
    }
}
