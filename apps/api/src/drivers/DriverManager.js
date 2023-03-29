export default class DriverManager {
    static registrations = new Map()

    static register(name, Driver) {
        let previousRegistrations = []
        if (DriverManager.registrations.has(name)) {
            previousRegistrations = DriverManager.registrations.get(name)
        }
        DriverManager.registrations.set(name, [
            ...previousRegistrations,
            Driver,
        ])
    }

    constructor(options) {
        this.drivers = new Map()
    }

    async init(name, config) {
        if (this.drivers.has(name)) {
            throw new Error(`Driver '${name}' is already initialized.`)
        }
        if (!config) {
            throw new Error(`No configuration is passed for '${name}' driver.`)
        }
        const { driver = null } = config
        let instance = null
        if (typeof driver !== 'string') {
            instance = driver
        } else {
            DriverManager.registrations.get(name).forEach((Driver) => {
                if (driver === Driver.NAME) {
                    instance = new Driver(config)
                }
            })
        }
        if (instance === null) {
            const registeredDriverNames = registrations
                .get(name)
                .map((Driver) => Driver.NAME)
            throw new Error(
                `No registered '${name}' driver was found for name '${driver}'. Registered drivers: ${registeredDriverNames.join(
                    ', '
                )}`
            )
        }
        this[name] = instance
        this.drivers.set(name, instance)
        try {
            await instance.init()
        } catch (cause) {
            throw new Error(`Error initializing '${name}' driver`, { cause })
        }
        return instance
    }

    async get(name) {
        if (!this.drivers.has(name)) {
            throw new Error(`Driver '${name}' was not initialized.`)
        }
        return this.drivers.get(name)
    }

    destroy() {
        try {
            this.drivers.forEach((key, driver) => {
                driver.destroy()
                delete this[key]
            })
            this.drivers.clear()
        } catch (cause) {
            throw new Error(cause)
        }
    }
}
