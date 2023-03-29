import { useQuery } from '@tanstack/react-query'
import useGraphqlClient from './useGraphqlClient'

const useGraphqlQuery = (key, query, variables = {}, options = {}) => {
    const graphqlClient = useGraphqlClient()
    return useQuery(
        [key, variables],
        () => graphqlClient.request(query, variables),
        {
            retry: false,
            refetchOnWindowFocus: false,
            ...options,
        }
    )
}

export default useGraphqlQuery
