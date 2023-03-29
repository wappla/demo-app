import { faker } from '@faker-js/faker'
import { orders } from '../tables'
import KnexFactory from './KnexFactory'

export default class OrderFactory extends KnexFactory {
    static get table() {
        return orders
    }

    static async make() {
        return {
            uid: faker.datatype.uuid(),
        }
    }
}
