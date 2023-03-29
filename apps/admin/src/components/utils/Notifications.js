import React from 'react'
import { AnimatedNotification } from '@demo/components/Notification'
import NotificationsContainer from '@demo/components/NotificationsContainer'
import useNotifications from '../hooks/useNotifications'

export default function Notifications() {
    const { notifications, removeNotification } = useNotifications()
    return (
        <NotificationsContainer>
            {notifications.map((notification) => (
                <AnimatedNotification
                    key={notification.createdAt}
                    type={notification.data.type}
                    title={notification.data.title}
                    message={notification.data.message}
                    drag="x"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onDismiss={() => removeNotification(notification)}
                    onDragEnd={() => removeNotification(notification)}
                />
            ))}
        </NotificationsContainer>
    )
}
