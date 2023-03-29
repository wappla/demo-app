import * as tables from '../../database/tables'
import { setDefaultPaginationArgs, toConnection } from '../../utils/graphql'

const countCustomers = (whereLikeName) => {
    const query = tables.customers()
    if (whereLikeName !== '') {
        query.whereLike('name', whereLikeName)
    }

    return query.count().first()
}

const findPaginatedCustomers = (after, limit, whereLikeName, orderBy) => {
    const query = tables.customers()
    if (whereLikeName !== '') {
        query.whereLike('name', whereLikeName)
    }
    return query.whereAfter(after, orderBy).limit(limit + 1)
}

export default async function customersResolver(root, args) {
    const { after, first, orderBy, search } = setDefaultPaginationArgs(
        args,
        'name'
    )

    let whereLikeName = ''
    if (search && search.search && search.search !== '') {
        whereLikeName = `%${search.search}%`
    }
    const [totalCount, customers] = await Promise.all([
        countCustomers(whereLikeName),
        findPaginatedCustomers(after, first, whereLikeName, orderBy),
    ])
    return toConnection(
        customers,
        { count: Object.values(totalCount)[0] },
        orderBy,
        first
    )
}
