import { useContext } from 'react'
import { GraphqlClientContext } from '../providers/GraphqlClientProvider'

const useGraphqlClient = () => useContext(GraphqlClientContext)

export default useGraphqlClient
