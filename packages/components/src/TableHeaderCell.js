import React from 'react'
import { cx } from 'cva'

export default function TableHeaderCell({ className, children, ...props }) {
    return (
        <th
            className={cx(
                'px-6 py-3 bg-gray-50 text-left text-xs leading-5 font-medium text-gray-500 tracking-wider',
                className
            )}
            {...props}
        >
            {children}
        </th>
    )
}
