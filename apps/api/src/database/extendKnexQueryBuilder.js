/* eslint-disable func-names */
import { cursorToSqlQuery } from '@dashdot/cursors'
import knex from 'knex'

export default function extendKnexQueryBuilder() {
    knex.QueryBuilder.extend('whereAfter', function (after, orderBy) {
        const [whereQuery, whereValues, orderQuery] = cursorToSqlQuery(
            after,
            orderBy
        )
        return this.whereRaw(
            whereQuery.replace(/\$\w+/g, '?'),
            whereValues
        ).orderByRaw(orderQuery)
    })

    knex.QueryBuilder.extend('withoutDeleted', function () {
        return this.whereNull('deletedAt')
    })
}
