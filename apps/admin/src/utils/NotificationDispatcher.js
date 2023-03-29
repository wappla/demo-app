import EventTarget from './EventTarget'

const DEFAULT_DURATION = 5000

export default class NotificationDispatcher extends EventTarget {
    constructor(defaultDuration = DEFAULT_DURATION) {
        super()
        this.defaultDuration = defaultDuration
        this.notifications = []
    }

    createNotification(
        data,
        createdAt = Date.now(),
        duration = this.defaultDuration
    ) {
        return {
            data,
            createdAt,
            duration,
        }
    }

    removeNotification(notification) {
        const index = this.notifications.indexOf(notification)
        if (index !== -1) {
            this.notifications.splice(index, 1)
        }
        this.dispatchEvent(new CustomEvent('changed'))
        this.dispatchEvent(new CustomEvent('removed', { detail: notification }))
    }

    dispatchNotification(notification) {
        this.notifications.push(notification)
        setTimeout(() => {
            this.removeNotification(notification)
        }, notification.duration)
        this.dispatchEvent(new CustomEvent('changed'))
        this.dispatchEvent(new CustomEvent('added', { detail: notification }))
    }

    dispatch(data, createdAt, duration) {
        const notification = this.createNotification(data, createdAt, duration)
        this.dispatchNotification(notification)
    }

    subscribe(listener) {
        this.addEventListener('changed', () =>
            listener([...this.notifications])
        )
        return () => {
            this.removeEventListener('changed', () =>
                listener([...this.notifications])
            )
        }
    }
}

let notificationDispatcher = null
export const getNotificationDispatcher = () => {
    if (notificationDispatcher === null) {
        notificationDispatcher = new NotificationDispatcher()
        return notificationDispatcher
    }
    return notificationDispatcher
}
