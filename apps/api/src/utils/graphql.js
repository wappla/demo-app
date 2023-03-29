import * as constants from '@demo/constants'
import { createCursor } from '@dashdot/cursors'

const { ORDER_BY_ASC: ASC, DEFAULT_PAGE_SIZE } = constants

export const toEdge = (orderBy) => (node) => ({
    node,
    cursor: createCursor(node, orderBy),
})

const getFirstCursor = (edges) => {
    if (edges.length === 0) {
        return null
    }
    return edges[0].cursor
}

const getLastCursor = (edges) => {
    if (edges.length === 0) {
        return null
    }
    return edges[edges.length - 1].cursor
}

export const toConnection = (
    records,
    totalCount,
    orderBy,
    first = DEFAULT_PAGE_SIZE
) => {
    const edges = records.slice(0, first).map(toEdge(orderBy))
    const startCursor = getFirstCursor(edges)
    const endCursor = getLastCursor(edges)
    const hasNextPage = records.length > first
    return {
        edges,
        totalCount: parseInt(totalCount.count, 10),
        pageInfo: {
            hasNextPage,
            startCursor,
            endCursor,
        },
    }
}

export const setDefaultPaginationArgs = (args, key = 'id', direction = ASC) => {
    const {
        first = DEFAULT_PAGE_SIZE,
        after = '',
        orderBy = {},
        search = '',
    } = args
    const alreadyHasDefaultKey = typeof orderBy[key] !== 'undefined'
    if (alreadyHasDefaultKey) {
        return {
            first,
            after,
            orderBy,
            search,
        }
    }
    return {
        first,
        after,
        orderBy: {
            ...orderBy,
            [key]: direction,
        },
        search,
    }
}
