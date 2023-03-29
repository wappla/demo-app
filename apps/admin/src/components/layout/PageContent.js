import { cx } from 'cva'
import React from 'react'

export default function PageContent({ className, children }) {
    return (
        <main
            className={cx(
                'mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 pb-28 min-h-screen',
                className
            )}
        >
            {children}
        </main>
    )
}
