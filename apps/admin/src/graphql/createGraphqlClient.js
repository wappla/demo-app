import { Trans } from '@lingui/react'
import * as constants from '@demo/constants'
import { GraphQLClient as GraphqlClient } from 'graphql-request'
import { getNotificationDispatcher } from '../utils/NotificationDispatcher'

const { NOTIFICATION_TYPE_ERROR: ERROR } = constants

const graphqlUri = process.env.NEXT_PUBLIC_GRAPHQL_URI

export default function createGraphqlClient(locale, options = {}) {
    const notificationDispatcher = getNotificationDispatcher()
    return new GraphqlClient(graphqlUri, {
        credentials: 'include',
        headers: {
            'Accept-Language': locale,
        },
        responseMiddleware: (responseOrError) => {
            const isError = responseOrError instanceof Error
            if (isError) {
                let { message } = responseOrError
                if (responseOrError.response?.errors?.length > 0) {
                    const [error] = responseOrError.response.errors
                    message = error.message
                }
                if (responseOrError.response.error) {
                    message = responseOrError.response.error
                }
                notificationDispatcher.dispatch({
                    type: ERROR,
                    title: <Trans id="Server Error" />,
                    message,
                })
                console.log(JSON.stringify(responseOrError, null, 2))
            }
        },
        ...options,
    })
}
