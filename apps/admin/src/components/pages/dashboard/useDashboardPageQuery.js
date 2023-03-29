import { gql } from 'graphql-request'
import {
    connectionToCollection,
    PageInfoFragment,
} from '../../../utils/graphql'
import useGraphqlQuery from '../../hooks/useGraphqlQuery'

const QUERY = gql`
    query DashboardPage(
        $after: String
        $first: Int
        $orderBy: CustomersOrderBy
    ) {
        customers(after: $after, first: $first, orderBy: $orderBy) {
            edges {
                cursor
                node {
                    id
                    name
                    identificationNumber
                }
            }
            pageInfo {
                ...PageInfo
            }
        }
    }
    ${PageInfoFragment}
`

export default function useDashboardPageQuery() {
    const {
        data = {},
        error,
        isLoading,
    } = useGraphqlQuery('DashboardPage', QUERY, { first: 100 })
    return {
        error,
        isLoading,
        customers: connectionToCollection(data.customers),
    }
}
