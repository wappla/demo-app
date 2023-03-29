import { useState } from 'react'
import { mergeQueryResults } from '../../utils/graphql'

const useFetchMore = (fetchMore, data, key) => {
    const hasNextPage = data && data[key] && data[key].pageInfo.hasNextPage
    const [isLoadingMore, setIsLoadingMore] = useState(false)
    const handleFetchMore = async () => {
        setIsLoadingMore(true)
        const after = data[key].pageInfo.endCursor
        await fetchMore({
            variables: { after },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                setIsLoadingMore(false)
                return mergeQueryResults(previousResult, fetchMoreResult, key)
            },
        })
        setIsLoadingMore(false)
    }
    return [handleFetchMore, isLoadingMore, hasNextPage]
}

export default useFetchMore
