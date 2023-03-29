import React from 'react'
import { cx } from 'cva'

export default function TableRow({ className, isSelectable, ...props }) {
    return (
        <tr
            className={cx(
                isSelectable && 'hover:bg-gray-50 cursor-pointer',
                className
            )}
            {...props}
        />
    )
}
