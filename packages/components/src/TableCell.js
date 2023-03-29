import React from 'react'
import { cx } from 'cva'

export default function TableCell({
    className,
    size = 'default',
    children,
    ...props
}) {
    return (
        <td
            className={cx(
                'whitespace-no-wrap text-sm',
                size === 'default' && 'px-6 py-4',
                size === 'small' && 'px-6 py-2',
                className
            )}
            {...props}
        >
            {children}
        </td>
    )
}
