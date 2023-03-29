import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPageWithState from './pages/login/LoginPageWithState'

export default function AppRouterUnauthenticated({ history, ...props }) {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route
                    path="/login"
                    element={<LoginPageWithState {...props} />}
                />
                <Route path="/" element={<LoginPageWithState {...props} />} />
                <Route path="*" element={<LoginPageWithState {...props} />} />
            </Routes>
        </BrowserRouter>
    )
}
