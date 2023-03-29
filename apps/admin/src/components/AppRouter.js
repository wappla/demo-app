import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import PageOutlet from './layout/PageOutlet'
import PageNotFound from './layout/PageNotFound'
import usePermissions from './hooks/usePermissions'
import SettingsOutlet from './pages/settings/SettingsOutlet'
import SettingsPageWithState from './pages/settings/SettingsPageWithState'
import DashboardPageWithState from './pages/dashboard/DashboardPageWithState'

export default function AppRouter({ history, ...props }) {
    const { canViewDashboard, canViewSettings } = usePermissions()
    return (
        <BrowserRouter history={history}>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <Routes>
                    <Route path="/" element={<PageOutlet />}>
                        {canViewDashboard && (
                            <Route
                                path="/"
                                element={<DashboardPageWithState {...props} />}
                            />
                        )}
                        {canViewSettings && (
                            <Route
                                path="/settings"
                                element={<SettingsOutlet />}
                            >
                                <Route
                                    path="/"
                                    element={
                                        <SettingsPageWithState {...props} />
                                    }
                                />
                            </Route>
                        )}
                        <Route path="*" element={<PageNotFound {...props} />} />
                    </Route>
                </Routes>
            </QueryParamProvider>
        </BrowserRouter>
    )
}
