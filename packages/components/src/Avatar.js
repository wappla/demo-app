import React from 'react'
import { cva } from 'cva'
import Icon from './Icon'

const getColorBasedOnLabel = (label) => {
    if (!label) {
        return 'gray'
    }
    const firstLetter = label.substring(0, 1).toLowerCase()
    if (firstLetter > 's') {
        return 'blue'
    }
    if (firstLetter > 'n') {
        return 'red'
    }
    if (firstLetter > 'f') {
        return 'yellow'
    }
    return 'gray'
}

export const avatarVariant = cva(
    'inline-flex h-9 w-9 rounded-full p-2 bg-cover items-center justify-center border border-gray-200',
    {
        variants: {
            color: {
                primary: 'bg-green-50 text-green-700 border-green-600',
                yellow: 'bg-yellow-100 text-yellow-700 border-yellow-300',
                gray: 'bg-gray-100 text-gray-700 border-gray-200',
                blue: 'bg-blue-50 text-blue-700 border-blue-200',
                green: 'bg-green-50 text-green-700 border-green-200',
                red: 'bg-red-50 text-red-700 border-red-200',
            },
        },
        defaultVariants: {
            color: 'gray',
        },
    }
)

export default function Avatar({
    className,
    iconName,
    label,
    imageUrl,
    color = 'gray',
    ...props
}) {
    let finalColor = color
    if (color === 'label') {
        finalColor = getColorBasedOnLabel(label)
    }
    return (
        <div
            {...props}
            className={avatarVariant({ color: finalColor }, className)}
            style={imageUrl && { backgroundImage: `url(${imageUrl})` }}
        >
            {iconName && <Icon name={iconName} className="h-full w-full" />}
            {label && (
                <div className="font-medium">
                    {label.substring(0, 2).toUpperCase()}
                </div>
            )}
        </div>
    )
}
