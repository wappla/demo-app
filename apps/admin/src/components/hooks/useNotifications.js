import { useEffect, useState, useContext } from 'react'
import { Trans } from '@lingui/react'
import * as constants from '@demo/constants'
import { NotificationsContext } from '../providers/NotificationsProvider'

const {
    NOTIFICATION_TYPE_ERROR: ERROR,
    NOTIFICATION_TYPE_SUCCESS: SUCCESS,
    NOTIFICATION_TYPE_WARNING: WARNING,
} = constants

const useNotifications = () => {
    const notificationDispatcher = useContext(NotificationsContext)
    const [notifications, setNotifications] = useState([])
    useEffect(
        () =>
            notificationDispatcher.subscribe((newNotifications) => {
                setNotifications(newNotifications)
            }),
        [notificationDispatcher]
    )

    const dispatchSuccess = (data) =>
        notificationDispatcher.dispatch({
            type: SUCCESS,
            title: <Trans id="Success" />,
            message: <Trans id="Your request was handled successfully." />,
            ...data,
        })

    const dispatchError = (data = {}) =>
        notificationDispatcher.dispatch({
            type: ERROR,
            title: <Trans id="Error" />,
            message: (
                <Trans id="Oops, looks like something went wrong, please try again later." />
            ),
            ...data,
        })

    const dispatchWarning = (data) =>
        notificationDispatcher.dispatch({
            type: WARNING,
            title: <Trans id="Warning" />,
            message: <Trans id="Careful, a warning was triggered." />,
            ...data,
        })

    const dispatchGraphqlError = (error, data) => {
        let message = (
            <Trans id="Oops, looks like something went wrong, please try again later." />
        )
        if (error.response?.errors.length > 0) {
            message = error.response.errors[0].message
        } else if (error.message) {
            message = error.message
        }
        return notificationDispatcher.dispatch({
            type: ERROR,
            title: <Trans id="Error" />,
            message,
            ...data,
        })
    }

    const removeNotification = (notification) => {
        notificationDispatcher.removeNotification(notification)
    }

    return {
        notifications,
        dispatchError,
        dispatchWarning,
        dispatchSuccess,
        dispatchGraphqlError,
        dispatch: (data) => notificationDispatcher.dispatch(data),
        removeNotification,
    }
}

export default useNotifications
