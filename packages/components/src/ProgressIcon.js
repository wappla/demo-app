import React from 'react'
import { cva } from 'cva'

const iconVariant = cva('-rotate-90', {
    variants: {
        size: {
            xs: 'h-4 w-4',
            sm: 'h-5 w-5',
            md: 'h-6 w-6',
            lg: 'h-8 w-8',
            xl: 'h-10 w-10',
            '2xl': 'h-12 w-12',
            '3xl': 'h-24 w-24',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

export default function ProgressIcon({
    percentage,
    size,
    className,
    ...props
}) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
            className={iconVariant({
                size,
                className,
            })}
            {...props}
        >
            <circle cx="12" cy="12" r="9.6" fill="none" stroke="#E2E8F0" />
            <circle
                cx="12"
                cy="12"
                r="9.6"
                fill="none"
                stroke="#075985"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset={percentage}
            />
        </svg>
    )
}
