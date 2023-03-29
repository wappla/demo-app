import { cx } from 'cva'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function SettingsSidebarItem({ to = '/', matchPath, children }) {
    const resolved = useResolvedPath(to)
    const match = useMatch({
        path: matchPath || resolved.pathname,
        end: true,
    })
    const isActive = match !== null
    return (
        <li>
            <Link
                to={to}
                className={cx(
                    'block text-sm  font-semibold px-3 py-2  rounded-md',
                    isActive ? 'text-gray-800 bg-gray-50' : 'text-gray-500'
                )}
            >
                {children}
            </Link>
        </li>
    )
}
