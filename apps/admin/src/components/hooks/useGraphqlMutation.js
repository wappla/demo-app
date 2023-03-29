import { useMutation } from '@tanstack/react-query'
import useGraphqlClient from './useGraphqlClient'

const useGraphqlMutation = (query, options = {}) => {
    const graphqlClient = useGraphqlClient()
    return useMutation(
        (params) => graphqlClient.request(query, params),
        options
    )
}

export default useGraphqlMutation
