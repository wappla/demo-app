import { useInfiniteQuery } from '@tanstack/react-query'
import {
    getNextPage,
    checkHasNextPage,
    pagesToCollection,
} from '../../utils/graphql'
import useGraphqlClient from './useGraphqlClient'

const useGraphqlInfiniteQuery = (
    key,
    query,
    dataKey,
    variables = {},
    options = {}
) => {
    const graphqlClient = useGraphqlClient()
    const result = useInfiniteQuery(
        [key, variables],
        ({ pageParam }) =>
            graphqlClient.request(query, {
                after: pageParam,
                ...variables,
            }),
        {
            retry: false,
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage) => getNextPage(lastPage, dataKey),
            ...options,
        }
    )
    const { isLoading, data, error } = result
    const hasNextPage = checkHasNextPage(data, dataKey)
    const hasMoreRecords = !isLoading && !error && hasNextPage
    return {
        collections: {
            [dataKey]: pagesToCollection(result.data, dataKey),
        },
        hasMoreRecords,
        ...result,
    }
}

export default useGraphqlInfiniteQuery
