import React from 'react'
import { cx } from 'cva'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function PageHeaderLink({ to = '/', matchPath, children }) {
    const resolved = useResolvedPath(to)
    const match = useMatch({
        path: matchPath || resolved.pathname,
        end: true,
    })
    const isActive = match !== null
    return (
        <Link
            to={to}
            className={cx(
                'flex items-center justify-center transition-all font-medium cursor-pointer rounded-lg py-2 px-3 ',
                isActive && 'bg-gray-900'
            )}
        >
            <span className="text-sm font-medium text-gray-300">
                {children}
            </span>
        </Link>
    )
}
