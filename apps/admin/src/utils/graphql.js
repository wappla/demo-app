import { gql } from 'graphql-request'

export const PageInfoFragment = gql`
    fragment PageInfo on PageInfo {
        hasNextPage
        startCursor
        endCursor
    }
`

export const connectionToCollection = (connection = { edges: [] }) =>
    connection.edges.map((edge) => edge.node)

export const getNextPage = (lastPage, key) => lastPage[key].pageInfo.endCursor

export const checkHasNextPage = (data, key) => {
    if (!data || data?.pages.length === 0) {
        return false
    }
    const lastPage = data.pages[data.pages.length - 1]
    return lastPage[key]?.pageInfo?.hasNextPage || false
}

export const pagesToCollection = (data, key) =>
    data?.pages.flatMap((page) => page[key].edges.map((edge) => edge.node)) ||
    []

export const mergeQueryResults = (previousResult, fetchMoreResult, path) => {
    const { edges: newEdges, totalCount, pageInfo } = fetchMoreResult[path]

    return newEdges.length
        ? {
              [path]: {
                  // eslint-disable-next-line no-underscore-dangle
                  __typename: previousResult[path].__typename,
                  edges: [...previousResult[path].edges, ...newEdges],
                  pageInfo,
                  totalCount,
              },
          }
        : previousResult
}
