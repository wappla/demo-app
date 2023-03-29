import createAppConfig from './createAppConfig'
import { deepMerge } from '../utils/index'
import DriverManager from '../drivers/DriverManager'
import KnexAuthDriver from '../drivers/auth/KnexAuthDriver'
import MemoryAuthDriver from '../drivers/auth/MemoryAuthDriver'

DriverManager.register('auth', KnexAuthDriver)
DriverManager.register('auth', MemoryAuthDriver)

export default class App {
    static instance = null

    static getInstance(config) {
        if (!App.instance) {
            App.instance = new App(config)
        }
        return App.instance
    }

    constructor(config) {
        const defaultConfig = createAppConfig()
        this.config = deepMerge(defaultConfig, config)
        this.drivers = new DriverManager()
    }

    async init() {
        const { auth } = this.config
        await this.drivers.init('auth', auth)
    }

    async destroy() {
        await this.drivers.destroy()
    }
}
