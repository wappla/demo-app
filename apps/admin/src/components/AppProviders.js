import React from 'react'
import { I18nProvider } from '@lingui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import Notifications from './utils/Notifications'
import GraphqlClientProvider from './providers/GraphqlClientProvider'
import NotificationsProvider from './providers/NotificationsProvider'

export default function AppProviders({
    i18n,
    queryClient,
    graphqlClient,
    notificationDispatcher,
    children,
}) {
    return (
        <GraphqlClientProvider value={graphqlClient}>
            <QueryClientProvider client={queryClient}>
                <I18nProvider i18n={i18n}>
                    <NotificationsProvider value={notificationDispatcher}>
                        {children}
                        <Notifications />
                    </NotificationsProvider>
                </I18nProvider>
            </QueryClientProvider>
        </GraphqlClientProvider>
    )
}
