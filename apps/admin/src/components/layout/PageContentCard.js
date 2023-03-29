import { cx } from 'cva'
import React from 'react'

export default function PageContentCard({ className, children }) {
    return (
        <div
            className={cx(
                'bg-white rounded-lg overflow-hidden shadow',
                className
            )}
        >
            {children}
        </div>
    )
}
