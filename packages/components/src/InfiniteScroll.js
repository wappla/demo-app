import React from 'react'
import Spinner from './Spinner'
import InfiniteScrollSentinel from './InfiniteScrollSentinel'
import Button from './Button'

export default function InfiniteScroll({
    isFetchingMore,
    onLoadMore,
    onFetchMore,
    hasMore,
    loadMoreOnPageEnd = true,
    loadMoreButtonText,
    children,
}) {
    return (
        <div className="relative">
            {children}
            {loadMoreOnPageEnd && isFetchingMore && (
                <div className="flex justify-center items-center h-10">
                    <Spinner color="gray" />
                </div>
            )}
            {loadMoreOnPageEnd && !isFetchingMore && hasMore && (
                <InfiniteScrollSentinel onIntersect={onFetchMore} />
            )}
            {!loadMoreOnPageEnd && hasMore && (
                <div className="flex justify-center items-center">
                    <Button onClick={onLoadMore}>{loadMoreButtonText}</Button>
                </div>
            )}
        </div>
    )
}
