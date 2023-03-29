import React, { forwardRef } from 'react'
import { cva, cx } from 'cva'
import Icon from './Icon'

const groupedVariant = cva('', {
    variants: {
        grouped: {
            none: 'rounded-md focus:rounded-md',
            left: 'rounded-l-md focus:rounded-l-md',
            center: '-ml-px focus:-ml-px',
            right: 'rounded-r-md -ml-px focus:rounded-r-md focus:-ml-px',
        },
    },
    defaultVariants: {
        grouped: 'none',
    },
})

function IconBefore({ className, hasError, ...props }) {
    return (
        <Icon
            className={cx(
                'absolute top-1/2 -translate-y-1/2 left-4 text-gray-500',
                hasError && 'text-red-400',
                className
            )}
            {...props}
        />
    )
}

function IconAfter({ className, hasError, ...props }) {
    return (
        <Icon
            className={cx(
                'absolute top-1/2 -translate-y-1/2 right-4 text-gray-500',
                hasError && 'text-red-400',
                className
            )}
            {...props}
        />
    )
}

function FilterInput(
    {
        className,
        hasError = false,
        grouped = 'none',
        disabled,
        iconBefore,
        iconAfter,
        type = 'text',
        onChange,
        ...props
    },
    ref
) {
    const hasIconAfter = !!iconAfter
    const hasIconBefore = !!iconBefore
    return (
        <div className="relative focus-within:z-10">
            {hasIconBefore && (
                <IconBefore hasError={hasError} name={iconBefore} />
            )}
            <input
                type={type}
                ref={ref}
                onChange={(event) => onChange(event)}
                className={cx([
                    'bg-gray-900 text-white border-gray-800 font-medium block py-3 px-4 w-full leading-[20px] text-sm placeholder-gray-400',
                    'disabled:cursor-not-allowed disabled:bg-gray-50',
                    hasError &&
                        'border-red-300 placeholder-red-300 text-red-600',
                    hasIconBefore && 'pl-11',
                    hasIconAfter && 'pr-11',
                    groupedVariant({
                        grouped,
                    }),
                    className,
                ])}
                disabled={disabled}
                aria-invalid={hasError}
                {...props}
            />
            {hasIconAfter && <IconAfter hasError={hasError} name={iconAfter} />}
        </div>
    )
}

export default forwardRef(FilterInput)
