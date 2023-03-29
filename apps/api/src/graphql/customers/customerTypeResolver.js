import * as tables from '../../database/tables'

const customerTypeResolver = {
    id: ({ mgaId }) => mgaId,
    orders: async ({ id }) => {
        const orders = await tables.orders().where('customerId', id)
        return orders
    },
}

export default customerTypeResolver
