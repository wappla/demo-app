import { faker } from '@faker-js/faker'
import { customers } from '../tables'
import KnexFactory from './KnexFactory'
import OrderFactory from './OrderFactory'

export default class CustomerFactory extends KnexFactory {
    static get table() {
        return customers
    }

    static async make() {
        return {
            name: faker.name.fullName(),
        }
    }

    createOrders(records, states, data) {
        return OrderFactory.create(records, states, {
            customerId: this.id,
            ...data,
        })
    }
}
