import React, { forwardRef } from 'react'
import { cva } from 'cva'
import Icon from './Icon'

function IconBefore({ className, size, ...props }) {
    return <Icon size={size} className={className} {...props} />
}

function IconAfter({ className, size, ...props }) {
    return <Icon size={size} className={className} {...props} />
}

export const buttonVariant = cva(
    [
        'inline-flex items-center justify-center transition-all font-medium cursor-pointer outline-2 outline-offset-4',
        'disabled:cursor-not-allowed',
    ],
    {
        variants: {
            size: {
                sm: 'text-sm py-2 px-3.5 gap-2',
                md: 'text-sm py-2.5 px-4 gap-3',
                lg: 'text-base py-2.5 px-[18px] gap-3.5',
                xl: 'text-base py-3 px-5 gap-3.5',
                '2xl': 'text-lg py-4 px-7 gap-3.5',
            },
            variant: {
                primary:
                    'bg-primary text-white shadow-gray-900/0.5 border border-primary hover:enabled:bg-primary-600 hover:border-primary-600 disabled:opacity-60 disabled:bg-sky-200 disabled:border-sky-200 shadow-sm',
                outline:
                    'text-gray-700 border shadow-gray-900/0.5 border-gray-300 hover:enabled:bg-gray-50 disabled:text-gray-300 shadow-sm',
                ghost: 'text-gray-500 hover:enabled:bg-gray-100 hover:enabled:text-gray-600 disabled:text-gray-300',
            },
            grouped: {
                none: 'rounded-lg',
                left: 'rounded-l-lg',
                center: '-ml-px',
                right: 'rounded-r-lg -ml-px',
            },
        },
        defaultVariants: {
            size: 'md',
            variant: 'primary',
            grouped: 'none',
        },
    }
)

function getIconSize(buttonSize) {
    switch (buttonSize) {
        case 'sm':
            return 'xs'
        case 'lg':
        case 'xl':
        case '2xl':
            return 'md'
        default:
            return 'sm'
    }
}

function Button(
    {
        as = 'button',
        type = 'button',
        variant,
        size,
        grouped,
        iconAfter,
        iconBefore,
        className,
        children,
        isLoading,
        ...props
    },
    ref
) {
    const Component = as
    const iconSize = getIconSize(size)
    const hasIconAfter = !!iconAfter
    const hasIconBefore = !!iconBefore
    return (
        <Component
            ref={ref}
            type={as === 'button' ? type : undefined}
            className={buttonVariant({
                size,
                variant,
                grouped,
                className,
            })}
            {...props}
        >
            {isLoading && (
                <IconBefore
                    name="spinner"
                    className="animate-spin"
                    size={iconSize}
                />
            )}
            {!isLoading && hasIconBefore ? (
                <IconBefore name={iconBefore} />
            ) : null}
            {children}
            {hasIconAfter ? <IconAfter name={iconAfter} /> : null}
        </Component>
    )
}

export default forwardRef(Button)
