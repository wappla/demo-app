import React from 'react'
import { cx } from 'cva'
import Icon from './Icon'

export default function DropdownMenuItem({
    iconName,
    iconClassName,
    iconSize = 'sm',
    children,
    className,
    disabled = false,
    ...props
}) {
    return (
        <button
            disabled={disabled}
            type="button"
            role="menuitem"
            className={cx(
                'group flex items-center text-left w-full px-4 py-2 text-sm font-medium leading-5 ',
                !disabled &&
                    'text-gray-600 hover:bg-gray-100 hover:text-gray-800 ',
                disabled &&
                    'cursor-not-allowed text-gray-400 hover:bg-transparent hover:text-gray-400',
                className
            )}
            {...props}
        >
            {iconName && (
                <Icon
                    name={iconName}
                    size={iconSize}
                    color="none"
                    className={cx(
                        'mr-3 ',
                        iconClassName,
                        !disabled && 'text-gray-400 group-hover:text-gray-500',
                        disabled && 'text-gray-300 group-hover:text-gray-300'
                    )}
                />
            )}
            {children}
        </button>
    )
}
