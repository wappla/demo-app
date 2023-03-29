import CustomerFactory from '../factories/CustomerFactory'

export default async function seedDatabase() {
    const customers = await CustomerFactory.create(10)
    await Promise.all(customers.map((customer) => customer.createOrders(2)))
}
