import { Trans } from '@lingui/react'
import AppRouter from './AppRouter'
import AppRouterUnauthenticated from './AppRouterUnauthenticated'
import AppLoading from './AppLoading'
import AppError from './AppError'

export default function App({
    isLoading,
    error = null,
    currentUser,
    ...props
}) {
    if (isLoading) {
        return <AppLoading />
    }
    if (error !== null) {
        return (
            <AppError
                title={<Trans id="Failed to start app." />}
                error={error}
            />
        )
    }
    if (currentUser === null) {
        return <AppRouterUnauthenticated {...props} />
    }
    return <AppRouter {...props} />
}
